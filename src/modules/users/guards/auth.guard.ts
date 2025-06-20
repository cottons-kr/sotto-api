import { AuthorizedRequest } from '@/types/request';
import {
	CanActivate,
	ExecutionContext,
	HttpException,
	Injectable,
} from '@nestjs/common';
import { TOKEN_NOT_GENERATED } from '../constants';
import { UsersService } from '../users.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: UsersService) {}

	async canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest<AuthorizedRequest>();
		const header = request.headers.authorization || '';
		const token = header?.split(' ')[1];

		if (!token || token === TOKEN_NOT_GENERATED) {
			throw new HttpException('Token not found', 401);
		}

		const user = await this.authService.validateToken(token);
		request.user = user;

		return true;
	}
}

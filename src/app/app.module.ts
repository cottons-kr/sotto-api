import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', '.env.local', '.env.development'],
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

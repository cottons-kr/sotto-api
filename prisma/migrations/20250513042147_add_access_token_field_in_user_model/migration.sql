-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessToken" TEXT[] DEFAULT ARRAY[]::TEXT[];

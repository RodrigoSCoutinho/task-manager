import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { UserController } from './user.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [CreateUserUseCase, PrismaService],
})

export class UserModule {

}
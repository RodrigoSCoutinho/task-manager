import { PrismaService } from "src/infra/database/prisma.service";

export type CreateUserDTO = {
    username: string;
    password: string;
    email: string;
    name: string;
}


export class CreateUserUseCase {
    constructor(private prisma: PrismaService){}

    async execute(data: CreateUserDTO){

    }
}
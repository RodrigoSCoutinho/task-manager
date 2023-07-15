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
      const user = this.prisma.user.findFirst({
        where: {
            OR: [
                {username: data.username},
                {email: data.email}
            ]
        },
      });

      if(user){
        throw new Error("User already exists!");
      }

      return await this.prisma.user.create({
         data,
      })

    }
}
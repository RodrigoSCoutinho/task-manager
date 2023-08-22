import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from 'bcrypt'
import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDTO } from "../dto/user.dto";


@Injectable()
export class CreateUserUseCase {
    constructor(private prisma: PrismaService){}

    async execute(data: CreateUserDTO){
      const user = this.prisma.user.findFirst({
        where: {
            OR: [{ username: data.username }, { email: data.email }]
         },
      });

      if(user){
        throw new HttpException("User already exists!", HttpStatus.BAD_REQUEST);
      }

      const passwordHashed = await hash(data.password, 10)

      return await this.prisma.user.create({
         data: {
          ...data,
          password: passwordHashed,
         }
      });
    }
}
import { CreateUserDTO } from './dto/user.dto';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { Body, Controller, Post } from "@nestjs/common";


@Controller("/users")

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase){}
  
   @Post()
   async create(@Body() data: CreateUserDTO){
      return await this.createUserUseCase.execute(data);
   }
}
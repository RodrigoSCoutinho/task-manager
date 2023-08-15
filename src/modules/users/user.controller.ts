import { CreateUserDTO } from './dto/user.dto';
import { CreateUserValidationPipe } from './pipe/create-user.validation.pipe';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { Body, Controller, Post, UsePipes } from "@nestjs/common";


@Controller("/users")

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase){}
  
   @Post()
   @UsePipes(new CreateUserValidationPipe)
   async create(@Body() data: CreateUserDTO){
      return await this.createUserUseCase.execute(data);
   }
}
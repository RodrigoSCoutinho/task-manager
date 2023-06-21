import { Controller, Get } from "@nestjs/common";

@Controller()

export class UserController {


    @Get("/create")
    helloUser(){
        return "Criar produto"
    }
}
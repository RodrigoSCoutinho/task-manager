import { Controller, Get } from "@nestjs/common";

@Controller()

export class ProductController {


    @Get("/")
    helloUser(){
        return ""
    }
}
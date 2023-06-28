import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { randomUUID } from "crypto";

type ParamsUser = {
    id: string;
    idCompany: string;
};

type QueryUser = {
    p: string;
    r: string;
};

type BodyUser = {
    name: string;
    age: number;
}

@Controller("/users")

export class UserController {

  //* http://localhost:3000/users/234234234

  @Get("/:id/:idCompany")

  findById(@Param() params:ParamsUser){
    return "Usuario de ID " + params.id + "Empresa ID" + params.idCompany;
  }

  //? http://localhost:3000/users?p=10&r=100
  
  @Get("/findByPages")
  findByPages(@Query() queries: QueryUser){
    return "Queries " + queries.p + queries.r;
  }

  @Post("/create")
  create(@Body() data: BodyUser){
    return {
        ...data,
        id: randomUUID(),
    }
  }
}
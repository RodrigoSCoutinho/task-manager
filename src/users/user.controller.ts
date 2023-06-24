import { Controller, Get, Param, Query } from "@nestjs/common";

type ParamsUser = {
    id: string;
    idCompany: string;
}

type QueryUser = {
    p: string;
    r: string;
}

@Controller()

export class UserController {

  //* http://localhost:3000/users/234234234

  @Get("/users/:id/:idCompany")

  findById(@Param() params:ParamsUser){
    return "Usuario de ID " + params.id + "Empresa ID" + params.idCompany;
  }

  //? http://localhost:3000/users?p=10&r=100
  
  @Get("/users/findByPages")
  findByPages(@Query() queries: QueryUser){
    return "Queries " + queries.p + queries.r;
  }
}
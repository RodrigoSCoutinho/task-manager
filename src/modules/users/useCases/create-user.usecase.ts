
export type CreateUserDTO = {
    username: string;
    password: string;
    email: string;
    name: string;
}


export class CreateUserUseCase {
    async execute(data: CreateUserDTO){

    }
}
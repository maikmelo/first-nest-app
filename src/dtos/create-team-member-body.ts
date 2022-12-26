import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
  @IsNotEmpty({
    message: "Nome não pode ser vazio"
  })
  @Length(5,100, { message: "Nome precisa conter entre 3 e 10 caracteres" })
  name: string;

  @IsNotEmpty({
    message: "Função não pode ser vazia"
  })
  function: string;
}
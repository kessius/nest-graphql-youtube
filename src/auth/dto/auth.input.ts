import { InputType } from "@nestjs/graphql";

@InputType('Auth')
export class AuthInput {
  email: string;
  password: string;
}

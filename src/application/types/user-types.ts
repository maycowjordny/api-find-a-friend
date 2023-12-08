import { User } from "../interfaces/user";
import { UserTypesEnum } from "../enum/user-enum";

export interface RegisterUseCaseRequest {
  id?: string;
  name: string;
  email: string;
  password: string;
  type: UserTypesEnum;
}

export interface RegisterUseCaseResponse {
  user: User;
}

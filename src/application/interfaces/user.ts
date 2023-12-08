import { UserRoleEnum, UserTypesEnum } from "../enum/user-enum";

export interface User {
  id?: string;
  name: string;
  password: string;
  email: string;
  type: UserTypesEnum;
  role: UserRoleEnum;
  createdAt?: Date;
}

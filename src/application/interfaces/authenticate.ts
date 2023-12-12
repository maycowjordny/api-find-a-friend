import { User } from "./user";

export interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}
export interface AuthenticateUseCaseResponse {
  user: User;
}

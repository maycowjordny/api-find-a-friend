import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { RegisterUseCase } from "../../user/user-register";
import { AuthenticateUseCase } from "../../authenticate/authenticate";

export function makeCreateUserUseCase() {
  const userRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(userRepository);

  return registerUseCase;
}

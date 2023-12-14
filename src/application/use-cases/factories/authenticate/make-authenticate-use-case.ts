import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { AuthenticateUseCase } from "../../authenticate/authenticate";

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const registerUseCase = new AuthenticateUseCase(usersRepository);

  return registerUseCase;
}

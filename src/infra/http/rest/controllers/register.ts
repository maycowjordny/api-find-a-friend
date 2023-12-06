import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { UserAlreadyExistsError } from "@/application/errors/user-already-exists-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUseCase } from "@/application/use-cases/user/register";
import { ValidatorRepository } from "../validator/user/user.validator";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userValidator = new ValidatorRepository();
    const responseBody = await userValidator.userValidator(request.body);

    const userRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(userRepository);

    await registerUseCase.execute(responseBody);

    return reply.status(201).send({ message: "User created successfully" });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }
}

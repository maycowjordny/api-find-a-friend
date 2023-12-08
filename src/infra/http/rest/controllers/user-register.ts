import { PrismaUsersRepository } from "@/infra/database/prisma/repositories/prisma-users-repository";
import { UserAlreadyExistsError } from "@/application/errors/user-already-exists-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { ValidatorRepository } from "../validator/user/user-validator";
import { RegisterUseCase } from "@/application/use-cases/user/user-register";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userValidate = await validate();

    const userRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(userRepository);

    const { user } = await registerUseCase.execute(userValidate);

    reply.cookie("userId", user.id!, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    return reply.status(201).send({ message: "User created successfully!" });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }

  async function validate() {
    const userValidator = new ValidatorRepository();
    return await userValidator.userValidator(request.body);
  }
}

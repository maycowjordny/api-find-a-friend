import { UserAlreadyExistsError } from "@/application/errors/user-already-exists-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { ValidatorRepository } from "../../validator/user/user-validator";
import { makeCreateUserUseCase } from "@/application/use-cases/factories/user/make-user-use-case";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userValidate = await validate();

    const registerUseCase = makeCreateUserUseCase();

    await registerUseCase.execute(userValidate);

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

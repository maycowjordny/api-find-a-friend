import { FastifyReply, FastifyRequest } from "fastify";
import { AuthenticateValidator } from "../validator/authenticate/authenticate-validator";
import { InvalidCredentialsError } from "@/application/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "@/application/use-cases/factories/make-authenticate-use-case";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const authenticateValidator = await validate();
    const registerUseCase = makeAuthenticateUseCase();

    await registerUseCase.execute(authenticateValidator);

    return reply
      .status(200)
      .send({ message: "User successfully authenticated!" });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }
    throw err;
  }

  async function validate() {
    const authenticate = new AuthenticateValidator();
    return await authenticate.authenticateValidator(request.body);
  }
}

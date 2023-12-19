import { FastifyReply, FastifyRequest } from "fastify";
import { AuthenticateValidator } from "../../validator/authenticate/authenticate-validator";
import { InvalidCredentialsError } from "@/application/errors/invalid-credentials-error";
import { makeAuthenticateUseCase } from "@/application/use-cases/factories/authenticate/make-authenticate-use-case";
import { User } from "@/application/interfaces/user";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const authenticateValidator = await validate();
    const registerUseCase = makeAuthenticateUseCase();
    const { user } = await registerUseCase.execute(authenticateValidator);

    const token = await jwtToken(user);
    return reply
      .status(200)
      .send({ message: "User successfully authenticated!", token });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }
    throw err;
  }

  async function jwtToken(user: User) {
    return await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      }
    );
  }
  async function validate() {
    const authenticate = new AuthenticateValidator();
    return await authenticate.authenticateValidator(request.body);
  }
}

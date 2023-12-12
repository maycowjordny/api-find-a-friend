import { FastifyRequestType } from "fastify/types/type-provider";
import { AuthenticateValidatorAbstract } from "./authenticate-abstract";
import { authenticateBodySchema } from "../zod/schema/authenticate-schema";

export class AuthenticateValidator implements AuthenticateValidatorAbstract {
  async authenticateValidator(body: FastifyRequestType["body"]) {
    return authenticateBodySchema.parse(body);
  }
}

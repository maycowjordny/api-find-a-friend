import { FastifyRequestType } from "fastify/types/type-provider";

export interface AuthenticateValidatorAbstract {
  authenticateValidator(
    body: FastifyRequestType["body"]
  ): Promise<FastifyRequestType["body"]>;
}

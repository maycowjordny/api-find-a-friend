import { FastifyRequestType } from "fastify/types/type-provider";

export interface UserValidatorAbstract {
  userValidator(
    body: FastifyRequestType["body"]
  ): Promise<FastifyRequestType["body"]>;
}

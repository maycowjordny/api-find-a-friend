import { FastifyRequestType } from "fastify/types/type-provider";

export interface organizationValidatorAbstract {
  organizationValidator(
    body: FastifyRequestType["body"]
  ): Promise<FastifyRequestType["body"]>;
}

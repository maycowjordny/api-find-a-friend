import { FastifyRequestType } from "fastify/types/type-provider";

export interface PetTypeValidatorAbstract {
  petTypeValidator(
    body: FastifyRequestType["body"]
  ): Promise<FastifyRequestType["body"]>;
}

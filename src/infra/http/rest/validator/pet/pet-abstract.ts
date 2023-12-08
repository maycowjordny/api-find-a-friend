import { FastifyRequestType } from "fastify/types/type-provider";

export interface PetValidatorAbstract {
  petValidator(
    body: FastifyRequestType["body"]
  ): Promise<FastifyRequestType["body"]>;
}

import { FastifyRequestType } from "fastify/types/type-provider";

export interface FindPetByIdValidatorAbstract {
  findPetByIdValidator(
    params: FastifyRequestType["params"]
  ): Promise<FastifyRequestType["params"]>;
}

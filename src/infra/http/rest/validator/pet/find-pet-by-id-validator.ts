import { FastifyRequestType } from "fastify/types/type-provider";
import { FindPetByIdValidatorAbstract } from "./find-pet-by-id-abstract";
import { findPetByIdBodySchema } from "../zod/schema/find-pet-by-id-schema";

export class FindPetByIdValidatorRepository
  implements FindPetByIdValidatorAbstract
{
  async findPetByIdValidator(params: FastifyRequestType["params"]) {
    return findPetByIdBodySchema.parse(params);
  }
}

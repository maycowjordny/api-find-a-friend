import { FastifyRequestType } from "fastify/types/type-provider";
import { PetGetValidatorAbstract } from "./pet-get-abstract";
import { petGetRegisterBodySchema } from "../zod/schema/pet-get-schema";

export class PetGetValidatorRepository implements PetGetValidatorAbstract {
  async petGetValidator(body: FastifyRequestType["body"]) {
    return petGetRegisterBodySchema.parse(body);
  }
}

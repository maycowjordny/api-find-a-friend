import { FastifyRequestType } from "fastify/types/type-provider";
import { PetTypeValidatorAbstract } from "./pet-type-abstract";
import { petTypeRegisterBodySchema } from "../zod/schema/pet-type-schema";

export class PetTypeValidatorRepository implements PetTypeValidatorAbstract {
  async petTypeValidator(body: FastifyRequestType["body"]) {
    return petTypeRegisterBodySchema.parse(body);
  }
}

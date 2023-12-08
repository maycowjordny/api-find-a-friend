import { FastifyRequestType } from "fastify/types/type-provider";
import { PetValidatorAbstract } from "./pet-abstract";
import { petRegisterBodySchema } from "../zod/schema/pet-schema";

export class PetValidatorRepository implements PetValidatorAbstract {
  async petValidator(body: FastifyRequestType["body"]) {
    return petRegisterBodySchema.parse(body);
  }
}

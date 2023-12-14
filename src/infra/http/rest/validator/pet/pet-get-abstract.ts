import { FastifyRequestType } from "fastify/types/type-provider";

export interface PetGetValidatorAbstract {
  petGetValidator(body: string): Promise<FastifyRequestType["body"]>;
}

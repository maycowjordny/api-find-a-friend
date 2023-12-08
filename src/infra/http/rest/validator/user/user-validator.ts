import { FastifyRequestType } from "fastify/types/type-provider";
import { UserValidatorAbstract } from "./user-abstract";
import { registerBodySchema } from "@/infra/http/rest/validator/zod/schema/user-schema";

export class ValidatorRepository implements UserValidatorAbstract {
  async userValidator(body: FastifyRequestType["body"]) {
    return registerBodySchema.parse(body);
  }
}

import { FastifyRequestType } from "fastify/types/type-provider";
import { OrganizationCreateBodySchema } from "../zod/schema/organization-schema";
import { organizationValidatorAbstract } from "./organization-abstract";

export class OrganizationValidator implements organizationValidatorAbstract {
  async organizationValidator(body: FastifyRequestType["body"]) {
    return OrganizationCreateBodySchema.parse(body);
  }
}

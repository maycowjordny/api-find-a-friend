import { FastifyRequest } from "fastify";
import { OrganizationValidator } from "../organization/organization-validator";
import { Body } from "@/application/types/organization-types";

export async function validateBody(userId: string, request: FastifyRequest) {
  const organizationValidatorRepository = new OrganizationValidator();
  const body = request.body as Body;

  const newBody = {
    userId,
    name: body.name,
    phone: body.phone,
    address: {
      city: body.city,
      country: body.country,
      lat: body.lat,
      lng: body.lng,
      neighbourhood: body.neighbourhood,
      postalCode: body.postalCode,
      province: body.province,
      uf: body.uf,
    },
  };

  return await organizationValidatorRepository.organizationValidator(newBody);
}

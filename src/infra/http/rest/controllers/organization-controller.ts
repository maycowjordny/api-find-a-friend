import { FastifyReply, FastifyRequest } from "fastify";
import { OrganizationValidator } from "../validator/organization/organization-validator";
import { Body } from "@/application/types/organization-types";
import { makeCreateOrganizationUseCase } from "@/application/use-cases/factories/make-organization-use-case";

export async function OrganizationRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { userId } = request.cookies;

    if (!userId) throw new Error("userId is not defined");

    const organizationValidate = await validateBody(userId);

    const organizationUseCase = makeCreateOrganizationUseCase();

    const organization = await organizationUseCase.execute(
      organizationValidate
    );

    reply.cookie("organizationId", organization.id!, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    reply.status(201).send({ message: "Organization created successfully!" });
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  async function validateBody(userId: string) {
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
}

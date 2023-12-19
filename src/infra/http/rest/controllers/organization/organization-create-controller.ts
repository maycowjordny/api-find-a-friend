import { FastifyReply, FastifyRequest } from "fastify";
import { Organization } from "@/application/interfaces/organization";
import { makeCreateOrganizationUseCase } from "@/application/use-cases/factories/organization/make-organization-use-case";
import { validateBody } from "../../validator/zod-factories/make-organization";
import { Body } from "@/application/types/organization-types";

export async function OrganizationRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const organizationValidate = await validateBody(
      request.body as Body,
      request.user.sub
    );

    const organizationUseCase = makeCreateOrganizationUseCase();

    const { organization } = await organizationUseCase.execute(
      organizationValidate
    );

    setOrganizationCookie(organization);

    reply.status(201).send({ message: "Organization created successfully!" });
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  function setOrganizationCookie(organization: Organization) {
    reply.cookie("organizationId", organization.id!, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
  }
}

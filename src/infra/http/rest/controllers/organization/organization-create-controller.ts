import { FastifyReply, FastifyRequest } from "fastify";
import { OrganizationValidator } from "../../validator/organization/organization-validator";
import { Body } from "@/application/types/organization-types";
import { Organization } from "@/application/interfaces/organization";
import { makeCreateOrganizationUseCase } from "@/application/use-cases/factories/organization/make-organization-use-case";
import { validateBody } from "../../validator/zod-factories/make-organization";

export async function OrganizationRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { userId } = request.cookies;

    if (!userId) throw new Error("userId is not defined");

    const organizationValidate = await validateBody(userId, request);

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

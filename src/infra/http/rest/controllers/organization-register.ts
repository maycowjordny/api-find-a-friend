import { FastifyReply, FastifyRequest } from "fastify";
import { OrganizationValidator } from "../validator/organization/organization-validator";
import { OrganizationRegisterUseCase } from "@/application/use-cases/organization/register-organization";
import { OrganizationsRepository } from "@/infra/database/prisma/repositories/prisma-organizations-repository";

export async function OrganizationRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { userId } = request.cookies;

    if (!userId) throw new Error("userId is not defined");

    const organizationValidatorRepository = new OrganizationValidator();
    const body = request.body as { name: string; phone: number };
    const newBody = {
      userId,
      ...body,
    };

    const organizationValidate =
      await organizationValidatorRepository.organizationValidator(newBody);

    const organizationRepository = new OrganizationsRepository();
    const organizationUseCase = new OrganizationRegisterUseCase(
      organizationRepository
    );

    const organization = await organizationUseCase.execute(
      organizationValidate
    );
    reply
      .status(201)
      .send({ message: "Organization created successfully!", organization });
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }
}

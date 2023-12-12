import { PrismaOrganizationsRepository } from "@/infra/database/prisma/repositories/prisma-organizations-repository";
import { OrganizationCreateUseCase } from "../organization/create-organization";

export function makeCreateOrganizationUseCase() {
  const organizationRepository = new PrismaOrganizationsRepository();
  const organizationUseCase = new OrganizationCreateUseCase(
    organizationRepository
  );

  return organizationUseCase;
}

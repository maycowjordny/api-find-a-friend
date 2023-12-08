import { Organization as OrganizationModel } from "@/application/interfaces/organization";
import { Prisma, Organization as RawOrganization } from "@prisma/client";

export function convertToPrisma(
  data: OrganizationModel
): Prisma.OrganizationUncheckedCreateInput {
  const organizationPrisma: Prisma.OrganizationUncheckedCreateInput = {
    name: data.name,
    phone: data.phone,
    userId: data.userId,
  };

  return organizationPrisma;
}

export function convertToDomain(data: RawOrganization): OrganizationModel {
  const organization: OrganizationModel = {
    id: data.id,
    name: data.name,
    phone: data.phone,
    userId: data.userId,
    createdAt: data.createdAt,
  };

  return organization;
}

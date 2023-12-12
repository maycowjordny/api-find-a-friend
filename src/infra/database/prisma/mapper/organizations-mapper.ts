import { Organization as OrganizationModel } from "@/application/interfaces/organization";
import { Prisma, Organization as RawOrganization } from "@prisma/client";

export function convertToPrisma(
  data: OrganizationModel
): Prisma.OrganizationUncheckedCreateInput {
  const organizationPrisma: Prisma.OrganizationUncheckedCreateInput = {
    id: data.id,
    userId: data.userId,
    addressId: data.addressId,
    name: data.name,
    phone: data.phone,
  };

  return organizationPrisma;
}

export function convertToDomain(data: RawOrganization): OrganizationModel {
  const organization: OrganizationModel = {
    id: data.id,
    userId: data.userId,
    addressId: data.addressId,
    name: data.name,
    phone: data.phone,
    createdAt: data.createdAt,
  };

  return organization;
}

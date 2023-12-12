import { Organization } from "@/application/interfaces/organization";
import {
  convertToPrisma,
  convertToDomain,
} from "../mapper/organizations-mapper";
import { prisma } from "../../lib/prisma";
import { OrganizationsRepositoryAbstract } from "../../repositories/organizations-abstract";

export class PrismaOrganizationsRepository
  implements OrganizationsRepositoryAbstract
{
  async create(data: Organization) {
    const organization = await prisma.organization.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(organization);
  }
}

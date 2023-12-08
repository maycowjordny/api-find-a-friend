import { Organization } from "@/application/interfaces/organization";
import {
  convertToPrisma,
  convertToDomain,
} from "../mapper/organizations-mapper";
import { prisma } from "../../lib/prisma";
export class OrganizationsRepository implements OrganizationsRepository {
  async create(data: Organization) {
    const organization = await prisma.organization.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(organization);
  }
}

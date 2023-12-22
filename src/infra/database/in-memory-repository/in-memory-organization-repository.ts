import { randomUUID } from "crypto";
import { OrganizationsRepositoryAbstract } from "../repositories/organizations-abstract";
import { Organization } from "@prisma/client";

export class InMemoryOrganizationRepository
  implements OrganizationsRepositoryAbstract
{
  public items: Organization[] = [];

  async create(data: Organization): Promise<Organization> {
    const organization = {
      id: randomUUID(),
      userId: data.userId,
      addressId: data.addressId,
      name: data.name,
      phone: data.phone,
      createdAt: new Date(),
    };

    this.items.push(organization);

    return organization;
  }
}

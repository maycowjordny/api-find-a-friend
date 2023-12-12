import { OrganizationsRepositoryAbstract } from "../repositories/organizations-abstract";
import { Organization } from "@prisma/client";

export class InMemoryOrganizationRepository
  implements OrganizationsRepositoryAbstract
{
  public items: Organization[] = [];

  async create(data: Organization): Promise<Organization> {
    const organization = {
      id: data.id,
      name: data.name,
      userId: data.userId,
      phone: data.phone,
      addressId: data.addressId,
      createdAt: data.createdAt,
    };

    this.items.push(organization);

    return organization;
  }
}

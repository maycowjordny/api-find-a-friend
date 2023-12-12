import { Organization } from "@/application/interfaces/organization";

export interface OrganizationsRepositoryAbstract {
  create(data: Organization): Promise<Organization>;
}

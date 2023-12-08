import { Organization } from "@/application/interfaces/organization";

export interface OrganizationsRepository {
  create(data: Organization): Promise<Organization>;
}

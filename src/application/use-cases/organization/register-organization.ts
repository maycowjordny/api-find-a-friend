import { OrganizationRegisterUseCaseRequest } from "@/application/types/organization-types";
import { OrganizationsRepository } from "@/infra/database/repositories/organizations-abstract";

export interface OrganizationRegisterUseCaseResponse {
  organization: {
    userId: string;
    name: string;
    phone: number;
  };
}

export class OrganizationRegisterUseCase {
  constructor(private organizationRepository: OrganizationsRepository) {}
  async execute(
    body: OrganizationRegisterUseCaseRequest
  ): Promise<OrganizationRegisterUseCaseResponse> {
    const { name, phone, userId } = body;

    const organization = await this.organizationRepository.create({
      userId,
      name,
      phone,
    });

    return { organization };
  }
}

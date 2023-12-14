import {
  OrganizationRegisterUseCaseRequest,
  OrganizationRegisterUseCaseResponse,
} from "@/application/types/organization-types";
import { PrismaAddressRepository } from "@/infra/database/prisma/repositories/prisma-address-repository";
import { OrganizationsRepositoryAbstract } from "@/infra/database/repositories/organizations-abstract";
import { AddressCreateUseCase } from "../address/create-address";

export class OrganizationCreateUseCase {
  constructor(
    private organizationRepository: OrganizationsRepositoryAbstract
  ) {}
  async execute(
    body: OrganizationRegisterUseCaseRequest
  ): Promise<OrganizationRegisterUseCaseResponse> {
    try {
      const { name, phone, userId } = body;

      const addressRepository = new PrismaAddressRepository();
      const addressUseCase = new AddressCreateUseCase(addressRepository);

      const address = await addressUseCase.execute(body.address);

      const organization = await this.organizationRepository.create({
        addressId: address.id!,
        userId,
        name,
        phone,
      });

      return { organization };
    } catch (err: any) {
      throw new Error(`Cannot create organization with error: ${err.message}`);
    }
  }
}

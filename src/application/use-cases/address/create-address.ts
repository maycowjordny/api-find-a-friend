import { AddressCreateUseCaseRequest } from "@/application/types/address-types";
import { AddressRepositoryAbstract } from "@/infra/database/repositories/address-abstract";

export class AddressCreateUseCase {
  constructor(private addressRepository: AddressRepositoryAbstract) {}
  async execute(body: AddressCreateUseCaseRequest) {
    try {
      const {
        city,
        country,
        lat,
        lng,
        neighbourhood,
        postalCode,
        province,
        uf,
      } = body;

      const address = await this.addressRepository.create({
        city,
        country,
        lat,
        lng,
        neighbourhood,
        postalCode,
        province,
        uf,
      });

      return address;
    } catch (err: any) {
      throw new Error(`Cannot create address with error: ${err.message}`);
    }
  }
}

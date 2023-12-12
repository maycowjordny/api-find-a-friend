import { Address } from "@/application/interfaces/address";

export interface AddressRepositoryAbstract {
  create(data: Address): Promise<Address>;
}

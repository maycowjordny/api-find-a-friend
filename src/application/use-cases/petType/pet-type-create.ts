import {
  PetTypeUseCaseRequest,
  PetTypeUseCaseResponse,
} from "@/application/types/petType-types";
import { PetTypeRepositoryAbstract } from "@/infra/database/repositories/pet-type-abstract";

export class PetTypeUseCase {
  constructor(private petTypeRepository: PetTypeRepositoryAbstract) {}
  async execute(body: PetTypeUseCaseRequest): Promise<PetTypeUseCaseResponse> {
    try {
      const { name } = body;

      const petType = await this.petTypeRepository.create({
        name,
      });
      return { petType };
    } catch (err: any) {
      throw new Error(`Cannot create petType with error: ${err.message}`);
    }
  }
}

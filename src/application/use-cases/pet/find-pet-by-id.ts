import { FindByidUseCaseRequest } from "@/application/interfaces/pet";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class FindPetByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}
  async execute(data: FindByidUseCaseRequest) {
    try {
      const pet = await this.petsRepository.findById(data.id);
      return pet;
    } catch (err: any) {
      throw new Error(`Cannot find pet by id with error: ${err.message}`);
    }
  }
}

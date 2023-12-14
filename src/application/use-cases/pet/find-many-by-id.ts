import { FindByidUseCaseRequest } from "@/application/interfaces/pet";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class FindPetByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}
  async execute(data: FindByidUseCaseRequest) {
    const pet = await this.petsRepository.findById(data.id);
    return pet;
  }
}

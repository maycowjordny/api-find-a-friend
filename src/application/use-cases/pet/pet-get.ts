import {
  GetPetUseCaseRequest,
  GetPetUseCaseResponse,
} from "@/application/types/pet-types";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}
  async execute(query: GetPetUseCaseRequest): Promise<GetPetUseCaseResponse> {
    const pet = await this.petsRepository.findManyNearby(query);

    return { pet };
  }
}

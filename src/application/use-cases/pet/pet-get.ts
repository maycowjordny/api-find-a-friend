import {
  GetPetUseCaseRequest,
  GetPetUseCaseResponse,
} from "@/application/types/pet-types";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}
  async execute(query: GetPetUseCaseRequest): Promise<GetPetUseCaseResponse> {
    try {
      const pet = await this.petsRepository.findManyNearby(query);

      return { pet };
    } catch (err: any) {
      throw new Error(`Cannot find many pet with error: ${err.message}`);
    }
  }
}

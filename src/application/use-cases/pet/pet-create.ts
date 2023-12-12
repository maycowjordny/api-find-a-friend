import {
  PetRegisterUseCaseRequest,
  PetRegisterUseCaseResponse,
} from "@/application/types/pet-types";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class PetRegisterUseCase {
  constructor(private petRepository: PetsRepository) {}
  async execute(
    body: PetRegisterUseCaseRequest
  ): Promise<PetRegisterUseCaseResponse> {
    try {
      const {
        name,
        age,
        description,
        energyLevels,
        environment,
        idependenceLevels,
        size,
        toAdopt,
        organizationId,
        typeId,
      } = body;

      const pet = await this.petRepository.create({
        name,
        age,
        description,
        energyLevels,
        environment,
        idependenceLevels,
        size,
        toAdopt,
        typeId,
        organizationId,
      });

      return { pet };
    } catch (err: any) {
      throw new Error(`Cannot create pet with error: ${err.message}`);
    }
  }
}

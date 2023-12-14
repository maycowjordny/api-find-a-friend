import {
  PetRegisterUseCaseRequest,
  PetRegisterUseCaseResponse,
} from "@/application/types/pet-types";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";
import { makePictureUseCase } from "../factories/picture/make-picture-use-case";
import { makeRequirementUseCase } from "../factories/requirement/make-requeriment-use-case";

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
        pictures,
        requirements,
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

      const pictureUseCase = makePictureUseCase();
      const requirementeUseCase = makeRequirementUseCase();

      if (!pet.id) throw new Error("PetId is not defined");

      const newPictures = {
        petId: pet.id,
        pictures,
      };

      const newRequirement = {
        petId: pet.id,
        descriptions: requirements,
      };

      await pictureUseCase.execute(newPictures);
      await requirementeUseCase.execute(newRequirement);

      return { pet };
    } catch (err: any) {
      throw new Error(`Cannot create pet with error: ${err.message}`);
    }
  }
}

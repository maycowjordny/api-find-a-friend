import { PetsRepository } from "@/infra/database/repositories/pets-abstract";
import { Prisma } from "@prisma/client";

interface PetRegisterUseCaseRequest {
  name: string;
  description: string;
  age: number;
  size: "SMALL" | "MEDIUM" | "LARGE";
  energyLevels: "LOW" | "MEDIUM" | "HIGH";
  idependenceLevels: "LOW" | "MEDIUM" | "HIGH";
  enviroment: "SMALL" | "MEDIUM" | "LARGE";
  toAdopt: boolean;
  typeName: string;
}

export class PetRegisterUseCase {
  constructor(private petRepository: PetsRepository) {}
  async execute(body: PetRegisterUseCaseRequest) {
    try {
      const {
        name,
        age,
        description,
        energyLevels,
        enviroment,
        idependenceLevels,
        size,
        toAdopt,
        typeName,
      } = body;

      const ble = await this.petRepository.petType({
        name: typeName,
      });

      await this.petRepository.create({
        name,
        description,
        age,
        size,
        energyLevels,
        idependenceLevels,
        enviroment,
        toAdopt,
        typeId: ble.id,
        organizationId: "",
      });
    } catch (err: any) {
      throw new Error(`Cannot create user with error: ${err.message}`);
    }
  }
}

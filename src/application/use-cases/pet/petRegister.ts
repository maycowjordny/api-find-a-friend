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
      console.log(body);

      /*   const ble = await this.petRepository.petType({
        name: typeName,
      });
      console.log(ble);
 */
      const bla = await this.petRepository.create({
        name,
        description,
        age,
        size,
        energyLevels,
        idependenceLevels,
        enviroment,
        toAdopt,
        typeId: "d5f5be65-019b-43c8-8511-b23d58cd7be1",
        organizationId: "d5f5be65-019b-43c8-8511-b23d58cd7be1",
      });
      console.log(bla);

      return { bla };
    } catch (err: any) {}
  }
}

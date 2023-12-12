import {
  PetEnumEnergyLevels,
  PetEnumEnviroment,
  PetEnumIndependenceLevels,
  PetEnumSize,
} from "@/application/enum/pet-enum";
import { z } from "zod";

const petEnumSize = Object.values(PetEnumSize) as [PetEnumSize];
const petEnumEnergyLevels = Object.values(PetEnumEnergyLevels) as [
  PetEnumEnergyLevels
];

const petEnumEnvironment = Object.values(PetEnumEnviroment) as [
  PetEnumEnviroment
];

const petEnumIndependenceLevels = Object.values(PetEnumIndependenceLevels) as [
  PetEnumIndependenceLevels
];

export const petRegisterBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  description: z.string(),
  energyLevels: z.enum(petEnumEnergyLevels),
  environment: z.enum(petEnumEnvironment),
  size: z.enum(petEnumSize),
  idependenceLevels: z.enum(petEnumIndependenceLevels),
  typeId: z.string().uuid(),
  toAdopt: z.boolean(),
  organizationId: z.string().uuid(),
});

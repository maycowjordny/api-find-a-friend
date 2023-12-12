/* import {
  SearchPetRequestUseCase,
  SearchPetResponseUseCase,
} from "@/application/interfaces/pet-search";
import { PetsRepository } from "@/infra/database/repositories/pets-abstract";

export class SearchPetUseCase {
  constructor(private petsRepository: PetsRepository) {}
  async execute({
    data,
    page,
  }: SearchPetRequestUseCase): Promise<SearchPetResponseUseCase> {
    try {
      return {};
    } catch (err: any) {}
  }
}
 */

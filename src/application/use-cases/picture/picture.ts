import {
  PictureUseCaseRequest,
  PictureUseCaseResponse,
} from "@/application/types/picture-types";
import { PictureRepositoryAbstract } from "@/infra/database/repositories/picture-abstract";

export class PictureUseCase {
  constructor(private pictureRepository: PictureRepositoryAbstract) {}
  async execute(body: PictureUseCaseRequest): Promise<PictureUseCaseResponse> {
    const { petId, pictures } = body;

    if (!petId) throw new Error("userId is not defined");

    const pictureResponse = await this.pictureRepository.create({
      petId,
      pictures,
    });

    return { pictureResponse };
  }
}

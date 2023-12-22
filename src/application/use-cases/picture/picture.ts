import { PictureUseCaseRequest } from "@/application/types/picture-types";
import { PictureRepositoryAbstract } from "@/infra/database/repositories/picture-abstract";

export class PictureUseCase {
  constructor(private pictureRepository: PictureRepositoryAbstract) {}
  async execute(body: PictureUseCaseRequest) {
    const { petId, pictures } = body;
    try {
      if (!petId) throw new Error("userId is not defined");

      for (const picture of pictures) {
        await this.pictureRepository.create({
          petId,
          picture: picture,
        });
      }
    } catch (err: any) {
      throw new Error(`Cannot create pictue with error: ${err.message}`);
    }
  }
}

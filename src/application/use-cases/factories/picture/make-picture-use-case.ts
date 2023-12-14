import { PrismaPictureRepository } from "@/infra/database/prisma/repositories/prisma-picture-repository";
import { PictureUseCase } from "../../picture/picture";

export function makePictureUseCase() {
  const pictureRepository = new PrismaPictureRepository();
  const pictureUseCase = new PictureUseCase(pictureRepository);

  return pictureUseCase;
}

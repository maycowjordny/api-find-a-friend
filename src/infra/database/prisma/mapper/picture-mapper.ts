import { Picture as PictureModel } from "@/application/interfaces/picture";
import { Prisma, Picture as RawPicture } from "@prisma/client";

export function convertToPrisma(
  data: PictureModel
): Prisma.PictureUncheckedCreateInput {
  const picturePrisma: Prisma.PictureUncheckedCreateInput = {
    id: data.id,
    petId: data.petId,
    picture: data.picture,
  };

  return picturePrisma;
}

export function convertToDomain(data: RawPicture): PictureModel {
  const picture: PictureModel = {
    id: data.id,
    petId: data.petId,
    picture: data.picture,
    createdAt: data.createdAt,
  };

  return picture;
}

import { Picture } from "@prisma/client";
import { PictureRepositoryAbstract } from "../../repositories/picture-abstract";
import { convertToDomain, convertToPrisma } from "../mapper/picture-mapper";
import { prisma } from "../../lib/prisma";

export class PrismaPictureRepository implements PictureRepositoryAbstract {
  async create(data: Picture) {
    const picture = await prisma.picture.create({
      data: convertToPrisma(data),
    });
    return convertToDomain(picture);
  }
}

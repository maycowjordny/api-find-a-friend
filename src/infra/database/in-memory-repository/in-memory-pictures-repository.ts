import { randomUUID } from "crypto";
import { RequirementRepositoryAbstract } from "../repositories/requirement-abstract";
import { Requirement } from "@/application/interfaces/requirement";
import { Picture } from "@/application/interfaces/picture";
import { PictureRepositoryAbstract } from "../repositories/picture-abstract";

export class PictureInMemory implements PictureRepositoryAbstract {
  public PICTURES: Picture[] = [];

  async create(data: Picture): Promise<any> {
    for (const pictures of data.picture) {
      const picture = {
        id: randomUUID(),
        petId: data.petId,
        picture: pictures,
        createdAt: new Date(),
      };

      this.PICTURES.push(picture);
    }
  }
}

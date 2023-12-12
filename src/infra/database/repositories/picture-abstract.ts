import { Picture } from "@/application/interfaces/picture";

export interface PictureRepositoryAbstract {
  create(data: Picture): Promise<Picture>;
}

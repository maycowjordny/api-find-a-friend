import { Picture } from "../interfaces/picture";

export interface PictureUseCaseRequest {
  petId: string | undefined;
  pictures: { picture: {} };
}

export interface PictureUseCaseResponse {
  pictureResponse: Picture;
}

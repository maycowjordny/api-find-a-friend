import { FastifyInstance } from "fastify";
import { petRegister } from "../controllers/pet/pet-create-controller";
import { findManyPet } from "../controllers/pet/pet-get-controller";
import { findPetById } from "../controllers/pet/find-pet-by-id-controller";

export async function petRoutes(app: FastifyInstance) {
  app.post("/", petRegister);
  app.get("/", findManyPet);
  app.get("/:id", findPetById);
}

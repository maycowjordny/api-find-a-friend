import { FastifyInstance } from "fastify";
import { petRegister } from "../controllers/pet/pet-create-controller";
import { findManyPet } from "../controllers/pet/pet-find-many-controller";
import { findPetById } from "../controllers/pet/find-pet-by-id-controller";
import { verifyJwt } from "../../middleware/verify-jwt";

export async function petRoutes(app: FastifyInstance) {
  app.post("/", { onRequest: [verifyJwt] }, petRegister);
  app.get("/", findManyPet);
  app.get("/:id", findPetById);
}

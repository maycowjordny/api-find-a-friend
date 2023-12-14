import { FastifyInstance } from "fastify";
import { petTypeCreate } from "../controllers/pet-type/pet-type-create-controller";

export async function petTypeRoutes(app: FastifyInstance) {
  app.post("/", petTypeCreate);
}

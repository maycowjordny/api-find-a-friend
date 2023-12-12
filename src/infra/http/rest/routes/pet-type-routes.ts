import { FastifyInstance } from "fastify";
import { petTypeCreate } from "../controllers/pet-type-controller";

export async function petTypeRoutes(app: FastifyInstance) {
  app.post("/", petTypeCreate);
}

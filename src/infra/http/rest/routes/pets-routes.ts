import { FastifyInstance } from "fastify";
import { petRegister } from "../controllers/pet-controller";

export async function petRoutes(app: FastifyInstance) {
  app.post("/", petRegister);
}

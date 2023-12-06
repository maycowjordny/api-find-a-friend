import { FastifyInstance } from "fastify";
import { petRegister } from "../controllers/pet-register";

export async function petRoutes(app: FastifyInstance) {
  app.post("/", petRegister);
}

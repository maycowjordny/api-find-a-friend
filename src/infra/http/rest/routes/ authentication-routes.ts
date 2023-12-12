import { FastifyInstance } from "fastify";
import { authenticate } from "../controllers/authenticate-controller";

export async function authenticationRoutes(app: FastifyInstance) {
  app.post("/", authenticate);
}

import { FastifyInstance } from "fastify";
import { authenticate } from "../controllers/session/authenticate-create-controller";

export async function authenticationRoutes(app: FastifyInstance) {
  app.post("/", authenticate);
}

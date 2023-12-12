import { FastifyInstance } from "fastify";
import { register } from "../controllers/user-controller";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", register);
}

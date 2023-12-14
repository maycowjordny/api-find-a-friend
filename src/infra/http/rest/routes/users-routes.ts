import { FastifyInstance } from "fastify";
import { register } from "../controllers/user/user-create-controller";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", register);
}

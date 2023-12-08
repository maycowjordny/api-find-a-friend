import { FastifyInstance } from "fastify";
import { OrganizationRegister } from "../controllers/organization-register";

export async function organizationRoutes(app: FastifyInstance) {
  app.post("/", OrganizationRegister);
}

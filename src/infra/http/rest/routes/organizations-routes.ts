import { FastifyInstance } from "fastify";
import { OrganizationRegister } from "../controllers/organization-controller";

export async function organizationRoutes(app: FastifyInstance) {
  app.post("/", OrganizationRegister);
}

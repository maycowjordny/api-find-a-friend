import { FastifyInstance } from "fastify";
import { OrganizationRegister } from "../controllers/organization/organization-create-controller";

export async function organizationRoutes(app: FastifyInstance) {
  app.post("/", OrganizationRegister);
}

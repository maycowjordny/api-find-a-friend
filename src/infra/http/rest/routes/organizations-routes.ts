import { FastifyInstance } from "fastify";
import { OrganizationRegister } from "../controllers/organization/organization-create-controller";
import { verifyJwt } from "../../middleware/verify-jwt";

export async function organizationRoutes(app: FastifyInstance) {
  app.post("/", { onRequest: [verifyJwt] }, OrganizationRegister);
}

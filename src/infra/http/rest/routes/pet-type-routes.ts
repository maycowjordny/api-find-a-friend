import { FastifyInstance } from "fastify";
import { petTypeCreate } from "../controllers/pet-type/pet-type-create-controller";
import { verifyJwt } from "../../middleware/verify-jwt";
import { verifyUserRole } from "../../middleware/verify-user-role-jwt";
import { UserRoleEnum } from "@/application/enum/user-enum";

export async function petTypeRoutes(app: FastifyInstance) {
  app.post(
    "/",
    { onRequest: [verifyJwt, verifyUserRole(UserRoleEnum.ADMIN)] },
    petTypeCreate
  );
}

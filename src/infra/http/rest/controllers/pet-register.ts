import { PetRegisterUseCase } from "@/application/use-cases/pet/petRegister";
import { PrismaPetsRepository } from "@/infra/database/prisma/repositories/prisma-pets-repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { PetValidatorRepository } from "../validator/pet/pet.validator";

export async function petRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const petValidatorRepository = new PetValidatorRepository();
    const responseBody = await petValidatorRepository.petValidator(
      request.body
    );

    const petRepository = new PrismaPetsRepository();
    const petUseCase = new PetRegisterUseCase(petRepository);

    await petUseCase.execute(responseBody);

    return reply.status(201).send({ message: "Pet created successfully" });
  } catch (err: any) {
    return reply.status(409).send({ message: err.message });
  }
}

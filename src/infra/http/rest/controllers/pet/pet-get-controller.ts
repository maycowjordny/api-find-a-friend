import { FastifyReply, FastifyRequest } from "fastify";
import { PetGetValidatorRepository } from "../../validator/pet/pet-get-validator";
import { makefindManyPetUseCase } from "@/application/use-cases/factories/pet/make-pet-use-case";

export async function findManyPet(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const petGetValidator = await validator();

    const findManyPetUseCase = makefindManyPetUseCase();

    const pets = await findManyPetUseCase.execute(petGetValidator);

    return reply.status(201).send(pets);
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  async function validator() {
    const petGetValidatorRepository = new PetGetValidatorRepository();
    return await petGetValidatorRepository.petGetValidator(request.query);
  }
}

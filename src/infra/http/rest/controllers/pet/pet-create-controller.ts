import { FastifyReply, FastifyRequest } from "fastify";
import { PetValidatorRepository } from "../../validator/pet/pet-validator";
import { PetBody } from "@/application/interfaces/pet";
import { makeCreatePetUseCase } from "@/application/use-cases/factories/pet/make-pet-use-case";

export async function petRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { organizationId } = request.cookies;

    if (!organizationId) throw new Error("organizationId is not defined");

    const petValidator = await validator(organizationId);

    const petUseCase = makeCreatePetUseCase();

    const { pet } = await petUseCase.execute(petValidator);

    return reply
      .status(201)
      .send({ message: "Pet created successfully!", petId: pet.id });
  } catch (err: any) {
    return reply.status(500).send({ message: err.message });
  }

  async function validator(organizationId: string) {
    const petValidatorRepository = new PetValidatorRepository();

    const petBody = request.body as PetBody;

    const newBody = {
      organizationId,
      name: petBody.name,
      age: petBody.age,
      description: petBody.description,
      energyLevels: petBody.energyLevels,
      environment: petBody.environment,
      idependenceLevels: petBody.idependenceLevels,
      size: petBody.size,
      typeId: petBody.typeId,
      toAdopt: petBody.toAdopt,
      pictures: petBody.pictures,
      requirements: petBody.requirements,
    };

    const pet = await petValidatorRepository.petValidator(newBody);

    return pet;
  }
}

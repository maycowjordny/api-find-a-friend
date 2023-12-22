import { expect, describe, it, beforeEach, vi } from "vitest";
import { randomUUID } from "node:crypto";
import { PictureUseCase } from "./picture";
import { PictureInMemory } from "@/infra/database/in-memory-repository/in-memory-pictures-repository";

let pictureInMmemoryRepository: PictureInMemory;
let pictureUseCase: PictureUseCase;

describe("Find pet by Id Use Case", () => {
  beforeEach(() => {
    pictureInMmemoryRepository = new PictureInMemory();
    pictureUseCase = new PictureUseCase(pictureInMmemoryRepository);
  });

  it("should be able to create a requirement", async () => {
    const createSpyResponse = vi.spyOn(pictureInMmemoryRepository, "create");

    expect(() =>
      pictureUseCase.execute({
        petId: randomUUID(),
        pictures: ["pictures", "pictures"],
      })
    ).not.toThrow();

    expect(createSpyResponse).toHaveBeenCalled();
  });
});

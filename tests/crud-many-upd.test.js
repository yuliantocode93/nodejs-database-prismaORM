import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "echo1lg2@gmail.com",
      },
      where: {
        name: "echo1",
      },
    });
    expect(count).toBe(1);
  });
});

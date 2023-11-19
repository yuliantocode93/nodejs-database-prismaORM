import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "tidak ada id",
      },
    });

    expect(count).toBe(0);
  });

  it("should be able to read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.log(customers);
    expect(customers.length).toBe(7);
  });
});

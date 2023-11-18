import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "echo1lg2gmail.com",
      },
      where: {
        name: "Echo1",
      },
    });
    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "kosong",
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

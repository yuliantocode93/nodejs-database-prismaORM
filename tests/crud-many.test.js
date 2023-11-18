import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "echo1",
          email: "echo1@gmail.com",
          phone: "0812321123",
          name: "Echo1",
        },
        {
          id: "echo2",
          email: "echo2@gmail.com",
          phone: "0812321123123",
          name: "Echo2",
        },
      ],
    });
    expect(count).toBe(2);
  });
});

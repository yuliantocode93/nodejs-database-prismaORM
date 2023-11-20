const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", () => {
  it("should be able to do sorting", async () => {
    const prisma = new PrismaClient(); // Instantiate PrismaClient

    const customers = await prisma.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc", // Sorting by 'name' field in descending order
        },
        {
          email: "asc", // Then sorting by 'email' field in ascending order
        },
      ],
    });

    console.log(customers);

    await prisma.$disconnect(); // Disconnect PrismaClient after use
  });
});

const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", () => {
  it("should count customers with name 'Yuli'", async () => {
    const prisma = new PrismaClient();

    const total = await prisma.customer.count({
      where: {
        name: "Yuli",
      },
    });

    expect(total).toBe(2); // Assuming you expect the count to be 2
  });
});

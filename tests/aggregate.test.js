const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

describe("Prisma Client", () => {
  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it("should be able to perform aggregate function with group by and having", async () => {
    const result = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      having: {
        price: {
          _avg: {
            gt: 2000,
          },
        },
      },
    });

    console.log(result);
  });
});

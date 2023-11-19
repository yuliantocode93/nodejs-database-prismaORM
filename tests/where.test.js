const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // Instantiate PrismaClient

describe("Prisma Client", function () {
  afterAll(async () => {
    await prisma.$disconnect(); // Disconnect PrismaClient after all tests are done
  });

  it("should be able to use the OR operator", async () => {
    const products = await prisma.product.findMany({
      // Access 'product', not 'Product'
      where: {
        OR: [
          {
            name: "A",
          },
          {
            name: "B",
          },
        ],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    console.log(products);

    expect(products.length).toBe(4);
    expect(products[0].name).toBe("A");
    expect(products[1].name).toBe("A");
    expect(products[2].name).toBe("B");
    expect(products[3].name).toBe("B");
  });
});

const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", function () {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should can find one to one with relation", async () => {
    const customer = await prisma.customer.findUnique({
      where: {
        id: "yulianto",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation filter", async () => {
    const customers = await prisma.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },

      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});

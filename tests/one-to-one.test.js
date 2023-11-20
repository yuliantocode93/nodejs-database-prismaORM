const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", function () {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a one-to-one relation", async () => {
    const wallet = await prisma.wallet.create({
      data: {
        id: "echo1",
        customer_id: "echo1",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });
});

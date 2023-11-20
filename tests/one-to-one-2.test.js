const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", function () {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should can create one to one with relation", async () => {
    const customerWithWallet = await prisma.customer.create({
      data: {
        id: "yulianto",
        name: "yulianto",
        email: "yulianto@gmail.com",
        phone: "0855853917",
        wallet: {
          create: {
            id: "yulianto",
            balance: 250000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customerWithWallet);
  });
});

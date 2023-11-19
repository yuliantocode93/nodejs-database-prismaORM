const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", () => {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should be able to create and select fields", async () => {
    const customer = await prisma.customer.create({
      data: {
        id: "rully",
        email: "rully@gmail.com",
        phone: "12345678910",
        name: "Rully Nugraha",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("rully");
    expect(customer.name).toBe("Rully Nugraha");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should be able to select fields", async () => {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (let customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});

const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", () => {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should can create and select fields", async () => {
    const customer = await prisma.customer.create({
      data: {
        id: "yully",
        email: "yully@gmail.com",
        phone: "09888677665",
        name: "yullyanto",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("yully");
    expect(customer.name).toBe("yullyanto");
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

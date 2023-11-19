const { PrismaClient } = require("@prisma/client");

describe("Prisma Client", () => {
  let prisma;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should can do paging", async () => {
    const page1 = await prisma.customer.findMany({
      skip: 0,
      take: 1,
    });
    expect(page1.length).toBe(1);

    const page2 = await prisma.customer.findMany({
      skip: 1,
      take: 1,
    });
    expect(page2.length).toBe(1);

    const page3 = await prisma.customer.findMany({
      skip: 2,
      take: 1,
    });
    console.log(page1, page2, page3);
    expect(page3.length).toBe(1);
  });
});

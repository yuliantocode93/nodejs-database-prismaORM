const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Prisma Client", function () {
  it("should can insert and many relation", async () => {
    try {
      const customer = await prisma.customer.create({
        data: {
          id: "Salam",
          name: "Salam",
          email: "salam@gmail.com",
          phone: "08538439148",
          comments: {
            create: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
        include: {
          comments: true,
        },
      });

      console.info(customer);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});

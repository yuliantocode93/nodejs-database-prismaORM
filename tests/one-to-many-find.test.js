const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Prisma Client", function () {
  it("should can find many with filter relation", async () => {
    try {
      const customersWithFilteredComments = await prisma.customer.findMany({
        where: {
          comments: {
            some: {
              title: {
                contains: "Comment",
              },
            },
          },
        },
        include: {
          comments: true,
        },
      });

      console.info(customersWithFilteredComments);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});

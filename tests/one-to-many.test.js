const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Prisma Client", function () {
  it("should can insert and include", async function () {
    try {
      const comment = await prisma.comment.create({
        data: {
          customer_id: "yuli",
          title: "Insert Comment",
          description: "Description Comment",
        },
        include: {
          customer: true,
        },
      });

      console.info(comment);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});

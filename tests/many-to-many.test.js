const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Prisma Client", function () {
  it("should can insert many to many relation", async () => {
    try {
      const like = await prisma.like.create({
        data: {
          customer: {
            connect: { id: "kwon1" }, // Assuming id is used for customer_id
          },
          product: {
            connect: { id: "P0009" }, // Assuming id is used for product_id
          },
        },
        include: {
          customer: true,
          product: true,
        },
      });

      console.info(like);
    } catch (error) {
      console.error(error);
    }
  });
});

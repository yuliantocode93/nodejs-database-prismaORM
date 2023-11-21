const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Prisma Client", function () {
  it("should can find one with many to many relation", async () => {
    try {
      const customer = await prisma.customer.findUnique({
        where: {
          id: "kwon1", // Assuming "id" is the field used for the customer identifier
        },
        include: {
          likes: {
            include: {
              product: true,
            },
          },
        },
      });

      console.info(JSON.stringify(customer));
    } catch (error) {
      console.error(error);
    }
  });

  it("should can find many with many to many relation", async () => {
    try {
      const customers = await prisma.customer.findMany({
        where: {
          likes: {
            some: {
              product: {
                name: {
                  contains: "D",
                },
              },
            },
          },
        },
        include: {
          likes: {
            include: {
              product: true,
            },
          },
        },
      });

      console.info(JSON.stringify(customers));
    } catch (error) {
      console.error(error);
    }
  });

  it("should create implicit relation", async () => {
    const customer = await prisma.customer.update({
      where: {
        id: "kwon",
      },
      data: {
        loves: {
          connect: [
            {
              id: "P0004",
            },
            {
              id: "P0009",
            },
          ],
        },
      },

      include: {
        loves: true,
      },
    });

    console.info(customer);
  });

  it("should find many implicit relation", async () => {
    const customers = await prisma.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "D",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(customers);
  });
});

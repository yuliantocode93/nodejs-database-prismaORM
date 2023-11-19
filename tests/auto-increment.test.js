const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // Create an instance of PrismaClient

describe("Prisma Client", () => {
  afterAll(async () => {
    await prisma.$disconnect(); // Disconnect PrismaClient after all tests are done
  });

  it("should be able to create with auto increment primary key", async () => {
    const category = await prisma.category.create({
      // Access 'category', not 'Category'
      data: {
        name: "Food",
      },
    });

    console.log(category);
    expect(category).toHaveProperty("id");
  });
});

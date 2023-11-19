import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "2",
        email: "kwonyuli2@gmail.com",
        name: "Kwon Yuli kw",
        phone: "081234567892",
      },
    });

    expect(customer.id).toBe("2");
    expect(customer.email).toBe("kwonyuli2@gmail.com");
    expect(customer.name).toBe("Kwon Yuli kw");
    expect(customer.phone).toBe("081234567892");
  });
});

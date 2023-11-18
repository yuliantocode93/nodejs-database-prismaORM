import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "1",
        email: "kwonyuli@gmail.com",
        name: "Kwon Yuli",
        phone: "08123456789",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.email).toBe("kwonyuli@gmail.com");
    expect(customer.name).toBe("Kwon Yuli");
    expect(customer.phone).toBe("08123456789");
  });
});

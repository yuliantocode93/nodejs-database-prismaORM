import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Yuli saja",
      },
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.email).toBe("kwonyuli@gmail.com");
    expect(customer.name).toBe("Yuli saja");
    expect(customer.phone).toBe("08123456789");
  });
  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.email).toBe("kwonyuli@gmail.com");
    expect(customer.name).toBe("Yuli saja");
    expect(customer.phone).toBe("08123456789");
  });
  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.email).toBe("kwonyuli@gmail.com");
    expect(customer.name).toBe("Yuli saja");
    expect(customer.phone).toBe("08123456789");
  });
});

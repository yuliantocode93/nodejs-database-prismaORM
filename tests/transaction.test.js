import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [kwon, yuli] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "kwon",
          email: "kwon@gmail.com",
          name: "Kwon",
          phone: "081234567",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "yuli",
          email: "yuli@gmail.com",
          name: "Yuli",
          phone: "0812345678",
        },
      }),
    ]);

    expect(kwon.name).toBe("Kwon");
    expect(yuli.name).toBe("Yuli");
  });
  it("should can execute interactive transaction", async () => {
    const [kwon, yuli] = await prismaClient.$transaction(async (prisma) => {
      const kwon = await prisma.customer.create({
        data: {
          id: "kwon1",
          email: "kwon1@gmail.com",
          name: "Kwon1",
          phone: "0812345671",
        },
      });
      const yuli = await prisma.customer.create({
        data: {
          id: "yuli1",
          email: "yuli1@gmail.com",
          name: "Yuli",
          phone: "08123456781",
        },
      });
      return [kwon, yuli];
    });

    expect(kwon.name).toBe("Kwon1");
    expect(yuli.name).toBe("Yuli");
  });
});

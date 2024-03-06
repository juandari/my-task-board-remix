import { PrismaClient } from "@prisma/client";
import { statuses } from "domain/model";

const prisma = new PrismaClient();
const seedIconData = ["☕", "💬", "💪🏻", "⛹🏻‍♂️", "📚", "⏰"];
const seedStatusData = statuses;

async function main() {
  for (const icon of seedIconData) {
    await prisma.icon.create({
      data: {
        value: icon,
      },
    });
  }

  for (const status of seedStatusData) {
    await prisma.status.create({
      data: {
        name: status,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed icon data created successfully");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

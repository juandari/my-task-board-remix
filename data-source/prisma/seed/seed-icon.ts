import { PrismaClient } from "@prisma/client";

const seedIconData = ["☕", "💬", "💪🏻", "⛹🏻‍♂️", "📚", "⏰"];

async function seedIcon() {
  const prisma = new PrismaClient();

  try {
    for (const icon of seedIconData) {
      await prisma.icon.create({
        data: {
          value: icon,
        },
      });
    }

    console.log("Seed icon data created successfully");
  } catch (error) {
    console.error("Error seeding icon data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedIcon();

import prisma from "@/lib/prismaDB";
import { User, currentUser } from "@clerk/nextjs/server";

export async function getAllPromptsByShop() {
  try {
    const user: User | null = await currentUser();

    const sellerId = user?.id;

    const prompts = await prisma.prompts.findMany({
      where: {
        sellerId,
      },
      include: {
        orders: true,
      },
    });
    return prompts;
  } catch (error) {
    console.log("get prompts error", error);
  }
}

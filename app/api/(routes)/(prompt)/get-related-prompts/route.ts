import prisma from "@/lib/prismaDB";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextRequest) {
  try {
    const { query } = parse(req.url, true);
    console.log("query", query);

    const promptCategory = query.promptCategory as string || "";

    if (!promptCategory) {
      return new NextResponse("Missing 'promptCategory' in the request.", {
        status: 400,
      });
    }

    const prompt: any = await prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        category: promptCategory,
      },
    });

    // prompt = prompt.filter((item: any) => item.id !== query.promptId);

    for (const singlePrompt of prompt) {
      if (singlePrompt) {
        const shop = await prisma.shops.findUnique({
          where: {
            userId: singlePrompt?.sellerId,
          },
        });
        singlePrompt.shop = shop;
      }
    }

    return NextResponse.json(prompt);
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

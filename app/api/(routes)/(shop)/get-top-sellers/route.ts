import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDB";

export async function GET() {
  try {
    const sellers = await prisma.shops.findMany({
      take: 4,
      orderBy: {
        allProducts: "desc",
      },
    });

    return NextResponse.json(sellers);
  } catch (error) {
    console.log("load user error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

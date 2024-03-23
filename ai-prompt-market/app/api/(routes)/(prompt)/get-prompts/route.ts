import prisma from "@/lib/prismaDB";
import { NextRequest, NextResponse } from "next/server";
import { User, currentUser } from '@clerk/nextjs/server'

export async function GET(req: NextRequest) {
    try {
        const user: User | null = await currentUser();
        const sellerId = user?.id;
        const prompts = await prisma.prompts.findMany({
            where: {
                sellerId: sellerId
            },
            include: {
                orders: true
            }
        })
        return NextResponse.json(prompts);
    } catch (error) {
        console.log('Failed to fetch prompts', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
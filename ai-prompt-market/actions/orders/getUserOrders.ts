"use server";
import prisma from "@/lib/prismaDB";
import { User, currentUser } from '@clerk/nextjs/server';

export default async function getUserOrders() {
    try {
        const user: User | null = await currentUser();

        const orders = await prisma.orders.findMany({
            where: {
                userId: user?.id,
            },
            include: {
                prompt: {
                    include: {
                        promptUrl: true,
                        reviews: true,
                    },
                },
            },
        });

        return orders;
    } catch (error) {
        console.log(error);
    }
}
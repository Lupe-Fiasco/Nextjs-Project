"use server";
import prisma from "@/lib/prismaDB";

export default async function newOrder({
    userId,
    promptId,
    payment_id,
    payment_method,
}: {
    userId: string;
    promptId: string;
    payment_id: string;
    payment_method: string;
}) {
    try {
        const newOrderData = {
            userId,
            promptId,
            payment_id,
            payment_method: "visa",
        };
        const order = await prisma.orders.create({
            data: newOrderData,
        });

        await prisma.shops.update({
            where: {
                userId,
            },
            data: {
                totalSales: { increment: 1 },
            },
        });

        return order;
    } catch (error) {
        console.log(error);
    }
};

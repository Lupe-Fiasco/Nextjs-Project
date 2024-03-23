'use server'
import { User, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prismaDB";

export default async function getUser() {
    try {
        const user: User | null = await currentUser();

        if (!user) {
            throw new Error('User not found')
        }

        const shop = await prisma.shops.findUnique({
            where: {
                userId: user.id,
            }
        })

        return { user, shop };
    } catch (error) {
        console.log("load user error", error);

    }
}

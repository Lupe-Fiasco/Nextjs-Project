import prisma from "@/lib/prismaDB";

export default async function getShopById(shopId: string) {
    try {
        const shop = await prisma.shops.findUnique({
            where: {
                userId: shopId
            }
        })
        return shop;
    } catch {
        console.log('can\'t find the shop');
    }
}
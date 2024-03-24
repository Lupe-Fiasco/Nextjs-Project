import prisma from "@/lib/prismaDB";


export default async function getAllPrompts(pageNum = 1, pageSize = 8) {
    try {
        const prompts = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true
            },
            where: {
                status: 'Live'
            },
            take: pageSize,
            skip: (pageNum - 1) * pageSize
        })
        return prompts
    } catch (error) {
        console.log('can\'t get all prompts');
    }
}
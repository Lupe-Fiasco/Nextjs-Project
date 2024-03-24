import prisma from "@/lib/prismaDB";


export default async function getPromptByCategory(category: string | undefined) {
    try {
        const prompt = await prisma.prompts.findMany({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true
            },
            where: {
                category: category
            },
        })
        return prompt
    } catch (error) {
        console.log('can\'t get the prompt');
    }
}
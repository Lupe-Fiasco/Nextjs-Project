import prisma from "@/lib/prismaDB";


export default async function getPromptById(promptId: string) {
    try {
        const prompt = await prisma.prompts.findUnique({
            include: {
                orders: true,
                images: true,
                reviews: true,
                promptUrl: true
            },
            where: {
                id: promptId
            },
        })
        return prompt
    } catch (error) {
        console.log('can\'t get the prompt');
    }
}
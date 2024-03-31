"use server";
import prisma from "@/lib/prismaDB";


export const deleteWithDrawMethod = async (id: string) => {
  try {
    console.log(id);
    const withDrawMethod = await prisma.banks.delete({
      where: {
        id,
      },
    });
    return withDrawMethod;
  } catch (error) {
    console.log(error);
  }
};

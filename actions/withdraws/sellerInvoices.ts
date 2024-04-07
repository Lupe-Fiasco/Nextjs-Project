"use server";

import prisma from "@/lib/prismaDB";

export const sellerInvoices = async ({ sellerId }: { sellerId: string }) => {
  try {
    const invoices = await prisma.withdraws.findMany({
      where: {
        sellerId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return invoices;
  } catch (error) {
    console.log(error);
  }
};

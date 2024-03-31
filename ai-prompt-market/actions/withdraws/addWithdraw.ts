"use server";
import prisma from "@/lib/prismaDB";

type Props = {
  sellerId: string;
  amount: number;
};

export const addWithdraw = async ({ sellerId, amount }: Props) => {
  try {
    const respose = await prisma.withdraws.create({
      data: {
        sellerId,
        amount,
        status: "Pending",
      },
    });

    return respose;
  } catch (error) {
    console.log(error);
  }
};

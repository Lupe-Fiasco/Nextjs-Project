import React from 'react'
import { Card } from '@nextui-org/react'
import { Avatar } from '@nextui-org/react'
import Rating from '../../utils/Rating'
import { styles } from '@/utils/styles'

type Props = {}

export default function SellerCard({ }: Props) {
    return (
        <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">

            <Avatar src='https://pixner.net/aikeu/assets/images/blog-details/a-one' className="w-[80px] h-[80px]" />
            <span className={`${styles.label} py-2 text-xl`}>@Mandy</span>
            <div className="flex items-center">
                <span className={`${styles.label} pr-2`}>3.5/5</span>
                <Rating rating={3.5} />
            </div>
            <span className={`${styles.label} py-2`}>
                Total Sales: {142}
            </span>
        </Card>
    )
}


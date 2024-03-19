import React from 'react'
import { Avatar, Button, Card, Divider } from "@nextui-org/react";
import Image from 'next/image';
import { styles } from '@/utils/styles';
import Rating from '@/components/Rating';
import Link from 'next/link';


type Props = {}

export default function PromptCard({ }: Props) {
    return (
        <Card
            radius="lg"
            className="w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3"
        >
            <div className="relative">
                {/* 商品图片 */}
                <Image
                    src='https://pixner.net/aikeu/assets/images/category/fourteen.png'
                    alt=""
                    className="w-full !max-h-[200px] object-cover"
                    width={300}
                    height={300}
                />
                <div className="absolute bottom-2 left-2">
                    <div className="w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl">
                        <Image
                            src="https://pixner.net/aikeu/assets/images/category/chat.png"
                            width={25}
                            height={25}
                            alt=""
                        />
                        <span className={`${styles.label} pl-2 text-white`}>
                            Chatgpt
                        </span>
                    </div>
                </div>
            </div>
            {/* 类别、价格 */}
            <div className="w-full flex justify-between py-2">
                <h3 className={`${styles.label} text-[18px] text-white`}>
                    Animal Prompts
                </h3>
                <p className={`${styles.paragraph}`}>$77.25</p>
            </div>
            <Divider className="bg-[#ffffff18] my-3" />
            {/* 作者信息 */}
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar src='https://i.pravatar.cc/150?u=fake@pravatar.com' />
                    <span className={`${styles.label} pl-3`}>@Lexi</span>
                </div>
                <Rating rating={4} />
            </div>
            <br />
            <Link href='/shop/134' className="w-full">
                <div
                    className={`${styles.button} !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`}
                >
                    Get Prompts
                </div>
            </Link>
        </Card>
    )
}


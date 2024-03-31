import React from 'react'
import ShopSidebar from '@/components/Shop/ShopSideBar'
import AllPrompts from '@/components/Shop/AllPrompts'
import { getAllPromptsByShop } from '@/actions/shop/getAllPromptsByShop'

type Props = {}

export default async function page({ }: Props) {
    const promptsData = await getAllPromptsByShop();
    return (
        <div className='flex w-full'>
            <div className='flex h-screen sticky top-0 left-0 md:w-[17%] 2xl:w-[15%] p-2 bg-[#111c42]'>
                <ShopSidebar active={2} />
            </div>
            <div className='md:w-[83%] 2xl:w-[85%]'>
                <AllPrompts promptsData={promptsData} />
            </div>
        </div>
    )
}
import React from 'react'
import ShopSidebar from '@/components/Shop/ShopSideBar';
type Props = {}

export default function page({ }: Props) {
    return (
        <div className='flex w-full'>
            <div className='flex h-screen sticky top-0 left-0 md:w-[17%] 2xl:w-[15%] p-2 bg-[#111c42]'>
                <ShopSidebar active={0} />
            </div>
            <div className='md:w-[83%] 2xl:w-[85%]'>

            </div>
        </div>
    )
}
import React from 'react'
import Header from '@/components/Layout/Header'
import ShopBanner from '@/components/Shop/ShopBanner'
import PromptDetails from '@/components/Prompts/PromptDetails/PromptDetails'
import Footer from '@/components/Layout/Footer'
import { Divider } from '@nextui-org/react'
import getUser from '@/actions/user/getUser'

type Props = {
    params: string
}

export default async function Page({ params }: Props) {
    const data = await getUser();
    const user = data?.user;
    const isSellerExist = data?.shop ? true : false;
    return (
        <div>
            <div className="shop-banner">
                <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
                <ShopBanner title='Skateboard' />
            </div>
            <div>
                <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
                    <PromptDetails params={params} />
                    <Divider className="bg-[#ffffff14] mt-5" />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
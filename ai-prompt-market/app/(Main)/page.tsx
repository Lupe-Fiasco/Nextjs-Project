import React, { useEffect, useState } from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import About from '@/components/Route/About'
import PromptCard from '@/components/Prompts/PromptCard'
import { styles } from '@/utils/styles'
import BestSeller from '@/components/Shop/BestSeller'
import Future from '@/components/Route/Future'
import Partner from '@/components/Route/Partner'
import SellersBanner from '@/components/Shop/SellersBanner'
import Footer from '@/components/Layout/Footer'
import { Divider } from "@nextui-org/react";
import getUser from '@/actions/user/getUser'
import getAllPrompts from '@/actions/prompts/getAllPrompts'
import { User } from '@clerk/nextjs/server'


type Props = {

}

export default async function Page({ }: Props) {

  //这里可以将user逻辑下移至Header里？
  const data = await getUser();
  const user = data?.user;
  const isSellerExist = data?.shop ? true : false;
  const promptData = await getAllPrompts()

  return (
    <>
      <div>
        <div className="banner">
          <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
          <Hero />
        </div>
        <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
          <About />
          <div>
            <h1 className={`${styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
            </h1>
            <div className="flex flex-wrap">
              {
                promptData?.map((prompt: any) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))
              }
            </div>
            <br />
            <BestSeller />
            <Future />
            <Partner />
            <SellersBanner />
            <br />
            <br />
            <Divider className="bg-[#ffffff23]" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Page
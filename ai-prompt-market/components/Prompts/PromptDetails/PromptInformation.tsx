'use client'
import React, { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import { Avatar, Divider, Tab, Tabs } from "@nextui-org/react";
import ReviewCard from "./ReviewCard";
import getShopById from "@/actions/shop/getShopById";
type Props = {
  promptData: any;
};
let tabs = [
  {
    title: "Description",
  },
  {
    title: "Reviews",
  },
  {
    title: "Author",
  },
];

export default function PromptInformation({ promptData }: Props) {
  const [shop, setShop] = useState<any>();
  useEffect(() => {
    async function fetchData() {
      if (promptData) {
        const shopData = await getShopById(promptData?.sellerId);
        setShop(shopData);
      }
    }
    fetchData();
  }, [promptData])

  // console.log(promptData.reviews);

  // const shop = await getShopById(promptData?.sellerId)
  return (
    <div>
      <div className="flex w-full flex-col bg-slate-900 p-3 rounded-md">
        <Tabs items={tabs} color="primary" variant="light">
          {(item) => (
            <Tab key={item.title} title={item.title} className="text-[18px]">
              <Divider className="bg-[#ffffff18]" />
              <div className="py-2">
                {item.title === "Description" && (
                  <p
                    className={`${styles.paragraph} whitespace-pre-line w-full overflow-hidden`}
                  >
                    {promptData.description}
                  </p>
                )}
                {item.title === "Author" && (
                  <>
                    <div className="flex w-full my-2">
                      <Avatar size="lg" src={shop?.avatar} />
                      <div>
                        <span
                          className={`${styles.label} pl-3 !text-xl text-white`}
                        >
                          @{shop?.name}
                        </span>
                        <br />
                        <span className={`${styles.label} pl-3`}>
                          Prompts: {shop?.allProducts}
                        </span>
                        <br />
                        <span className={`${styles.label} pl-3`}>
                          Reviews: {shop?.ratings} / 5
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {item.title === "Reviews" && (
                  <div className="">
                    {promptData &&
                      promptData.reviews.map((item: any, index: number) => (
                        <ReviewCard item={item} key={index} />
                      ))}

                    {
                      promptData?.reviews?.length === 0 && (
                        <h5 className={`${styles.paragraph} text-center py-5`}>
                          No Reviews have to show!
                        </h5>
                      )
                    }
                  </div>
                )}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};


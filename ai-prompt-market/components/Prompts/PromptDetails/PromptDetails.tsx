import React from 'react'
import getPromptById from '@/actions/prompts/getPromptById'
import getPromptByCategory from '@/actions/prompts/getPromptByCategory'
import { stripePublishableKey, stripePaymentIntent } from '@/actions/payment/paymentAction'
import { loadStripe } from '@stripe/stripe-js'
import { styles } from '@/utils/styles'
import PromptDetailsCard from './PromptDetailsCard'
import PromptInformation from './PromptInformation'
import SellersBanner from '@/components/Shop/SellersBanner'
import PromptCard from '../PromptCard'
type Props = {
    params: any
}
export default async function PromptDetails({ params }: Props) {
    let stripePromise;
    let clientSecret;
    const promptData = await getPromptById(params.prompt_id)
    const relatedPromptData = await getPromptByCategory(promptData?.category)
    const relatedPrompts = relatedPromptData?.filter((item: any) => item.id !== promptData?.id)
    const publishAbleKey = stripePublishableKey()
    if (publishAbleKey) {
        const amount = Math.round(promptData?.price * 100)
        const paymentIntent = await stripePaymentIntent(amount)
        clientSecret = paymentIntent?.client_secret
        stripePromise = loadStripe(publishAbleKey)
        console.log(stripePromise);
        console.log(clientSecret);
    }
    return (
        <div>
            <PromptDetailsCard
                promptData={promptData}
                clientSecret={clientSecret}
                stripePromise={stripePromise}
            />
            <br />
            <br />
            <PromptInformation promptData={promptData} />
            <br />
            <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
            <div className="flex flex-wrap">
                {relatedPrompts?.map((item: any) => (
                    <PromptCard prompt={item} key={item.id} />
                ))}
                {/* {loading ? (
                    [...new Array(4)].map((i) => (
                        <>
                            <PromptCardLoader />
                        </>
                    ))
                ) : (
                    <>
                        {prompts &&
                            prompts.map((item: any) => (
                                <PromptCard prompt={item} key={item.id} />
                            ))}
                    </>
                )} */}

            </div>
            {relatedPrompts?.length === 0 && (
                <p className={`${styles.label} text-center block my-5`}>
                    No prompt found with this category!
                </p>
            )}
            <br />
            <br />
            <SellersBanner />
            <br />
        </div>
    )
}
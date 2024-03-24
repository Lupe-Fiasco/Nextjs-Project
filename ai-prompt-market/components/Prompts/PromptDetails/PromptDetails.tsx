import React from 'react'
import getPromptById from '@/actions/prompts/getPromptById'
import getPromptByCategory from '@/actions/prompts/getPromptByCategory'
import { styles } from '@/utils/styles'
import PromptDetailsCard from './PromptDetailsCard'
import PromptInformation from './PromptInformation'
import SellersBanner from '@/components/Shop/SellersBanner'
import PromptCard from '../PromptCard'
type Props = {
    params: any
}
export default async function PromptDetails({ params }: Props) {
    const promptData = await getPromptById(params.prompt_id)
    const relatedPromptData = await getPromptByCategory(promptData?.category)
    const relatedPrompts = relatedPromptData?.filter((item: any) => item.id !== promptData?.id)
    return (
        <div>
            <PromptDetailsCard
                promptData={promptData}
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
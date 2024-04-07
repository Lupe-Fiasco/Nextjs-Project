import MarketPlace from './MarketPlace'
import getUser from '@/actions/user/getUser'


export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const data = await getUser()
    return (
        <div>
            <MarketPlace
                user={data?.user}
                isSellerExist={data?.shop ? true : false}
            />

        </div>
    )
}
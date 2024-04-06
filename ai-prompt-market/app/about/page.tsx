import Header from '@/components/Layout/Header'
import getUser from '@/actions/user/getUser';
export default async function Page() {
  const data = await getUser();
  return (
    <div>
      <div className="banner">
        <Header activeItem={1} user={data?.user} isSellerExist={data?.shop ? true : false} />
      </div>
      <div className='absolute left-1/4 top-1/4 text-5xl font-bold text-center w-1/2 h-1/2'>
        About
      </div>
    </div>
  )
};


import UserAllOrders from "./_page";
import getUser from "@/actions/user/getUser";

export default async function Page() {
  const userData = await getUser();
  return (
    <div>
      <UserAllOrders user={userData?.user} isSellerExist={userData?.shop ? true : false} />
    </div>
  );
};



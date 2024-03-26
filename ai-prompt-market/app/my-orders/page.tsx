import UserAllOrders from "./_page";
import getUser from "@/actions/user/getUser";
import getUserOrders from "@/actions/orders/getUserOrders";

export default async function Page() {
  const userData = await getUser();
  const orderData = await getUserOrders();
  return (
    <div>
      <UserAllOrders orders={orderData} user={userData?.user} isSellerExist={userData?.shop ? true : false} />
    </div>
  );
};



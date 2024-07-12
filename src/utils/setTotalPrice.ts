import { TCartObj } from "@/redux/features/Cart/cartSlice";

const totalPrice = (arr: TCartObj[]) => {
  const priceData = arr?.map((item) => item.price * item.quantity);
  const totalPriceData = priceData?.reduce((arr, cur) => arr + cur, 0);
  return totalPriceData;
};
export default totalPrice;

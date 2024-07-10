import { FaShoppingCart } from "react-icons/fa";
import Slider from "../ui/Slider";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks/ReduxHook";
import { cartData } from "@/redux/features/Cart/cartSlice";

const MyCart = () => {
  const data = useAppSelector(cartData);
  const footer = (
    <Button className="w-full" disabled={data?.length ? false : true}>
      <Link to={"checkout"}>Checkout</Link>
    </Button>
  );
  const header = <h1 className="text-[#405D72]">My Cart</h1>;

  return (
    <Slider name={<FaShoppingCart />} header={header} footer={footer}>
      {data?.length ? <div></div> : "Your Cart is empty"}
    </Slider>
  );
};

export default MyCart;

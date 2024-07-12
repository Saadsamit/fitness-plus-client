import { FaShoppingCart } from "react-icons/fa";
import Slider from "../ui/Slider";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks/ReduxHook";
import { cartData } from "@/redux/features/Cart/cartSlice";
import CartComponent from "../cart/CartComponent";
import totalPrice from "@/utils/setTotalPrice";

const MyCart = () => {
  const data = useAppSelector(cartData);
  const totalPriceData = totalPrice(data);
  const footer = (
    <div className="w-full">
      <div className="flex flex-wrap justify-between mb-2 p-2">
        <h3 className="text-xl font-bold">Total:</h3>
        <h5 className="text-xl font-bold text-textColor">${totalPriceData}</h5>
      </div>
      <Button className="w-full" disabled={data?.length ? false : true}>
        <Link to={"/checkout"} className="">
          Checkout
        </Link>
      </Button>
    </div>
  );
  const header = (
    <>
      <h1 className="text-[#405D72]">My Cart</h1>
    </>
  );

  return (
    <Slider name={<FaShoppingCart />} header={header} footer={footer}>
      {data?.length ? (
        <div className="space-y-4">
          {data.map((item) => (
            <CartComponent data={item} />
          ))}
        </div>
      ) : (
        "your cart is empty"
      )}
    </Slider>
  );
};

export default MyCart;

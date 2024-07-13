import { addCart, removeCart } from "@/redux/features/Cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks/ReduxHook";
import { TProduct } from "@/types/TProducts";
import { toast } from "sonner";

interface TCounter {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  data: TProduct;
}
const Counter = ({ quantity, setQuantity, data }: TCounter) => {
  const { _id, price, stock } = data;
  const dispatch = useAppDispatch();
  const addQuantity = () => {
    if (quantity < stock) {
      setQuantity((cur) => cur + 1);
      const cartData = {
        productId: _id,
        quantity: quantity + 1,
        price,
      };
      dispatch(addCart(cartData));
      toast.success("Product is add in your cart");
    } else {
      toast.warning("You Can't Add More");
    }
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity((cur) => cur - 1);
      const cartData = {
        productId: _id,
        quantity: quantity - 1,
        price,
      };
      dispatch(addCart(cartData));
      toast.success("Product is Remove from your cart");
    } else {
      dispatch(removeCart(_id));
    }
  };
  return (
    <div className="flex rounded-lg items-center">
      <button
        onClick={removeQuantity}
        className="text-xl text-textColor font-bold border-textColor border px-3 rounded-l-lg hover:bg-textColor hover:text-white"
      >
        -
      </button>
      <p className="text-xl text-textColor font-bold border-textColor border-y px-3">
        {quantity}
      </p>
      <button
        onClick={addQuantity}
        className="text-xl text-textColor font-bold border-textColor border px-3 rounded-r-lg hover:bg-textColor hover:text-white"
      >
        +
      </button>
    </div>
  );
};

export default Counter;

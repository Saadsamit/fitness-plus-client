import { useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/ReduxHook";
import { addCart, cartData, removeCart } from "@/redux/features/Cart/cartSlice";
import { toast } from "sonner";
import Counter from "../counter/Counter";
import { TProduct } from "@/types/TProducts";

const Deatil = ({ data }: { data: TProduct }) => {
  const { _id, name, price, stock, description, image, category } = data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartData);
  const existQuantity = cart?.find((item) => item.productId === _id);
  const [quantity, setQuantity] = useState(existQuantity?.quantity || 1);
  const handleClick = () => {
    const cartData = {
      productId: _id,
      quantity: quantity,
      price,
    };
    if (existQuantity?.quantity === quantity) {
      toast.warning("Please Add or Remove item Produte ");
      return;
    }
    dispatch(addCart(cartData));

    toast("Product is add in your cart", {
      action: {
        label: "Undo",
        onClick: () => {
          dispatch(removeCart(_id));
        },
      },
    });
  };
  return (
    <div>
      <h2 className="capitalize font-bold text-3xl text-center text-textColor">
        Produte Detail
      </h2>
      <div className="flex items-center lg:flex-row flex-col">
        <div className="lg:w-1/2 p-4">
          <img src={image} alt={name} className="w-full rounded-2xl" />
        </div>
        <div className="lg:w-1/2 space-y-3">
          <div className=" flex flex-wrap justify-between">
            <h3 className="capitalize text-xl">
              <span className="text-textColor font-semibold">name:</span> {name}
            </h3>
            <h4 className="capitalize text-textColor text-xl font-semibold">
              $
              {existQuantity?.quantity
                ? price * existQuantity?.quantity
                : price}
            </h4>
          </div>
          <div className=" flex flex-wrap justify-between">
            <h4 className="capitalize">
              <span className="capitalize text-textColor text-xl font-semibold">
                category:
              </span>{" "}
              {category}
            </h4>
            <h4>
              <span className="capitalize text-textColor text-xl font-semibold">
                Stock:
              </span>{" "}
              {existQuantity?.quantity
                ? stock - existQuantity?.quantity
                : stock}
            </h4>
          </div>
          <div className=" flex flex-wrap justify-between">
            {existQuantity?.productId ? (
              <Counter
                quantity={quantity}
                setQuantity={setQuantity}
                data={data}
              />
            ) : (
              <Button onClick={handleClick}>Add Cart</Button>
            )}
          </div>
          <hr />
          <p>
            <span className="capitalize text-textColor text-xl font-semibold">
              Detail:
            </span>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deatil;

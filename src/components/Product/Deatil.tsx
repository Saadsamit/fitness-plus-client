import { useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks/ReduxHook";
import { addCart, removeCart } from "@/redux/features/Cart/cartSlice";
import { toast } from "sonner";
import { removeCount, totalCount } from "@/redux/features/Cart/totalPriceSlice";

const Deatil = ({ data }: { data: Record<string, string> }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const { _id, name, price, stock, description, image, category } = data;
  const handleClick = () => {
    const cartData = {
      productId: _id,
      quantity,
    };
    const total = Number(price) * quantity;
    dispatch(totalCount(total));
    dispatch(addCart(cartData));

    toast("Product is add in your cart", {
      action: {
        label: "Undo",
        onClick: () => {
          dispatch(removeCount(total));
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
              ${price}
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
              {stock}
            </h4>
          </div>
          <div className=" flex flex-wrap justify-between">
            <div className="flex rounded-lg">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="text-xl text-textColor font-bold border-textColor border py-1 px-4 rounded-l-lg hover:bg-textColor hover:text-white"
              >
                -
              </button>
              <p className="text-xl text-textColor font-bold border-textColor border-y py-1 px-4">
                {quantity}
              </p>
              <button
                onClick={() => quantity < 30 && setQuantity(quantity + 1)}
                className="text-xl text-textColor font-bold border-textColor border py-1 px-4 rounded-r-lg hover:bg-textColor hover:text-white"
              >
                +
              </button>
            </div>
            <Button onClick={handleClick}>Add Cart</Button>
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

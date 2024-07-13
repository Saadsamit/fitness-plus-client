import { useGetAProductsQuery } from "@/redux/features/Product/productApi";
import Loading from "../Loading/Loading";
import { MdDeleteOutline } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks/ReduxHook";
import { removeCart, TCartObj } from "@/redux/features/Cart/cartSlice";
import { Link } from "react-router-dom";
import { SheetClose } from "../ui/sheet";
import Counter from "../counter/Counter";
import { useState } from "react";
import Swal from "sweetalert2";

const CartComponent = ({
  data: item,
  isCart,
}: {
  data: TCartObj;
  isCart?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAProductsQuery(item.productId);
  const [quantity, setQuantity] = useState(item?.quantity);
  if (isLoading) {
    return <Loading />;
  }
  const { _id, name, stock, image, price } = data.data;
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "The Product will be deleted from your cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#405D72",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCart(_id));
        Swal.fire({
          title: "Deleted!",
          text: "The Product has been deleted",
          icon: "success",
        });
      }
    });
  };
  const link = (
    <Link
      to={`/products/${_id}`}
      className="mb-2 text-xl w-full font-bold tracking-tight text-gray-900 dark:text-white capitalize"
    >
      {name}
    </Link>
  );
  const button = (
    <button
      onClick={handleClick}
      className="bg-red-700 opacity-85 text-white p-2 rounded-lg"
    >
      <MdDeleteOutline />
    </button>
  );

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-1/3 mx-5">
        <img
          className="object-cover w-full h-full rounded-t-lg md:h-auto rounded-sm md:rounded-s-lg"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col w-2/3 justify-between p-4 leading-normal">
        {isCart ? (
          link
        ) : (
          <SheetClose className="w-full" asChild>
            {link}
          </SheetClose>
        )}
        <div className="flex flex-wrap justify-between">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${price * item.quantity}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            X {stock - item.quantity}
          </p>
          {isCart ? button : <SheetClose asChild>{button}</SheetClose>}
        </div>
        <div className="mt-2">
          <Counter
            quantity={quantity}
            setQuantity={setQuantity}
            data={data.data}
          />
        </div>
      </div>
    </div>
  );
};

export default CartComponent;

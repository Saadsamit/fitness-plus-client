import { useGetAProductsQuery } from "@/redux/features/Product/productApi";
import { TCart } from "@/types/TCart";
import Loading from "../Loading/Loading";
import { MdDeleteOutline } from "react-icons/md";
import { useAppDispatch } from "@/redux/hooks/ReduxHook";
import { removeCart } from "@/redux/features/Cart/cartSlice";

const CartComponent = ({ data: item }: { data: TCart }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAProductsQuery(item.productId);
  if (isLoading) {
    return <Loading />;
  }
  const { _id, name, image, price } = data.data;

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
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {name}
        </h5>
        <div className="flex flex-wrap justify-between">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${price}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            X {item.quantity}
          </p>
          <button
            onClick={() => dispatch(removeCart(_id))}
            className="bg-red-700 opacity-85 text-white p-2 rounded-lg"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;

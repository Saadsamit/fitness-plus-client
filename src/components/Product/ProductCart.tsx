import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { TProduct } from "@/types/TProducts";

const ProductCart = ({ data }: { data: TProduct }) => {
  const { _id, name, image, price } = data;
  return (
    <Link
      to={`/products/${_id}`}
      className="w-full bg-white border border-gray-200 hover:border-gray-400 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="h-52 w-full block">
        <img className="w-full h-full p-4" src={image} alt={name} />
      </div>
      <div className="px-5 pb-5">
        <h4 className="text-xl font-bold text-textColor capitalize">{name}</h4>
        <div className="flex flex-wrap justify-between items-center">
          <h5 className="text-xl font-bold">${price}</h5>
          <Button>
            <Link to={`/products/${_id}`}>view detail</Link>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;

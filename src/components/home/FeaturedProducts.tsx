import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import ProductCart from "../Product/ProductCart";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { TProduct } from "@/types/TProducts";
import HandleError from "../HandleError/HandleError";
import { useEffect } from "react";

const FeaturedProducts = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery("limit=4");
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <h2 className="capitalize font-bold text-3xl text-center text-textColor">
        Featured Products
      </h2>
      <HandleError arr={data?.data}>
        <div className="pt-10 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {data?.data?.map((item: TProduct) => (
            <ProductCart key={item._id} data={item} />
          ))}
        </div>
      </HandleError>
      <div className="text-center pt-10">
        <Button>
          <Link to={"/products"}>Explore More</Link>
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedProducts;

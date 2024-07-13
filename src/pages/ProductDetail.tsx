import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import Loading from "@/components/Loading/Loading";
import Deatil from "@/components/Product/Deatil";
import { useGetAProductsQuery } from "@/redux/features/Product/productApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading,refetch } = useGetAProductsQuery(id);
  useEffect(()=>{
    refetch()
  },[refetch])
  if (isLoading) {
    return <Loading className="pt-24" />;
  }
  return (
    <div>
      <Banner title={data?.data?.name} />
      <Container className="pt-24">
        <Deatil data={data?.data} />
      </Container>
    </div>
  );
};

export default ProductDetail;

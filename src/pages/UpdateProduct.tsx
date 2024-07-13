import Container from "@/components/Container/Container";
import Loading from "@/components/Loading/Loading";
import ProductInputCart from "@/components/Product/ProductInputCart";
import {
  useGetAProductsQuery,
  useUpdateProductMutation,
} from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/TProducts";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateProduct = () => {
  const { id: productId } = useParams();
  //   console.log(id);
  const { data: product, isLoading, refetch } = useGetAProductsQuery(productId);
  const [updateData] = useUpdateProductMutation();
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (
    formData: TProduct,
    reset: UseFormReset<TProduct>
  ) => {
    const id = toast?.loading("Processing");
    const { data } = await updateData({ data: formData, id: productId });
    console.log(data);
    if (!data?.success) {
      toast.error(data?.message || "Fail to create", {
        id,
      });
      return;
    }
    toast.success(data?.message, {
      id,
    });
    navigate("/ProductManagement");
    reset();
  };
  return (
    <div>
      <Container className="pt-24 flex justify-center">
        <ProductInputCart
          title="update product"
          onSubmit={onSubmit}
          product={product?.data}
        />
      </Container>
    </div>
  );
};

export default UpdateProduct;

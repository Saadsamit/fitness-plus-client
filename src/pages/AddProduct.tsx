import Container from "@/components/Container/Container";
import ProductInputCart from "@/components/Product/ProductInputCart";
import { useAddProductMutation } from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/TProducts";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddProduct = () => {
  const [addData] = useAddProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (
    formData: TProduct,
    reset: UseFormReset<TProduct>
  ) => {
    const id = toast?.loading("Processing");
    const { data } = await addData(formData);
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
        <ProductInputCart title="add product" onSubmit={onSubmit} />
      </Container>
    </div>
  );
};

export default AddProduct;

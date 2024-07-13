import Banner from "@/components/Banner/Banner";
import CartComponent from "@/components/cart/CartComponent";
import Container from "@/components/Container/Container";
import MySelect from "@/components/MySelect/MySelect";
import { Button } from "@/components/ui/button";
import { cartData, removeAllCart } from "@/redux/features/Cart/cartSlice";
import { useCreateCheckoutMutation } from "@/redux/features/checkout/checkoutApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/ReduxHook";
import { TCart } from "@/types/TCart";
import total from "@/utils/setTotalPrice";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface TCheckout {
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice?: number;
  products?: TCart[];
}

const Checkout = () => {
  const productsData = useAppSelector(cartData);
  const dispatch = useAppDispatch();
  const totalPrice = total(productsData);
  const { register, handleSubmit, reset } = useForm<TCheckout>();
  const [createCheckout] = useCreateCheckoutMutation();
  const navigate = useNavigate();
  const selectData = [{ name: "Cash on Delivery" }];

  const onSubmit: SubmitHandler<TCheckout> = async (formData) => {
    const id = toast?.loading("Checkout Processing");
    const products = productsData?.map((item) => ({
      productId: item?.productId,
      quantity: item?.quantity,
    }));
    const checkoutData = { ...formData, products, totalPrice };
    const { data } = await createCheckout(checkoutData);
    if (!data?.success) {
      toast.error(data?.message || "Fail to Checkout", {
        id,
      });
      return;
    }
    toast.success(data?.message, {
      id,
    });
    navigate("/success");
    dispatch(removeAllCart());
    reset();
  };
  return (
    <div>
      <Banner title="checkout" />
      {productsData?.length ? (
        <Container className="pt-24">
          <div className="grid sm:grid-cols-2 gap-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    id="name"
                    {...register("name", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    id="email"
                    {...register("email", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="grid sm:grid-cols-2 items-end gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your Number"
                      id="phone"
                      {...register("phone", { required: true })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <MySelect
                      data={selectData}
                      size={true}
                      placeholder={"Payment Method"}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
                  >
                    Your address
                  </label>
                  <textarea
                    id="address"
                    {...register("address", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Address"
                  ></textarea>
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-wrap justify-between space-x-4 mb-2 p-2">
                <h3 className="text-xl font-bold">Total:</h3>
                <h5 className="text-xl font-bold text-textColor">
                  ${totalPrice}
                </h5>
              </div>
              {productsData?.map((item) => (
                <CartComponent data={item} isCart={true} />
              ))}
            </div>
          </div>
        </Container>
      ) : (
        <div className="flex justify-center py-52 font-semibold capitalize text-lg">
          your cart is empty First add some products
        </div>
      )}
    </div>
  );
};

export default Checkout;

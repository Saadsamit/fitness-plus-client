import Banner from "@/components/Banner/Banner";
import CartComponent from "@/components/cart/CartComponent";
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import { cartData } from "@/redux/features/Cart/cartSlice";
import { useAppSelector } from "@/redux/hooks/ReduxHook";
import totalPrice from "@/utils/setTotalPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useAppSelector(cartData);
  const totalPriceData = totalPrice(cartItem);
  return (
    <div>
      <Banner title="cart" />
      {cartItem?.length ? (
        <Container className="pt-24">
          <h2 className="capitalize font-bold text-3xl mb-10 text-center text-textColor">
            My Cart
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {cartItem.map((item) => (
              <CartComponent data={item} key={item.productId} isCart={true} />
            ))}
          </div>
          <div className="flex flex-wrap justify-between pt-7 items-center">
            <div className="flex flex-wrap space-x-4 mb-2 p-2">
              <h3 className="text-xl font-bold">Total:</h3>
              <h5 className="text-xl font-bold text-textColor">
                ${totalPriceData}
              </h5>
            </div>
            <Button>
              <Link to={"/checkout"}>Checkout</Link>
            </Button>
          </div>
        </Container>
      ) : (
        <div className="flex justify-center py-52 font-semibold capitalize text-lg">
          your cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;

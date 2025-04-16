
import Container from "../../components/Container/Container";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const {cartItems} = useShoppingCartContext()
  
  return (
    <div className="my-9">
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
 
        </div>
        <div className="mt-4 bg-gray-300 p-3 rounded-md">
          <div className="flex flex-col gap-2 ">
            <p>قیمت کل : 28000 تومان</p>
            <p>تخفیف شما : 8000 تومان</p>
            <p>قیمت نهایی : 20000 تومان</p>
          </div>
          <div className="text-left">
            <Button
              variant="success"
              className="px-4 py-2 rounded mt-3 cursor-pointer text-right "
            >
              ثبت سفارش
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;

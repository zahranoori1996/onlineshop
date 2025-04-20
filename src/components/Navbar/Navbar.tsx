import iconBuy from "./../../assets/icons/shopping-cart-icon.svg";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const { cartQTY } = useShoppingCartContext();
  return (
    <div className="flex justify-between shadow h-14 items-center">
      <Container>
        <div className="flex justify-between">
          <ul className="flex gap-5">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div className="relative">
           
           
            <Link to="/cart">
            {cartQTY !== 0 ? (
              <span className="flex justify-center items-center w-5 h-5 bg-red-500 text-xs text-center text-white font-semibold rounded-full absolute -top-2 -right-4">
                {cartQTY}
              </span>
            ) : (
              <span className=""></span>
            )}
              <button className="cursor-pointer">
                <img className="w-6" src={iconBuy} />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

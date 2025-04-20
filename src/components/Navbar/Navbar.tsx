import React from "react";
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
            {cartQTY !== 0 ? (
              <span className="flex justify-center items-center w-5 h-5 bg-red-500 text-xs text-center text-white font-semibold rounded-full absolute -top-2 -right-4">
                {cartQTY}
              </span>
            ) : (
              <span className=""></span>
            )}
            {/* <span className="flex justify-center items-center w-5 h-5 bg-red-500 text-xs text-center text-white font-semibold rounded-full absolute -top-2 -right-4">
              {cartQTY !== 0 ? cartQTY : ""}
            </span> */}
            <Link to="/cart">
              <button className="cursor-pointer">سبد خرید
            
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

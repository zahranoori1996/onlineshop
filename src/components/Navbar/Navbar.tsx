import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Navbar() {
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
          <div>
            <button>سبد خرید</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

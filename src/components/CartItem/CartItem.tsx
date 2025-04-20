import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const {
    handleIncreaseProductQTY,
    handleDecreaseProductQTY,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex gap-3 shadow p-5 mt-4 rounded-md bg-[#d9f0fb]">
      <Link to={`/product/${id}`}>
      <img className="w-25 rounded " src={product?.image} />
      </Link>
      <div className="flex flex-col gap-2">
        <h3> {product?.title} </h3>
        <h3>قیمت {product?.price} تومان</h3>
        <div className="flex items-center gap-2">
          <Button onClick={()=> handleIncreaseProductQTY(id)} variant="primary" className=" rounded px-2 cursor-pointer ">
            +
          </Button>
          <span>{qty}</span>
          <Button onClick={()=>handleDecreaseProductQTY(id)} variant="primary" className=" rounded px-2 cursor-pointer ">
            -
          </Button>
          <Button onClick={()=> handleRemoveProduct(id)} variant="danger" className=" rounded px-2 cursor-pointer ">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams<{ id: string }>();

  const {
    handleIncreaseProductQTY,
    handleDecreaseProductQTY,
    getProductQTY,
    handleRemoveProduct,
    cartItems,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);
  console.log(cartItems);
  return (
    <div className="py-6 m-6 shadow-md">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="w-full flex justify-center">
              <img className="rounded-lg w-[150px]" src={product?.image} />
            </div>
            <div className="">
              {getProductQTY(parseInt(params.id as string)) === 0 ? (
                <Button
                  onClick={() =>
                    handleIncreaseProductQTY(parseInt(params.id as string))
                  }
                  variant="primary"
                  className=" rounded w-full mt-4 p-2 cursor-pointer "
                >
                  افزودن به سبد خرید
                </Button>
              ) : (
                <>
                  <div className="flex items-baseline w-[100%] gap-20">
                    <Button
                      onClick={() =>
                        handleIncreaseProductQTY(parseInt(params.id as string))
                      }
                      variant="primary"
                      className=" rounded w-full mt-4 px-2 py-1 cursor-pointer "
                    >
                      +
                    </Button>
                    <h4>{getProductQTY(parseInt(params.id as string))}</h4>
                    <Button
                      onClick={() =>
                        handleDecreaseProductQTY(parseInt(params.id as string))
                      }
                      variant="danger"
                      className=" rounded w-full mt-4  px-2 py-1 cursor-pointer"
                    >
                      -
                    </Button>
                  </div>
                  <Button
                    onClick={() =>
                      handleRemoveProduct(parseInt(params.id as string))
                    }
                    variant="warning"
                    className=" rounded w-full mt-4  px-2 py-1 cursor-pointer"
                  >
                    حذف
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="col-span-8 leading-9">
            <h2>عنوان محصول : {product?.title} </h2>
            <p>قیمت محصول : {product?.price} تومان</p>

            <p className=""> توضیحات محصول : {product?.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

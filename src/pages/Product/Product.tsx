import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/servers";

function Product() {
  const  [product,setProduct] = useState<IProduct>()
  const params = useParams<{id: string}>();
  useEffect(()=>{
    getProduct(params.id as string).then(result =>{
      setProduct(result)
    })
  }, [])
  return (
    <div className="py-6 m-6 shadow-md">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="w-full">
              <img
                className="rounded-lg w-full"
                src={product?.image}
              />
            </div>
            <div>
              
              <Button variant="primary" className=" rounded w-full mt-4 p-2 cursor-pointer ">
              افزودن به سبد خرید
              </Button>
            </div>
          </div>
          <div className="col-span-8 leading-9">
            <h2>عنوان محصول : {product?.title} </h2>
            <p>قیمت محصول : {product?.price} تومان</p>

            <p className=""> توضیحات محصول : {product?.description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;

import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/servers";

function Store() {
  const [products,setProducts] = useState<IProduct[]>([])

useEffect(()=>{
  getProducts().then(result =>{
    // console.log(result)
    setProducts(result)
  })
}, [])



  return (
    <div className="text-right">
      <Container>
        <h3 className="py-3">جدید ترین محصولات</h3>
        <div className="grid grid-cols-4 gap-4">

     {
      products.map((item ,index)=>(
        <Link key={index} to={`/product/${item.id}`}>
        <ProductItem {...item} />
        </Link>  
      ))
     }
        </div>
      </Container>
    </div>
  );
}

export default Store;

import React from "react";
import Container from "../../components/Container/Container";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="text-right">
      <Container>
        <h3 className="py-3">جدید ترین محصولات</h3>
        <div className="grid grid-cols-4 gap-4">

      <Link to={`/product/${1}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${2}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${3}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${4}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${5}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${6}`}>
      <ProductItem />
      </Link>
      <Link to={`/product/${7}`}>
      <ProductItem />
      </Link>
         
        </div>
      </Container>
    </div>
  );
}

export default Store;

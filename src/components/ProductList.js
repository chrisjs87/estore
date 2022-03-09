import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="ProductList">
      <div>
        {products.map(product=><Product key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default ProductList;
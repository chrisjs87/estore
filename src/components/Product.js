import React from "react";
import { useState } from "react"
import ProductModal from "./ProductModal"

const Product = (props) => {
  const { product } = props;
  const [modal, setModal] = useState(false)

  return (
    <div className="product">
      <h1>Name: {product.name}</h1>
      <h1>Price: {product.price}</h1>
      <h1>Rating: {product.rating}</h1>
      <img src={product.image_link} alt="product"/>
      <button 
        onClick={() => {
          setModal(!modal) //true
        }}
      >
        Show More
      </button>
      {modal && <ProductModal product={product} setModal={setModal}/>}
    </div>
  );
}

export default Product;
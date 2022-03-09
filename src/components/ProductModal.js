import React from "react";

const ProductModal = (props) => {
  const { product, setModal } = props;

  const navToProductPage = () => {
    window.open(product.product_link, "_blank")
  }
  const navToProductSite = () => {
    window.open(product.website_link, "_blank")
  }

  return (
    <div className="product">
      <img src={product.image_link} alt="product"/>
      <h1>Name: {product.name}</h1>
      <h1>Description: {product.description}</h1>
      <h1>Rating: {product.rating}</h1>
      <h1>Price: {product.price}</h1>
      <h1>Colors</h1>

      <button onClick={()=>{navToProductPage()}} >Product Page</button>
      <button onClick={()=>{navToProductSite()}} >Product Manufacturer Site</button>

      <button onClick={() => {setModal(false)}}>CLOSE MODAL</button>
    </div>
  );
}

export default ProductModal;
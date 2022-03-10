import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";

const ProductModal = (props) => {
  const { product, setShowModal, setModalItem } = props;

  const navToProductPage = () => {
    window.open(product.product_link, "_blank")
  }
  const navToProductSite = () => {
    window.open(product.website_link, "_blank")
  }

  return (
    <div className="productModal">
      <Card>
        <img src={product.image_link} alt="product"/>
        <Typography align="left">{product.name}</Typography>
        <Typography align="left">Description: {product.description}</Typography>
        <Typography align="left">Rating: {product.rating ? product.rating : "Not Rated"}</Typography>
        <Typography align="left">${product.price}</Typography>
        {product.product_colors.length !== 0 ? 
          <Typography align="left">
            Colors: {product.product_colors.map((color,index)=>(
              <span key={index} style={{color: color.hex_value}}>
                {color.colour_name ? `${color.colour_name}` : "Color" + (index+1) + " "} 
              </span>))}
          </Typography>
          :
          <Typography align="left">Color options not available</Typography>
        }

        <ButtonGroup variant="contained">
          <Button onClick={()=>{navToProductPage()}} >Product Page</Button>
          <Button onClick={()=>{navToProductSite()}} >Product Manufacturer Site</Button>
          <Button color="secondary" onClick={() => {setShowModal(false); setModalItem({})}}>Return to List</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}

export default ProductModal;
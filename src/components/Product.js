import React from "react";
import { useState } from "react";
import ProductModal from "./ProductModal";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Product = (props) => {
  const { product } = props;
  // const [modal, setModal] = useState(false)
  const { showModal, setShowModal, setModalItem } = props;

  return (
      <Card elevation={3} style={{height: '100%'}}>
        <CardContent>
          <img src={product.image_link} alt="product"/>
          <Typography align="left">{product.name}</Typography>
          <Typography align="left">${product.price}</Typography>
          <Typography align="left">Rating: {product.rating ? product.rating + " stars": "Not Rated"}</Typography>
          <CardActions>
            <Button 
              variant="contained"
              onClick={() => {
                setModalItem(product)
                setShowModal(!showModal) //true
              }}
            >
              Show More
            </Button>
          </CardActions>
          {/* <div className="modalContainer">
            {modal && <ProductModal product={product} setShowModal={setShowModal}/>}
          </div> */}
        </CardContent>
      </Card>
  );
}

export default Product;
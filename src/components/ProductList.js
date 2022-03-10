import React from "react";
import Product from "./Product";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ProductList = (props) => {
  const { products } = props;
  const { showModal, setShowModal, setModalItem } = props;

  return (
    <Container>
      <Grid container spacing={3} >
        {products.map(product=> (
          <Grid item key={product.id} xs={12} md={6} lg={4}>
            <Product product={product} showModal={showModal} setShowModal={setShowModal} setModalItem={setModalItem}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductList;
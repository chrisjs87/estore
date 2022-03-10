import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import React from "react";
import ProductModal from "./components/ProductModal";
import Typography from '@mui/material/Typography';

function App() {

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [modalItem, setModalItem] = useState({});
  let myVariable = `App ${showModal ? "modalActive" : ''}`
  
  useEffect(()=>{
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(()=>{

  },[modalItem]);

  return (
    <>
    <div className={myVariable}>
      <Typography variant="h1">Make-Up-E-Store</Typography>
      <ProductList className="productList" products={products} showModal={showModal} setShowModal={setShowModal} setModalItem={setModalItem}/>
    </div>
    <div>
      {showModal ? <ProductModal className={"productModal"} product={modalItem} setShowModal={setShowModal} setModalItem={setModalItem} /> : null}
    </div>
    </>
  );
}

export default App;

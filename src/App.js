import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import React from "react";
import ProductModal from "./components/ProductModal";
import Typography from "@mui/material/Typography";
import ProductFilterAttempt from "./components/ProductFilterForm"

function App() {

  const defaultValues = {
    rating: "",
    price: null,
    productType: "",
    productColors: "",
  };

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formValues, setFormValues] = useState(defaultValues);

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

  useEffect(()=>{},[modalItem]);

  useEffect(()=>{
      const newArray = products.filter(product => product.product_type === formValues.productType)
      setProducts(newArray)
  },[formValues.productType]);

  useEffect(()=>{
      const newArray = products.filter(product => product.rating >= formValues.rating)
      setProducts(newArray)
  },[formValues.rating]);

  return (
    <>
    <div className={myVariable}>
      <Typography variant="h1">Make-Up-E-Store</Typography>
      <div>
        <ProductFilterAttempt formValues={formValues} setFormValues={setFormValues}/>
        <ProductList className="productList" products={products} showModal={showModal} setShowModal={setShowModal} setModalItem={setModalItem}/>
      </div>
    </div>
    <div>
      {showModal ? <ProductModal className={"productModal"} product={modalItem} setShowModal={setShowModal} setModalItem={setModalItem} /> : null}
    </div>
    </>
  );
}

export default App;

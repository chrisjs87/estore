import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import React from "react";
import ProductModal from "./components/ProductModal";
import Typography from "@mui/material/Typography";
import ProductFilterAttempt from "./components/ProductFilterAttempt"

function App() {

  // const initialFilterValues = {
  //   price: '',
  //   productType: '',
  //   productColors: '',
  //   rating: '',
  // }

  const defaultValues = {
    rating: "",
    price: null,
    productType: "",
    productColors: "",
  };

  // const [valsFromAxios, setValsFromAxios] = useState([]);

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formValues, setFormValues] = useState(defaultValues);
  // const [filterLinks, setFilterLinks] = useState([]);

  

  const [modalItem, setModalItem] = useState({});
  let myVariable = `App ${showModal ? "modalActive" : ''}`
  
  useEffect(()=>{
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(res => {
        // setValsFromAxios(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(()=>{},[modalItem]);

  useEffect(()=>{
    let tempValue = null;
    if(formValues.price == 3.99){tempValue = 0}
    if(formValues.price == 8.99){tempValue = 4}
    if(formValues.price == 13.99){tempValue = 9}
    if(formValues.price == 18.99){tempValue = 14}
    // if(formValues.price === defaultValues){
    //   // setProducts(valsFromAxios);
    //   // setFilterLinks([]);
    // } else {
      const newArray = products.filter(product => (product.price <= formValues.price && product.price >= tempValue))
      setProducts(newArray)
      console.log(tempValue)
      // setFilterLinks([...filterLinks, {name: formValues[]}])
      // console.log(filterLinks);
    // }
  },[formValues.price]);

  useEffect(()=>{
    if(formValues.productType === defaultValues){
      // setProducts(valsFromAxios);
      // setFilterLinks([]);
    } else {
      const newArray = products.filter(product => product.product_type === formValues.productType)
      setProducts(newArray)
      // setFilterLinks([...filterLinks, {name: formValues[]}])
      // console.log(filterLinks);
    }
  },[formValues.productType]);

  // useEffect(()=>{
  //   if(formValues.productColors === defaultValues.productColors){
  //     // setProducts(valsFromAxios);
  //     // setFilterLinks([]);
  //   } else {
  //     const newArray = products.filter(product => product.productColors >= formValues.productColors)
  //     setProducts(newArray)
  //     // setFilterLinks([...filterLinks, {name: formValues[]}])
  //     // console.log(filterLinks);
  //   }
  // },[formValues.productColors]);

  useEffect(()=>{
    if(formValues.rating === defaultValues){
      // setProducts(valsFromAxios);
      // setFilterLinks([]);
    } else {
      const newArray = products.filter(product => product.rating >= formValues.rating)
      setProducts(newArray)
      // setFilterLinks([...filterLinks, {name: formValues[]}])
      // console.log(filterLinks);
    }
  },[formValues.rating]);

  return (
    <>
    <div className={myVariable}>
      <Typography variant="h1">Make-Up-E-Store</Typography>
      <div>
        {/* <div className="FilterLinks">
          {filterLinks.map(link => <button onClick={()=>{filterLinks.filter(link => )}}></button>)}
        </div> */}
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

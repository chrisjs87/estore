import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList"
import React from "react";

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(res => {
        // console.log(res);
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>E-Store</h1>
      <ProductList products={products}/>
    </div>
  );
}

export default App;

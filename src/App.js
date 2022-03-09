import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([]);
  
  useEffect(()=>{
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>E-Store</h1>
      <productList></productList>
    </div>
  );
}

export default App;

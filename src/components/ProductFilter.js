import React from "react";

import { useState } from "react";

const ProductFilter = (props) => {

  const initialFilterValues = {
    price: "",
    productType: "",
    productColors: "",
    rating: "",
    text: ""
  }

  // const { filterValues, setFilterValues } = props;
  const [filterValues, setFilterValues] = useState(initialFilterValues)

  // const handleChange = event => {
  //   const { name, type, value, checked } = event.target;
  //   const updatedInfo = type === "checkbox" ? checked : value;
  //   setFilterValues({...filterValues, [name]: updatedInfo});
  //   console.log("Changing is occurring!")
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = value;
    setFilterValues({ ...filterValues, [name]: updatedInfo });
    console.log(filterValues);
  };

  return (
    <div>
      This is My filter
      <form>
        <label>
          Rating:
          <input
            type="radio"
            value="3"
            name="rating"
            checked={filterValues.rating === "3"}
            onChange={handleChange}
          />
            5 Stars and Up
          {/* <input 
            type="radio" 
            value="4" 
            name="rating" 
            checked={filterValues.rating === "4"} 
            onChange={handleChange} /> 
            4 Stars and Up
          <input 
            type="radio" 
            value="3" 
            name="rating" 
            checked={filterValues.rating === "3"} 
            onChange={handleChange} /> 
            3 Stars and Up
          <input 
            type="radio" 
            value="2" 
            name="rating" 
            checked={filterValues.rating === "2"} 
            onChange={handleChange} /> 
            2 Stars and Up
          <input 
            type="radio" 
            value="1" 
            name="rating" 
            checked={filterValues.rating === "1"} 
            onChange={handleChange} /> 
            1 Star and Up */}
          {/* <input type="radio" value="5" name="rating" checked={filterValues.rating === "5"} /> 5 Stars and Up
          <input type="radio" value="4" name="rating" checked={filterValues.rating === "4"} /> 4 Stars and Up
          <input type="radio" value="3" name="rating" checked={filterValues.rating === "3"} /> 3 Stars and Up
          <input type="radio" value="2" name="rating" checked={filterValues.rating === "2"} /> 2 Stars and Up
          <input type="radio" value="1" name="rating" checked={filterValues.rating === "1"} /> 1 Star and Up */}
        </label>
        {/* <label>
          Product type
          Bronzer <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Blush <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Lip Liner <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Foundation <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Eye Shadow <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Eye Liner <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Nail Polish <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Lipstick <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
          Mascara <input type="checkbox" name="productType" checked={filterValues.productType} onChange={handleChange} />
        </label> */}
        <label>
          text
          <input type="text" name="text" value={filterValues.text} onChange={handleChange}/>
        </label>
      </form>
    </div>
  );
}

export default ProductFilter;
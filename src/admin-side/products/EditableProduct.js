import React, { useState, useEffect } from 'react';
import './products.css';
import { isEqual } from "lodash/fp";

function Product({ product, handleUpdatedProduct }) {

  //   // state -> object with changes which is sent as a json in the post request.

  const [productToUpdate, setProductToUpdate] = useState(null)

  const handleChange = (field, event) => {
    if (!productToUpdate) {
      setProductToUpdate({ ...product, [field]: event.target.value })
    }
    else {
      setProductToUpdate({ ...productToUpdate, [field]: event.target.value })
    }
    // console.log(productToUpdate)
  }

  const sendItOrNot = (productToUpdate) => {
    if (!productToUpdate) {
      return
    }
    else {
      handleUpdatedProduct(productToUpdate)
    }
  }

  // const [productToUpdate, dispatch] = useReducer(reducer, product)

  useEffect(() => {
    sendItOrNot(productToUpdate)
  }, [productToUpdate])

  return (
    <li key={product.id}>
      <form>
        <input disabled value={product.id} />
        <input onBlur={(event) => handleChange("product_name", event)} type="text" defaultValue={product.product_name} />
        <input onBlur={(event) => handleChange("description", event)} type="text" defaultValue={product.description} />
        <input onBlur={(event) => handleChange("price", event)} type="number" defaultValue={product.price} />
        <input onBlur={(event) => handleChange("stock_quantity", event)} type="number" defaultValue={product.stock_quantity} />
      </form>
    </li>
  );
}

export default Product;
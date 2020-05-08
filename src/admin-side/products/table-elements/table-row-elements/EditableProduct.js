import React, { useState, useEffect } from 'react';
import { isEqual } from "lodash/fp";

import './EditableProduct.css'; 

function EditableProduct({ product, handleUpdatedProduct, toggleEditSetting }) {

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
    <tbody>
      <tr key={product.id} className="editable-row">
        <td><input type="number" className="id" disabled defaultValue={product.id}/></td>
        <td><textarea onBlur={(event) => handleChange("product_url", event)} defaultValue={product.image_url}/></td>
        <td><textarea onBlur={(event) => handleChange("product_name", event)} defaultValue={product.product_name}/></td>
        <td><textarea onBlur={(event) => handleChange("description", event)} defaultValue={product.description}/></td>
        <td><input type="number" onBlur={(event) => handleChange("price", event)} defaultValue={product.price}/></td>
        <td><input type="number" onBlur={(event) => handleChange("stock_quantity", event)} defaultValue={product.stock_quantity}/></td>
        <td><button onClick={() => toggleEditSetting(product)}>Cancel</button> <button>Save</button></td>
      </tr>
    </tbody>
    
  );
}

export default EditableProduct;
import React, { useState, useEffect } from 'react';
import { isEqual } from "lodash/fp";

import './EditableProduct.css'; 

function EditableProduct({product, handleUpdatedProduct, toggleEditSetting, editItem}) {

  const [productToUpdate, setProductToUpdate] = useState(product)

  const handleChange = (field, event) => {
      setProductToUpdate({ ...productToUpdate, [field]: event.target.value })
  }

  const individualModeButtons = () => {
        return (
        <td>
          <button className="save" onClick={() => editItem(productToUpdate)}>Save</button>
          <p className="cancel" onClick={() => toggleEditSetting(product)}>Cancel</p> 
        </td>
        )
}

  return (
      <tr key={product.id} className="editable-row">
        <td><input type="number" className="id" disabled defaultValue={product.id}/></td>
        <td><textarea onBlur={(event) => handleChange("product_url", event)} defaultValue={product.image_url}/></td>
        <td><textarea onBlur={(event) => handleChange("product_name", event)} defaultValue={product.product_name}/></td>
        <td><textarea onBlur={(event) => handleChange("description", event)} defaultValue={product.description}/></td>
        <td><input type="number" onBlur={(event) => handleChange("price", event)} defaultValue={product.price}/></td>
        <td><input type="number" onBlur={(event) => handleChange("stock_quantity", event)} defaultValue={product.stock_quantity}/></td>
        {individualModeButtons()}
      </tr>
    
  );
}

export default EditableProduct;
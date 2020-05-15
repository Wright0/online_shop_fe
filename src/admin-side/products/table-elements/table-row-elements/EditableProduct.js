import React, { useState } from 'react';
import { displayPriceWithDecimals, returnStringPriceToNumber } from '../../../../shared-logic/PriceDecimalConversionLogic.js';

import './EditableProduct.css'; 

function EditableProduct({product, toggleEditSetting, editItem}) {

  const [productToUpdate, setProductToUpdate] = useState(product)

  const handleChange = (field, event) => {
    if(field === "price"){
      setProductToUpdate({ ...productToUpdate, [field]: returnStringPriceToNumber(event.target.value) })
    } else {
      setProductToUpdate({ ...productToUpdate, [field]: event.target.value })
    }
  }

  const individualModeButtons = () => {
        return (
        <td className="edit-buttons">
          <button className="save" onClick={() => editItem(productToUpdate)}>Save</button>
          <p className="cancel" onClick={() => toggleEditSetting(product)}>Cancel</p> 
        </td>
        )
  }

  return (
      <tr key={product.id} className="editable-row">
        <td><input type="number" className="id" disabled defaultValue={product.id}/></td>
        <td><input type="text" onBlur={(event) => handleChange("image_url", event)} defaultValue={product.image_url}/></td>
        <td><input type="text" onBlur={(event) => handleChange("product_name", event)} defaultValue={product.product_name}/></td>
        <td>
          <select>
            <option>Hello</option>
            <option>Hello2</option>
          </select>
          {/* <textarea onBlur={(event) => handleChange("category", event)} defaultValue="a category"/> */}
        </td>
        <td><input type="text" onBlur={(event) => handleChange("description", event)} defaultValue={product.description}/></td>
        <td><input type="text" onBlur={(event) => handleChange("price", event)} defaultValue={displayPriceWithDecimals(product.price)}/></td>
        <td><input type="number" onBlur={(event) => handleChange("stock_quantity", event)} defaultValue={product.stock_quantity}/></td>
        {individualModeButtons()}
      </tr>
    
  );
}

export default EditableProduct;
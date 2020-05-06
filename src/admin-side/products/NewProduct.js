import React, { useState } from 'react';
import './EditableProduct.css'; 
import './NewProduct.css'; 

function NewProduct({ setAddNewStatus }){

    const [newItem, setNewItem] = useState({})

    const handleNewItemInput = (field, event) => {
        console.log("hi")
    }

    const submitNewProduct = () => {
        setAddNewStatus(false);
    }
    
    return (
        <tr key="new">
          <td><button onClick={submitNewProduct}>Submit</button></td>
          <td><textarea onBlur={(event) => handleNewItemInput("product_url", event)} defaultValue="URL"/></td>
          <td><textarea onBlur={(event) => handleNewItemInput("product_name", event)} defaultValue="Product Name"/></td>
          <td><textarea onBlur={(event) => handleNewItemInput("description", event)} defaultValue="Description"/></td>
          <td><input type="number" onBlur={(event) => handleNewItemInput("price", event)} defaultValue="Price"/></td>
          <td><input type="number" onBlur={(event) => handleNewItemInput("stock_quantity", event)} defaultValue="Stock Quantity"/></td>
        </tr>
    )

}

export default NewProduct;

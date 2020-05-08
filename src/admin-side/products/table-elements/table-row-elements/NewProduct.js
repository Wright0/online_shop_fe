import React, { useState } from 'react';
import './TableButtons.css';

function NewProduct({ saveNewItem, handleClickAddNew }){

    const defaultNewItem = {
        "product_name": "Name",
        "description": "Description",
        "image_url": "Item URL",
        "price": 0,
        "stock_quantity": 0
    }

    const [newItem, setNewItem] = useState(defaultNewItem)

    const handleNewItemInput = (field, event) => {
        setNewItem({...newItem, [field]: event.target.value});
    }

    const submitNewProduct = () => {
        saveNewItem(newItem); 
        handleClickAddNew();
    }
    
    return (
        <tr key="new">
            <td></td>
            <td><textarea onBlur={(event) => handleNewItemInput("product_url", event)} defaultValue={newItem.image_url}/></td>
            <td><textarea onBlur={(event) => handleNewItemInput("product_name", event)} defaultValue={newItem.product_name}/></td>
            <td><textarea onBlur={(event) => handleNewItemInput("description", event)} defaultValue={newItem.description}/></td>
            <td><input type="number" onBlur={(event) => handleNewItemInput("price", event)} defaultValue={newItem.price}/></td>
            <td><input type="number" onBlur={(event) => handleNewItemInput("stock_quantity", event)} defaultValue={newItem.stock_quantity}/></td>
            <td><button className="submit" onClick={submitNewProduct}>Submit</button></td>
        </tr>
        
    )

}

export default NewProduct;

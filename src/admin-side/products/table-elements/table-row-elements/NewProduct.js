import React, { useState } from 'react';
import './NewProduct.css';
import './TableButtons.css';

function NewProduct({ saveNewItem, handleClickAddNew }){

    const defaultNewItem = {
        "product_name": "Name",
        "category":"Category",
        "description": "Description",
        "image_url": "Item URL",
        "price": "0.00",
        "stock_quantity": "0"
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
        <tr key="new" className="new-item">
            <td></td>
            <td><input type="text" onBlur={(event) => handleNewItemInput("image_url", event)} placeholder={newItem.image_url}/></td>
            <td><input type="text" onBlur={(event) => handleNewItemInput("product_name", event)} placeholder={newItem.product_name}/></td>
            <td>
                <select onBlur={(event) => handleNewItemInput("category", event)}>
                    <option disabled selected>Select a Category</option>
                    <option>fruits</option>
                    <option>vegetables</option>
                </select>
                <input type="text" placeholder="New Category"></input>
            </td>
            <td><input type="text" onBlur={(event) => handleNewItemInput("description", event)} placeholder={newItem.description}/></td>
            <td><input type="number" onBlur={(event) => handleNewItemInput("price", event)} placeholder={newItem.price}/></td>
            <td><input type="number" onBlur={(event) => handleNewItemInput("stock_quantity", event)} placeholder={newItem.stock_quantity}/></td>
            <td>
                <button className="submit" onClick={submitNewProduct}>Submit</button>
                <p className="cancel" onClick={() => handleClickAddNew()}>Cancel</p>
            </td>
        </tr>
        
    )

}

export default NewProduct;

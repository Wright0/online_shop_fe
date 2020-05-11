import React from 'react';
import './Product.css'; 
import './TableButtons.css';

function Product({ product, toggleEditSetting, deleteItem }) {

  return (
      <tr key={product.id} className="viewable-product">
        <td>{product.id}</td>
        <td>{product.image_url}</td>
        <td>{product.product_name}</td>
        <td>Whta happened here</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock_quantity}</td>
        <td>
          <button className="edit" onClick={() => toggleEditSetting(product)} >Edit</button>
          <button className="delete" onClick={() => deleteItem(product.id)}>Delete</button>
        </td>
      </tr>
  );
}

export default Product;

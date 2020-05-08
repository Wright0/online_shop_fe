import React from 'react';
import './Product.css'; 

function Product({ product, toggleEditSetting }) {

  return (
    <tbody>
      <tr key={product.id} className="viewable-product">
        <td>{product.id}</td>
        <td><textarea disabled defaultValue={product.image_url} /></td>
        <td>{product.product_name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock_quantity}</td>
        <td><button onClick={() => toggleEditSetting(product)}>Edit</button></td>
      </tr>
    </tbody>
  );
}

export default Product;

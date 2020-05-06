import React from 'react';

import './Product.css'; 

function Product({ product }) {

  return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td><textarea disabled defaultValue={product.image_url} /></td>
        <td>{product.product_name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock_quantity}</td>
      </tr>
  );
}

export default Product;

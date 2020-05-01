import React, {useState} from 'react';
import './products.css';

function Product({ product }) {

  return (
    <li key={product.id}>
      <ul className="product-information">
        <li>
          {product.id}
        </li>
        <li>
          {product.image_url}
        </li>
        <li>
          {product.product_name}
        </li>
        <li>
          {product.description}
        </li>
        <li> 
          {product.price}
        </li>
        <li>
          {/* <button onClick={() => setProductToUpdate(productToUpdate.stock_quantity -1)}>-</button> */}
          {product.stock_quantity}
          {/* <button onClick={() => setProductToUpdate(productToUpdate.stock_quantity +1)}>+</button> */}
        </li>
      </ul>
    </li>
  );
}

export default Product;

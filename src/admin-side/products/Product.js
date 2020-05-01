import React from 'react';
import './products.css';

function Product({ product }) {
  return (
    <li>
      <ul class="product-information">
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
          <button>-</button>
          {product.stock_quantity}
          <button>+</button>
        </li>
      </ul>
    </li>
  );
}

export default Product;

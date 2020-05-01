import React from 'react';
import Product from './Product.js';
import './productContainer.css';


function ProductContainer({ products }) {

  console.log("container products " + products)
  const productItem = products.map(product => {
    return <Product product={product} />
  })

  return (
    <>
      <h1>I am the product container</h1>
      <p>I will have a list(ul) and each line will be populated with one product item (a li?) from the Product component. Each Product component will use the id to allow you to edit itself from the productcontainer</p>
      <ul class="products-table">
        {productItem}
      </ul>

    </>
  );
}

export default ProductContainer;

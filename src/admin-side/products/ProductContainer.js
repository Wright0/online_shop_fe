import React from 'react';
import Product from './Product.js'

function ProductContainer() {
  return (
    <>
    <h1>I am the product container</h1>
    <p>I will have a table(?) and each line will be populated with one product item (a tr?) from the Product component. Each Product component will use the id to allow you to edit itself from the productcontainer</p>
    <Product/>
    </>
  );
}

export default ProductContainer;

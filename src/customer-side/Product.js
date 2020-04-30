import React from 'react';
import { useParams } from 'react-router-dom';

function Product({ products }) {

    let { productId } = useParams()

    const product = products.find(product => product.id === parseInt(productId))

if(!product) return (
    <h1>No product found!</h1>
)
  return (
    <div>
        <h1>Hi</h1> 
        <p>{ product.product_name}</p>
    </div>
  );
}

export default Product;

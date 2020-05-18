import React from 'react';
import { Link } from 'react-router-dom'

function Categories({ products }) {

console.log(products.length)
if(products.length === 0) return null
  return (
    <div>

        <h2>Hi, welcome to the shop. Below you can find the products? Or product categories</h2> 
        <Link to={`shop/${products[0].id}`}><p>Check out this product</p></Link>
  
    </div>

  );
}

export default Categories;

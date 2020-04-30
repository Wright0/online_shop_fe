import React from 'react';

// TODO: this needs to be empty, and just renders the customer pages.
function CustomerContainer({ products }) {


if(products.length === 0) return null
  return (
    <div>
        <h2>Hi, welcome to the shop. Below you can find the products? Or product categories</h2> 
        <p>{ products[0].product_name}</p>
    </div>
  );
}

export default CustomerContainer;

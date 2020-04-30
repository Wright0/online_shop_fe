import React from 'react';

function CustomerContainer({ products }) {


if(products.length === 0) return null
  return (
    <div>
        <h1>Hi</h1> 
        <p>{ products[0].product_name}</p>
    </div>
  );
}

export default CustomerContainer;

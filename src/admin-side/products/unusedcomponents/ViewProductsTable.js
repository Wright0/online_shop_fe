import React from 'react';
import './ViewProductsTable.css';
import Product from '../table-row-elements/Product.js'

function ViewProductsTable( {products} ) {

  const tableRow = products.map(product => {
    return <Product key={product.id} product={product} />
  })

  return (
    <table className="products-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Image URL</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock Amount</th>
          </tr>
        </thead>

        {tableRow}

    </table>
  );
}

export default ViewProductsTable;


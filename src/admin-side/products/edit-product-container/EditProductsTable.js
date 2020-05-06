import React from 'react';
import '../view-product-container/ViewProductsTable.css';
import EditableProduct from './EditableProduct.js'

function EditProductsTable( {products} ) {

  const tableRow = products.map(product => {
    return <EditableProduct key={product.id} product={product} />
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

export default EditProductsTable;


import React from 'react';
import '../view-product-container/ViewProductsTable.css';
import EditableProduct from './EditableProduct.js'
import NewProduct from './NewProduct.js'

function EditProductsTable( {products, isAddingNew, setIsAddingNew, saveNewItem} ) {

  const tableRow = products.map(product => {
    return <EditableProduct key={product.id} product={product} />
  })

  const newProduct = () => {
    if (isAddingNew) return <NewProduct saveNewItem={saveNewItem} setAddNewStatus={setIsAddingNew}/>;
  } 

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
        {newProduct()}

    </table>
  );
}

export default EditProductsTable;


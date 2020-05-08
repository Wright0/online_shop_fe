import React from 'react';
import TableRows from './table-row-elements/TableRow.js';
import NewProduct from './table-row-elements/NewProduct.js'
import './Table.css';

function Table( {isAddingNew, handleClickAddNew, saveNewItem} ) {

  const newItem = () => {
    if (isAddingNew) return <NewProduct handleClickAddNew={handleClickAddNew} saveNewItem={saveNewItem}/>

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
            <th></th>
          </tr>
        </thead>
        <tbody>
        {newItem()}
        <TableRows
        />
        </tbody>
      
        
    </table>
  );
}

export default Table;



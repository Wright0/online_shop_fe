import React, {useState, useEffect} from 'react';
import TableRows from './table-row-elements/TableRow.js';
import NewProduct from './table-row-elements/NewProduct.js'
import './Table.css';

function Table( {isAddingNew, handleClickAddNew} ) {

  const [products, setProducts] = useState([]);

  const giveProductsEditableMode = (productsList) => {
      const newProducts = productsList.map(product => {
          return {...product, ["isInEditMode"]: false}}
          )
      setProducts(newProducts);
   }

  const getProducts = () => {
      fetch(`http://localhost:8000/api/products`)
      .then(response => response.json())
      .then(productsList => giveProductsEditableMode(productsList))
      .catch(err => console.error)
  }

  useEffect( () => {
    getProducts()
  }, [])

  const saveNewItem = (newItem) => {
    fetch(`http://localhost:8000/api/products/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(newItem)
    }).then((response) => console.log(response))
  }

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
          products={products}
          setProducts={setProducts}
        />
        </tbody>
      
        
    </table>
  );
}

export default Table;



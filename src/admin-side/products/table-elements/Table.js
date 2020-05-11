import React, {useState, useEffect} from 'react';
import TableRows from './table-row-elements/TableRow.js';
import NewProduct from './table-row-elements/NewProduct.js'
import './Table.css';

function Table({ isAddingNew, handleClickAddNew }) {

  const [products, setProducts] = useState([]);

  const giveProductsEditableModeAtGET = (productsList) => {
      const newProducts = productsList.map(product => {
          return {...product, ["isInEditMode"]: false}}
          )
      setProducts(newProducts);
   }

  const getProducts = () => {
      fetch(`http://localhost:8000/api/products`)
      .then(response => response.json())
      .then(productsList => giveProductsEditableModeAtGET(productsList))
      .catch(err => console.error)
  }

  useEffect( () => {
    getProducts()
  }, [])

  //The problem with this is that you don't have the ID yet. I've set it to be "pending" when it loads and when you refresh, it'll grab the ID
  const addNewProductToProductsArray = (newItem) => {
    newItem.isInEditMode = false;
    newItem.id = "pending"
    const productsWithNewAddition = [...products];
    productsWithNewAddition.push(newItem);
    setProducts(productsWithNewAddition);
  }

  const saveNewItem = (newItem) => {
    fetch(`http://localhost:8000/api/products/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(newItem)
    })
    .then((response) => console.log(response))
    .then(addNewProductToProductsArray(newItem))
    .catch(err => alert(err));
  }

  const changeProductInProductsArray = (itemBeingChanged) => {
    itemBeingChanged.isInEditMode = false;
    
    const productsCopy = products.map( product => {
      if (product.id === itemBeingChanged.id) {
        return itemBeingChanged
      } else {
        return product
      }
    });

    setProducts(productsCopy);
  }

  const editItem = (item) => {
    delete item.isInEditMode;
    fetch(`http://localhost:8000/api/products/${item.id}/`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(item)
    })
    .then(() => changeProductInProductsArray(item))
    .catch(err => alert(err));
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
            <th>Category</th>
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
          editItem={editItem}
        />
        </tbody>
      
        
    </table>
  );
}

export default Table;



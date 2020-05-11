import React, {useState, useEffect} from 'react';
import TableRows from './table-row-elements/TableRow.js';
import NewProduct from './table-row-elements/NewProduct.js'
import NoProducts from './table-row-elements/NoProducts.js'
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

  const addNewProductToProductsArray = (newItem) => {
    newItem.isInEditMode = false;
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
    .then(res => res.json())
    .then(response => {
      addNewProductToProductsArray({...newItem, "id": response.id})
      })
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

  const deleteProductInProductsArray = (deletedItemID) => {    
    const productsCopy = products.filter(product => product.id != deletedItemID)
    setProducts(productsCopy);
  }

  const deleteItem = (itemId) => {
    fetch(`http://localhost:8000/api/products/${itemId}/`, {
      method:'DELETE'
    })
    .then(() => deleteProductInProductsArray(itemId))
    .catch(err => alert(err));
  }

  const newItem = () => {
    if (isAddingNew) return <NewProduct handleClickAddNew={handleClickAddNew} saveNewItem={saveNewItem}/>
  }

  const noItems = () => {
    if (products.length === 0) return <NoProducts/>
  }

  return (
    <>
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
          deleteItem={deleteItem}
        />
        </tbody>
    </table>

    {noItems()}
    </>
  );
}

export default Table;



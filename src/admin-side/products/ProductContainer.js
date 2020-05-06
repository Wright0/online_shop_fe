import React, { useState } from 'react';
import Product from './Product.js';
import EditableProduct from './EditableProduct.js';
import NewProduct from './NewProduct.js';
import './ProductContainer.css';

import { isEqual } from "lodash/fp";


function ProductContainer({ products }) {



  const [editMode, setEditMode] = useState(false)
  const [addNewMode, setAddNewMode] = useState(false)

  const [changesToBeSubmitted, setchangesToBeSubmitted] = useState([])


  //BUNDLING AND SENDING OF CHANGES TO DATABASE FOR EDIT MODE (currently a mess)
  
      // function to check if it's in products -> returns true/false
  const isEqualToDBProduct = (itemToBeCompared) => {
    const productInDatabase = products.find(item => item.id === itemToBeCompared.id);
    console.log(itemToBeCompared)
    return isEqual(productInDatabase, itemToBeCompared);
  }

  //Function to check if it's in changesToBe Submitted -> returns true/false
  const isInChangesToBeSubmitted = (itemToBeCompared) => {
    return changesToBeSubmitted.some(item => item.id === itemToBeCompared.id);
  }

  const isDifferentFromChangesToBeSubmittedVersion = (itemToBeCompared) => {
    const currentEditedItem = changesToBeSubmitted.find(item => item.id === itemToBeCompared.id);
    return isEqual(currentEditedItem, itemToBeCompared);
  }
  
  const handleUpdatedProduct = (itemToBeCompared) => {

    // if (!isDifferentToDBProduct(itemToBeCompared)) {
    //   console.log("It's the same as the database version");
    // }

    console.log(isEqualToDBProduct(itemToBeCompared));
    return;

    // if (!isInChangesToBeSubmitted(itemToBeCompared)) {
    //   console.log("not In Changes To Be Submitted")
    // }
    // // push it into changes to be changesToBeSubmitted

    // if (isDifferentFromChangesToBeSubmittedVersion(itemToBeCompared)) {
    //   console.log("it's in changes and it has extra edit")
    // }

    // return;
  }
  


  //MAP PRODUCTS OUT IN TABLE (as a product or editable product)
  const productItem = products.map(product => {
    if (editMode === true) {
      return <EditableProduct key={product.id} product={product} handleUpdatedProduct={handleUpdatedProduct} />
    }
    else {
      return <Product key={product.id} product={product} />
    }
  })

  //BUTTON AND RENDERING LOGIC
  const pageStatus = () => editMode ? "Cancel" : "Edit";

  const toggleEditCancelButtonClass = () => editMode ? "cancel-product" : "edit-product"

  const productTableClass = () => editMode ? "edit-mode" : "view-mode";

  const toggleEditMode = () => {
    if (!editMode) {
      setAddNewMode(false);
    }
    setEditMode(!editMode);
  }

  const saveButton = () => {
    if (editMode) return <button className="publish-product">Save</button>;
  }

  const activateNewProduct = () => {
      setEditMode(true);
      setAddNewMode(true);
  }

  const newProduct = () => {
    if (editMode && addNewMode) return <NewProduct setAddNewStatus={setAddNewMode}/>;
  } 

  return (
    <>
    <header>
      <h1>Manage Products</h1>
    </header>

    <main>
      <div className="edit-buttons-container">
        <button className={toggleEditCancelButtonClass()} onClick={() => toggleEditMode()}>{pageStatus()}</button>
        <button className="new-product" onClick={() => activateNewProduct()}>New</button>
        {saveButton()}
      </div>
      
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

        <tbody className={productTableClass()}>
          { productItem }
          { newProduct() }
        </tbody>
      </table>

    </main>
    
    </>
  
  );
}

export default ProductContainer;

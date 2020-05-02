import React, { useState } from 'react';
import Product from './Product.js';
import EditableProduct from './EditableProduct.js';
import './productContainer.css';
import { isEqual } from "lodash/fp";


function ProductContainer({ products }) {

  // console.log("container products " + products)
  const [editMode, setEditMode] = useState(false)

  const [changesToBeSubmitted, setchangesToBeSubmitted] = useState([])


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
  // 
  const handleUpdatedProduct = (itemToBeCompared) => {

    // if (!isDifferentToDBProduct(itemToBeCompared)) {
    //   console.log("It's the same as the database version");
    // }

    console.log(isEqualToDBProduct(itemToBeCompared));
    return;

    if (!isInChangesToBeSubmitted(itemToBeCompared)) {
      console.log("not In Changes To Be Submitted")
    }
    // push it into changes to be changesToBeSubmitted

    if (isDifferentFromChangesToBeSubmittedVersion(itemToBeCompared)) {
      console.log("it's in changes and it has extra edit")
    }

    return;
  }

  const productItem = products.map(product => {
    if (editMode === true) {
      return <EditableProduct key={product.id} product={product} handleUpdatedProduct={handleUpdatedProduct} />
    }
    else {
      return <Product key={product.id} product={product} />
    }
  })

  const pageStatus = () => editMode ? "Cancel" : "Edit"

  const toggleEditMode = () => setEditMode(!editMode)

  return (
    <>
      <h1>I am the product container</h1>
      <p>I will have a list(ul) and each line will be populated with one product item (a li?) from the Product component. Each Product component will use the id to allow you to edit itself from the productcontainer</p>
      <button onClick={() => toggleEditMode()}>{pageStatus()}</button>

      <ul className="products-table">
        {productItem}
      </ul>

    </>
  );
}

export default ProductContainer;

import React, { useState } from 'react';
import ManageProductsHeader from './ManageProductsHeader.js';
import AddProductButton from './button-elements/AddProductButton.js'
import EditAllButton from './button-elements/EditAllButton.js';
import Table from './table-elements/Table.js';

import { isEqual } from "lodash/fp";

function ProductContainer() {

    const [isAddingNew, setIsAddingNew] = useState(false)

    const [changesToBeSubmitted, setchangesToBeSubmitted] = useState([])
    
    const handleClickAddNew = () => setIsAddingNew(!isAddingNew);

    const renderNewProductButton = () => {
      if (!isAddingNew) return <AddProductButton handleClickAddNew={handleClickAddNew}/>
    }
    

//       //BUNDLING AND SENDING OF CHANGES TO DATABASE FOR EDIT MODE (currently a mess)
  
//       // function to check if it's in products -> returns true/false
//     const isEqualToDBProduct = (itemToBeCompared) => {
//         const productInDatabase = products.find(item => item.id === itemToBeCompared.id);
//         console.log(itemToBeCompared)
//         return isEqual(productInDatabase, itemToBeCompared);
//     }

//   //Function to check if it's in changesToBe Submitted -> returns true/false
//     const isInChangesToBeSubmitted = (itemToBeCompared) => {
//         return changesToBeSubmitted.some(item => item.id === itemToBeCompared.id);
//     }

//     const isDifferentFromChangesToBeSubmittedVersion = (itemToBeCompared) => {
//         const currentEditedItem = changesToBeSubmitted.find(item => item.id === itemToBeCompared.id);
//         return isEqual(currentEditedItem, itemToBeCompared);
//     }
  
//     const handleUpdatedProduct = (itemToBeCompared) => {

//     // if (!isDifferentToDBProduct(itemToBeCompared)) {
//     //   console.log("It's the same as the database version");
//     // }

//     console.log(isEqualToDBProduct(itemToBeCompared));
//     return;

//     // if (!isInChangesToBeSubmitted(itemToBeCompared)) {
//     //   console.log("not In Changes To Be Submitted")
//     // }
//     // // push it into changes to be changesToBeSubmitted

//     // if (isDifferentFromChangesToBeSubmittedVersion(itemToBeCompared)) {
//     //   console.log("it's in changes and it has extra edit")
//     // }

//     // return;
//   }

  return (
    <div>
        <ManageProductsHeader/>
        {renderNewProductButton()}
        <Table 
            isAddingNew={ isAddingNew }
            handleClickAddNew={ handleClickAddNew }
        />
    </div>
  );
}

export default ProductContainer;


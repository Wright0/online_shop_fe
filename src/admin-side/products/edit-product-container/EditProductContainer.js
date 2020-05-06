import React, {useState} from 'react';
import EditProductsTable from './EditProductsTable.js';
import EditButtons from './EditButtons.js'
import ManageProductsHeader from '../ManageProductsHeader.js'

import { isEqual } from "lodash/fp";

function EditProductContainer( {products} ) {

    const [isAddingNew, setIsAddingNew] = useState(false)

    const [changesToBeSubmitted, setchangesToBeSubmitted] = useState([])

    const saveNewItem = (newItem) => {
        fetch(`http://localhost:8000/api/products/`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(newItem)
        }).then((response) => console.log(response))
    }

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


  return (
    <div>
        <ManageProductsHeader/>
        <EditButtons/>
        <EditProductsTable 
            products={ products }
            isAddingNew={ isAddingNew }
            setIsAddingNew={ setIsAddingNew }
            saveNewItem={saveNewItem}
        />
    </div>
  );
}

export default EditProductContainer;


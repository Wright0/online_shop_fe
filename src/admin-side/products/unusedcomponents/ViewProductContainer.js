import React from 'react';
import ViewProductsTable from '../unusedcomponents/ViewProductsTable.js/index.js';
import ViewEditButtons from '../button-elements/ViewEditButtons.js'
import ManageProductsHeader from '../ManageProductsHeader.js'

function ViewProductContainer( {products} ) {

  return (
    <div>
        <ManageProductsHeader/>
        <ViewEditButtons/>
        <ViewProductsTable products={ products }/>
    </div>
  );
}

export default ViewProductContainer;


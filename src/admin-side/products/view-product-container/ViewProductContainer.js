import React from 'react';
import ViewProductsTable from './ViewProductsTable.js';
import ViewEditButtons from './ViewEditButtons.js'
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


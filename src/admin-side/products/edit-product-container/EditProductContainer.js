import React from 'react';
import EditProductsTable from './EditProductsTable.js';
import EditButtons from './EditButtons.js'
import ManageProductsHeader from '../ManageProductsHeader.js'

function EditProductContainer( {products} ) {

  return (
    <div>
        <ManageProductsHeader/>
        <EditButtons/>
        <EditProductsTable products={ products }/>
    </div>
  );
}

export default EditProductContainer;


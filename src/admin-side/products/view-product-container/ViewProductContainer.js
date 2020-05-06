import React from 'react';
import ViewProductsTable from './ViewProductsTable.js';

function ViewProductContainer( {products} ) {

  return (
    <div>
      <ViewProductsTable products={ products }/>
    </div>
  );
}

export default ViewProductContainer;


import React, { useState } from 'react';
import ManageProductsHeader from './ManageProductsHeader.js';
import AddProductButton from './button-elements/AddProductButton.js'
import Table from './table-elements/Table.js';

function ProductContainer() {

    const [isAddingNew, setIsAddingNew] = useState(false)
    
    const handleClickAddNew = () => setIsAddingNew(!isAddingNew);

    const renderNewProductButton = () => {
      if (!isAddingNew) return <AddProductButton handleClickAddNew={handleClickAddNew}/>
    }

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


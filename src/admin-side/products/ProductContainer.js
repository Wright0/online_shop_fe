import React, { useState } from 'react';
import ManageProductsHeader from './ManageProductsHeader.js';
import AddProductButton from './button-elements/AddProductButton.js'
import Table from './table-elements/Table.js';
import './ProductContainer.css';

function ProductContainer() {

    const [isAddingNew, setIsAddingNew] = useState(false)
    
    const handleClickAddNew = () => setIsAddingNew(!isAddingNew);

    const renderNewProductButton = () => {
      if (!isAddingNew) return <AddProductButton handleClickAddNew={handleClickAddNew}/>
    }

  return (
    <>
    <section className="productContainerHeader">
      <ManageProductsHeader/>
      {renderNewProductButton()}
    </section>

    <Table 
      isAddingNew={ isAddingNew }
      handleClickAddNew={ handleClickAddNew }
    />
    </>
  );
}

export default ProductContainer;


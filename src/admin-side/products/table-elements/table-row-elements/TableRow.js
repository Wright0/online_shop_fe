import React from 'react';
import EditableProduct from './EditableProduct.js'
import Product from './Product.js'

function TableRows({filteredProducts, setFilteredProducts, editItem, deleteItem}) {

    const toggleEditSetting = (rowProduct) => {
        const newProductList = filteredProducts.map(product => {
            if (product.id === rowProduct.id){
                return {...product, isInEditMode: !product.isInEditMode}
            } else {
                return product;
            }
        })
        setFilteredProducts(newProductList);
    }

    const renderTableRows = filteredProducts.map(product => {
        if (product.isInEditMode) {
            return (
                <EditableProduct 
                    key={product.id} 
                    product={product} 
                    toggleEditSetting={toggleEditSetting}
                    editItem={editItem}
                />
            )
        } else {
            return (
                <Product 
                    key={product.id} 
                    product={product} 
                    toggleEditSetting={toggleEditSetting} 
                    deleteItem={deleteItem}
                />
            ) 
        } 
      })

    return renderTableRows;

}

export default TableRows;

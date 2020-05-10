import React from 'react';
import EditableProduct from './EditableProduct.js'
import Product from './Product.js'

function TableRows({products, setProducts, editItem}) {

    const toggleEditSetting = (rowProduct) => {
        const newProductList = products.map(product => {
            if (product.id === rowProduct.id){
                return {...product, isInEditMode: !product.isInEditMode}
            } else {
                return product;
            }
        })
        setProducts(newProductList);
    }

    const renderTableRows = products.map(product => {
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
            return <Product key={product.id} product={product} toggleEditSetting={toggleEditSetting}/>
        } 
      })

    return renderTableRows;

}

export default TableRows;

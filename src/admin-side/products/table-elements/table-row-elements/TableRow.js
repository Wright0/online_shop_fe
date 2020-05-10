import React, {useState, useEffect} from 'react';
import EditableProduct from './EditableProduct.js'
import Product from './Product.js'

function TableRows() {

    const [products, setProducts] = useState([]);

    const giveProductsEditableMode = (productsList) => {
        const newProducts = productsList.map(product => {
            return {...product, ["isInEditMode"]: false}}
            )
        setProducts(newProducts);
     }

    const getProducts = () => {
        fetch(`http://localhost:8000/api/products`)
        .then(response => response.json())
        .then(productsList => giveProductsEditableMode(productsList))
        .catch(err => console.error)
    }

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

    useEffect( () => {
        getProducts()
    }, [])

    const renderTableRows = products.map(product => {
        if (product.isInEditMode) {
            return (
                <EditableProduct 
                    key={product.id} 
                    product={product} 
                    toggleEditSetting={toggleEditSetting}
                />
            )
        } else {
            return <Product key={product.id} product={product} toggleEditSetting={toggleEditSetting}/>
        } 
      })

    return renderTableRows;

}

export default TableRows;

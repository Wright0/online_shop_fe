import React, {useState, useEffect} from 'react';
import {displayPriceWithDecimals} from '../../shared-logic/PriceDecimalConversionLogic.js';
import './ShoppingCart.css';

function ShoppingCart({shoppingCartItemIds}){

    const [productsInCart, setProductsInCart] = useState([])

    const productUrls = shoppingCartItemIds.map(id => `http://localhost:8000/api/products/${id}/`)

    const getProducts = () => {
        Promise.all(productUrls.map(url => 
            fetch(url)
                .then(response => response.json())
                .catch(err => console.error)
            ))
            .then(products => setProductsInCart(products))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const itemIds = productsInCart.map((product) => {
        return (
            <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>2</td>
                <td>£{displayPriceWithDecimals(product.price)}</td>
                <td>X</td>
            </tr>
        )
    })

    const calculateBasket = () => {
       return productsInCart.reduce((runningTotal, product) => {
            return runningTotal + product.price;
        }, 0)
    }

    if (productsInCart.length === 0) {
        return (
            <>
                <h1>Your cart is empty!</h1>
                <p>Something about keep shopping.</p>
            </>
        )
    }

    if(productsInCart.length >0){
        return (
            <>
            <p> Keep Shopping</p>
                <h1>Cart</h1>
                <table className="cart-items">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemIds}
                    </tbody>
                </table>
                <p>Total: £{displayPriceWithDecimals(calculateBasket())}</p>
            </>
        )
    }


}

export default ShoppingCart
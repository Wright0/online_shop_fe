import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {displayPriceWithDecimals} from '../../shared-logic/PriceDecimalConversionLogic.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShoppingCart.css';

function ShoppingCart({shoppingCartItemIds}){

    const history = useHistory();

    const [productsInCart, setProductsInCart] = useState([])

    const productUrls = shoppingCartItemIds.map(id => `http://localhost:8000/api/products/${id}/`)

    const testProduct = {
        "id":400,
        "product_name": "Banana",
        "category": "fruit",
        "description": "It is yellow and sometimes has a nodemon, dude",
        "image_url": "https://picsum.photos/450/300",
        "price": "350",
        "stock_quantity": "10"
    }

    const testProduct2 = {
        "id":500,
        "product_name": "Banana",
        "category": "fruit",
        "description": "It is yellow and sometimes has a nodemon, dude",
        "image_url": "https://picsum.photos/450/300",
        "price": "350",
        "stock_quantity": "10"
    }

    const getProducts = () => {
        Promise.all(productUrls.map(url => 
            fetch(url)
                .then(response => response.json())
                .catch(err => console.error)
            ))
            .then(products => setProductsInCart([...products, testProduct, testProduct2]))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const itemIds = productsInCart.map((product) => {
        return (
            <tr key={product.id}>
                <td>{product.product_name}</td>
                <td><input type="number" defaultValue="2"/> <button>Update</button></td>
                <td>£{displayPriceWithDecimals(product.price)}</td>
                <td><FontAwesomeIcon icon="times" className="delete-button" onClick={() => console.log("hi")}/></td>
            </tr>
        )
    })

    const calculateBasket = () => {
       return productsInCart.reduce((runningTotal, product) => {
           const priceToInt = parseInt(product.price)
            return runningTotal + priceToInt;
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
            <section className="cart-nav">
                <p onClick={() => history.goBack()}><FontAwesomeIcon icon="chevron-left" /> Go Back</p>
                {/* <Link to="/shop">Keep Shopping</Link> */}
            </section>
           
            <h1 className="cart-title">Cart</h1>
            <section className="table-container">
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

                <p className="total-price">Total: £{displayPriceWithDecimals(calculateBasket())}</p>
            </section>
            
            </>
        )
    }


}

export default ShoppingCart
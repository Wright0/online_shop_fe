import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {displayPriceWithDecimals} from '../../shared-logic/PriceDecimalConversionLogic.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShoppingCart.css';

function ShoppingCart({shoppingCartItemIds}){

    const history = useHistory();

    const [cartItems, setCartItems] = useState([])

    const productUrls = shoppingCartItemIds.map(id => `http://localhost:8000/api/products/${id}/`)

    const cartItem1 = {
        "product": {
            "id":400,
            "product_name": "Banana",
            "category": "fruit",
            "description": "It is yellow and sometimes has a nodemon, dude",
            "image_url": "https://picsum.photos/450/300",
            "price": 350,
            "stock_quantity": 10
        },
        "quantity": 1,
        "price" : 350,
        "total": 350
    }

    const cartItem2 = {
        "product": {
            "id":500,
            "product_name": "Carrot",
            "category": "vegetable",
            "description": "Good for your eyes",
            "image_url": "https://picsum.photos/450/300",
            "price": 900,
            "stock_quantity": 6
        },
        "quantity": 2,
        "price" : 900,
        "total": 1800
    }
    
    const getProducts = () => {
        Promise.all(productUrls.map(url => 
            fetch(url)
                .then(response => response.json())
                .catch(err => console.error)
            ))
            .then(products => setCartItems([...products, cartItem1, cartItem2]))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const calculateBasket = () => {
        return cartItems.reduce((runningTotal, cartItem) => {
             return runningTotal + cartItem.total;
         }, 0)
     }

     const handleQuantityChange = (event, cartItemProductId) => {
         const newQuantity = parseInt(event.target.value)
        const replacementCart = [...cartItems].map(cartItem => {
            if (cartItem.product.id === cartItemProductId){
                cartItem.quantity = newQuantity
                cartItem.total = newQuantity * cartItem.price
                return cartItem
            } else {
                return cartItem
            }
        })
        setCartItems(replacementCart)
     }

    const itemIds = cartItems.map((cartItem) => {
        return (
            <tr key={cartItem.product.id}>
                <td>{cartItem.product.product_name}</td>
                <td><input type="number" defaultValue={cartItem.quantity} onChange={event => handleQuantityChange(event, cartItem.product.id)}/>
                </td>
                <td>£{displayPriceWithDecimals(cartItem.total)}</td>
                <td><FontAwesomeIcon icon="times" className="delete-button" onClick={() => console.log("hi")}/></td>
            </tr>
        )
    })

    if (cartItems.length === 0) {
        return (
            <>
                <h1>Your cart is empty!</h1>
                <p>Something about keep shopping.</p>
            </>
        )
    }

    if(cartItems.length >0){
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
                <button>Update <FontAwesomeIcon icon="sync-alt"/></button>
            </section>
            
            </>
        )
    }


}

export default ShoppingCart
import React, {useState, useEffect} from 'react';
import './ShoppingCart.css';

function ShoppingCart(){

    const cartItem1 = {
        "product": {
            "id":1,
            "product_name": "Banana",
            "category": "fruit",
            "description": "It is yellow and sometimes has a nodemon, dude",
            "image_url": "https://picsum.photos/450/300",
            "price": 350,
            "stock_quantity": 6
        },
        "quantity": 0,
        "price" : 350,
        "total": 350
    }


    const cartItem2 = {
        "product": {
            "id":2,
            "product_name": "Carrot",
            "category": "vegetable",
            "description": "Good for your eyes",
            "image_url": "https://picsum.photos/450/300",
            "price": 900,
            "stock_quantity": 0
        },
        "quantity": 0,
        "price" : 900,
        "total": 1800
    }

    const [cartItems, setCartItems] = useState([cartItem1, cartItem2])

    const CART = {
        KEY: 'CART',
        contents: [],
        init(){
            let _contents = localStorage.getItem(CART.KEY);
            if (_contents){
                CART.contents = JSON.parse(_contents);
            } else {
                CART.contents = [];
                CART.sync();
            }
        },
        sync(){
            let _cart = JSON.stringify(CART.contents);
            localStorage.setItem(CART.KEY, _cart);
        },
        empty() {
            CART.contents = [];
            CART.sync();
        },
        findItem(id){
            return CART.contents.find(cartItem => cartItem.product.id === id)
        },
        increaseItem(id, quantity){
            const itemBeingIncreased = CART.findItem(id);
            itemBeingIncreased.quantity += quantity;
            CART.sync()
        },
        stockCheck(itemId, desiredQuantity){
            const itemInCart = CART.findItem(itemId)
            const stockProduct = cartItems.find(cartItem => cartItem.product.id === itemId)

            if (itemInCart){
                return itemInCart.quantity + desiredQuantity <= stockProduct.product.stock_quantity
            } else {
                return desiredQuantity <= stockProduct.product.stock_quantity
            }
        },
        addItem(id, quantity=1){
            const itemInCart = CART.findItem(id)
            const stockProduct = cartItems.find(cartItem => cartItem.product.id === id)
            const isStockAvailable = CART.stockCheck(id, quantity)

            if (!isStockAvailable){
                alert("That product is either out of stock or there are not enough to fulfil your order. Please decrease the quantity or try again later.")
            } else {
                if (itemInCart && isStockAvailable){
                    CART.increaseItem(id, quantity)
                 } else if (isStockAvailable){
                    stockProduct.quantity = quantity;
                    CART.contents.push(stockProduct)
                    CART.sync()
                }
            }
        }
    }

    useEffect(()=>{
        CART.init()
    }, [])

        return (
            <>
            <button onClick={CART.init}>Click to set cart</button>
            <button onClick={CART.empty}>Click to empty cart</button>
            <button onClick={() => CART.addItem(1, 2)}>Click to Add Item to Cart</button>
            </>
        )

}

export default ShoppingCart
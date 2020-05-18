import React from 'react';
import { Route } from 'react-router-dom';
import ViewProduct from './product-views/ViewProduct.js'
import AllProducts from './product-views/AllProducts.js';
import ShoppingCart from './shopping-cart/ShoppingCart.js'

function CustomerContainer() {

    return (
        <>
            <Route exact path="/shop" render={ () => 
                <AllProducts/>
            }/>

            {/* <Route exact path="/shop/:category" render={ () => 
                <CustomerProductContainer/>
            }/> */}

            <Route exact path="/shop/cart" render={ () => 
                <ShoppingCart/>
            }/>

            <Route exact path="/shop/:category/:id" render={ () => 
                <ViewProduct/>
            }/>
        </>
    )

}

export default CustomerContainer;
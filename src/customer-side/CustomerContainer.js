import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Product from './Product.js'
import Categories from './Categories.js'

// TODO: this needs to be empty, and just renders the customer pages.
function CustomerContainer({ products }) {

console.log(products.length)

  return (
        <div>
          <Switch>
            <Route exact path="/shop" render={ () => 
              <Categories products={ products } />} />

            <Route path="/shop/:productId" render={ () => 
              <Product products={ products } />}
            />
          </Switch>
        </div>
  );
}

export default CustomerContainer;
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductContainer from './ProductContainer.js'
import Categories from './Categories.js'

// TODO: this needs to be empty, and just renders the customer pages.
function CustomerContainer({ products }) {

console.log(products.length)

  return (
        <div>
          <header>I am the customer nav</header>
          <Switch>
            <Route exact path="/shop" render={ () => 
              <Categories products={ products } />} />

            <Route path="/shop/:productId" render={ () => 
              <ProductContainer products={ products } />}
            />
          </Switch>
        </div>
  );
}

export default CustomerContainer;
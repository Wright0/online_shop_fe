import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Orders from './orders/Orders.js'
import Products from './products/Products.js'

function AdminContainer({ products }) {
  return (
    <div>
    <Switch>
      <Route exact path="/admin" render={ () => 
        <Products products={ products } />} />

      <Route path="/admin/orders" render={ () => 
        <Orders products={ products } />}
      />
    </Switch>
    </div>
  );
}

export default AdminContainer;


import React from 'react';
import { Switch, Route } from 'react-router-dom'
import OrderDeliveryContainer from './orders-deliveries/OrderDeliveryContainer.js'
import ProductContainer from './products/ProductContainer.js'
import AdminPortal from './AdminPortal.js'

function AdminContainer({ products }) {
  return (
    <div>
      <header>Manage products | Manage orders and deliveries</header>
    <Switch>
      <Route exact path="/admin" render={ () => 
        <AdminPortal products={ products } />} />

      <Route exact path="/admin/products" render={ () => 
        <ProductContainer products={ products } />} />

        <Route exact path="/admin/products/edit" render={ () => 
        <ProductContainer products={ products } />} />

      <Route path="/admin/orders-and-deliveries" render={ () => 
        <OrderDeliveryContainer products={ products } />}
      />
    </Switch>
    </div>
  );
}

export default AdminContainer;


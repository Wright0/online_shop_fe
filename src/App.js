import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage.js';
import Error404 from './Error404.js';
import ProductContainer from './admin-side/products/ProductContainer.js';
import AdminPortal from './admin-side/AdminPortal.js';
import OrderDeliveryContainer from './admin-side/orders-deliveries/OrderDeliveryContainer.js';
import CustomerContainer from './customer-side/CustomerContainer.js';
import AdminPortalNav from './admin-side/AdminPortalNav.js'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Homepage } />

      <Route exact path="/shop" render={ () => 
          <CustomerContainer/>
      }/>

      <Route exact path="/admin" render={ () =>
        <>
          <AdminPortalNav/>
          <AdminPortal/>
        </>
      }/>

      <Route exact path="/admin/products" render={ () => 
        <>
          <AdminPortalNav/>
          <ProductContainer/>
        </>
      }/>

      <Route exact path="/admin/orders-and-deliveries" render={ () =>
        <>
          <AdminPortalNav/>
          <OrderDeliveryContainer/>
        </>
      }/>

      <Route render={() => <Error404/>} />

    </Switch>
  );
}

export default App;

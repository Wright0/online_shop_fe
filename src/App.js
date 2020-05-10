import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage.js';
import Error404 from './Error404.js';
import ProductContainer from './admin-side/products/ProductContainer.js'

// import CustomerContainer from './customer-side/CustomerContainer.js';
// import AdminPortal from './admin-side/AdminPortal.js';
// import ViewProductContainer from './admin-side/products/button-elements/ViewProductContainer.js'



function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Homepage } />

      {/* <Route exact path="/shop" render={ () => 
          <CustomerContainer products={ products } />
      }/> */}

      {/* <Route exact path="/admin" render={ () => 
        <AdminPortal/>
      }/> */}

      <Route exact path="/admin/products" render={ () => 
        <ProductContainer/>
      }/>

      {/* <Route exact path="/admin/orders-and-deliveries" render={ () => 
        <OrderDeliveryContainer products={ products } />
      }/> */}

      <Route render={() => <Error404/>} />

    </Switch>
  );
}

export default App;

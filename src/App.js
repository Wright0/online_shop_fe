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
import CustomerNav from './customer-side/CustomerNav.js';

function App() {

  return (
    <Switch>
      <Route exact path="/" render={ () => 
        <>
          <CustomerNav/>
          <Homepage/>
        </>
      }/>

      <Route exact path="/shop" render={ () => 
        <>
          <CustomerNav/>
          <CustomerContainer/>
        </>
      }/>

      {/* <Route exact path="/shop/:category" render={ () => 
        <>
          <CustomerNav/>
          <ProductContainer/>
        </>
      }/> */}

      <Route exact path="/shop/:category/:id" render={ () => 
        <>
          <CustomerNav/>
          <ProductContainer/>
        </>
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

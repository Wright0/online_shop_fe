import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage.js';
import Error404 from './Error404.js';

import AdminContainer from './admin-side/AdminContainer.js';
import CustomerContainer from './customer-side/CustomerContainer.js';

import AdminPortalNav from './navigation/AdminPortalNav.js'
import CustomerNav from './navigation/CustomerNav.js';

function App() {

  return (
    <Switch>
      <Route exact path="/" render={ () => 
        <>
          <CustomerNav/>
          <Homepage/>
        </>
      }/>

      <Route path="/shop" render={ () => 
        <>
          <CustomerNav/>
          <CustomerContainer/>
        </>
      }/>

      <Route path="/admin" render={ () =>
        <>
          <AdminPortalNav/>
          <AdminContainer/>
        </>
      }/>

      <Route render={() => <Error404/>} />

    </Switch>
  );
}

export default App;

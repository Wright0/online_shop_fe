import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import CustomerContainer from './customer-side/CustomerContainer.js';
import Homepage from './Homepage.js';
import AdminPortal from './admin-side/AdminPortal.js';
import ViewProductContainer from './admin-side/products/view-product-container/ViewProductContainer.js'
import EditProductContainer from './admin-side/products/edit-product-container/EditProductContainer.js'

function App() {

  const [products, setProducts] = useState([]);

  const getProducts = () => {
      fetch(`http://localhost:8000/api/products`)
      .then(response => response.json())
      .then(productsList => setProducts(productsList))
      .catch(err => console.error)
  }

  useEffect( () => {
      getProducts()
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={ Homepage } />

      <Route exact path="/shop" render={ () => 
          <CustomerContainer products={ products } />
      }/>

      <Route exact path="/admin" render={ () => 
        <AdminPortal products={ products } />
      }/>

      <Route exact path="/admin/products" render={ () => 
        <ViewProductContainer products={ products } />
      }/>

      <Route exact path="/admin/products/edit" render={ () => 
        <EditProductContainer products={ products } />
      }/>

      {/* <Route exact path="/admin/orders-and-deliveries" render={ () => 
        <OrderDeliveryContainer products={ products } />
      }/> */}

    </Switch>
  );
}

export default App;

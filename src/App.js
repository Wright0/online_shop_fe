import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

import CustomerContainer from './customer-side/CustomerContainer.js'
import Homepage from './customer-side/Homepage.js'
import AdminContainer from './admin-side/AdminContainer.js'


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


      <Route path="/shop" render={ () => 
          <CustomerContainer products={ products } />
      }/>

      <Route path="/admin" render={ () => 
          <AdminContainer products={ products } />
      }/>

    </Switch>
  );
}

export default App;

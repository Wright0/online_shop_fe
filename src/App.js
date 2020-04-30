import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import CustomerContainer from './customer-side/CustomerContainer.js'
import Homepage from './customer-side/Homepage.js'
import Product from './customer-side/Product.js'


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
      <Route exact path="/shop/:productId" render={ () => 
          <Product products={ products } />
      }/>

    
    </Switch>
  );
}

export default App;

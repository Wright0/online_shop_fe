import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js'
import './ViewProductsContainer.css'

function ViewProductsContainer() {

  const [products, setProducts] = useState([])

  const getProducts = () => {
    fetch('http://localhost:8000/api/products')
    .then(response => response.json())
    .then(productsList => setProducts(productsList))
    .catch(err => console.error)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const returnProducts = products.map((product) => {
    return <ProductCard key={product.id} product={product}/>
  })

  return (
    <>
    <main>
        <section className="category">
            <h2>Products</h2>

            <section className="products">
            {returnProducts}
            </section>
        </section>   
    </main>
    </>
  );
}

export default ViewProductsContainer;
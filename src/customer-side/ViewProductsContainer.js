import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js'
import FilterSortProducts from '../shared-logic/filter-sort-products/FilterSortProducts.js';
import './ViewProductsContainer.css'

function ViewProductsContainer() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [sortMode, setSortMode] = useState("newToOld")

  const setInitialProducts = (products) => {
    products.sort((a, b) => b.id - a.id)
    setProducts(products);
    setFilteredProducts(products);
  }

  const getProducts = () => {
    fetch('http://localhost:8000/api/products')
    .then(response => response.json())
    .then(productsList => setInitialProducts(productsList))
    .catch(err => console.error)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const categoryTitle = () => {
    if (selectedCategory) {
      return <h2>{selectedCategory}</h2>
    } else {
      return <h2>All Products</h2>
    }
  }

  const returnProducts = filteredProducts.map((product) => {
    return <ProductCard key={product.id} product={product}/>
  })

  return (
    <>
    <main>
        <section className="category">
            {categoryTitle()}
            <FilterSortProducts 
              products={products}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
              setSelectedCategory={setSelectedCategory}
              setSortMode={setSortMode}
              sortMode={sortMode}
            />
            <section className="products"> 
            {returnProducts}
            </section>
        </section>   
    </main>
    </>
  );
}

export default ViewProductsContainer;
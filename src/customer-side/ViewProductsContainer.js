import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js'
import FilterSortProducts from './FilterSortProducts.js';
import './ViewProductsContainer.css'

function ViewProductsContainer() {

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("fruits")
  const [filteredProducts, setFilteredProducts] = useState([])

  const setInitialProducts = (products) => {
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

  const setFilteredProductsAfterSelect = (category) => {
    let filterResult = []
    if(category === "All products"){
      setFilteredProducts(products)
    } else {
      filterResult = products.filter((product) => product.category === category)
      setFilteredProducts(filterResult)
    }
  }

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
              setSelectedCategory={setSelectedCategory}
              setFilteredProductsAfterSelect={setFilteredProductsAfterSelect}
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
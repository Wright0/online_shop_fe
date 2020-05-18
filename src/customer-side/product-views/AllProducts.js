import React from 'react';
import ProductCard from './ProductCard.js'
import FilterSortProducts from '../../shared-logic/filter-sort-products/FilterSortProducts.js';
import './AllProducts.css'

function AllProducts({filteredProducts, products, selectedCategory, sortMode, setFilteredProducts, setSelectedCategory, setSortMode, handleAddToCart}) {

  const categoryTitle = () => {
    if (selectedCategory) {
      return <h2>{selectedCategory}</h2>
    } else {
      return <h2>All Products</h2>
    }
  }

  const returnProducts = filteredProducts.map((product) => {
    return (
      <ProductCard 
        key={product.id} 
        product={product} 
        handleAddToCart={handleAddToCart}
      />
    )
  })

  return (
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
  );
}

export default AllProducts;
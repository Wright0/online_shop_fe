import React, {useEffect} from 'react';
import './FilterSortProducts.css'
import {filterProductsByCategory, sortProducts, returnFilterCategory, returnSortMethod} from '../shared-logic/FilterSortLogic.js';

function FilterSortProducts({products, filteredProducts, setFilteredProducts, setSelectedCategory, setSortMode, sortMode}){

    const persistSort = (sortMode, newlyFilteredProducts) => {
      const sortedProducts = sortProducts(sortMode, newlyFilteredProducts);
      setFilteredProducts(sortedProducts);
    }

    const handleCategoryChange = (event, products) => {
      const filteredResults = filterProductsByCategory(event.target.value, products)
      setFilteredProducts(filteredResults)
      setSelectedCategory(returnFilterCategory(event))
      persistSort(sortMode, filteredResults)
    }

    const handleSort = (event, products) => {
      const sortedProducts = sortProducts(event.target.value, products);
      setFilteredProducts(sortedProducts);
      setSortMode(returnSortMethod(event))
    }

    return (
        <section className="filtering">
              <div>
                <p>Filter By Category:</p>
                <select onChange={(e) => handleCategoryChange(e, products)}>
                    <option value="All products">All products</option>
                    <option value="fruit">fruit</option>
                    <option value="dairy">dairy</option>
                    <option value="wheat">wheat</option>
                </select>
              </div>
              <div>
              <p>Sort by -</p>
              <select onChange={(e) => handleSort(e, filteredProducts)}>
                <option value="newToOld" default>Most Recently Added</option>
                <option value="lowToHigh">Price (low to high)</option>
                <option value="highToLow">Price (high to low)</option>
              </select>
              </div>
        </section>
    )
}

export default FilterSortProducts
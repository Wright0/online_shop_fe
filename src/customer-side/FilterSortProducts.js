import React from 'react';
import './FilterSortProducts.css'

function FilterSortProducts({setSelectedCategory, setFilteredProductsAfterSelect}){

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value)
        setFilteredProductsAfterSelect(event.target.value)
    }

    return (
        <section className="filtering">
              <div>
                <p>Filter By Category:</p>
                <select onChange={(e) => handleCategoryChange(e)}>
                    <option>All products</option>
                    <option>fruit</option>
                    <option>dairy</option>
                    <option>wheat</option>
                </select>
              </div>
              <div>
              <p>Sort by -</p>
              <select>
                <option>Price (low to high)
                </option>
                <option>Price (high to low)</option>
              </select>
              </div>
              
            </section>
    )
}

export default FilterSortProducts
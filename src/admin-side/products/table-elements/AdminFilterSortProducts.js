import React from 'react';
import '../../../customer-side/FilterSortProducts.css'

function AdminFilterSortProducts({setSelectedCategory, setFilteredProductsAfterSelect, sortProducts}){

    const handleCategoryChange = (event) => {
        setFilteredProductsAfterSelect(event.target.value)
    }

    const handleSort = (event) => {
      sortProducts(event.target.value)
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
              <select onChange={(e) => handleSort(e)}>
                <option>Most Recently Added</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
              </select>
              </div>
        </section>
    )
}

export default AdminFilterSortProducts
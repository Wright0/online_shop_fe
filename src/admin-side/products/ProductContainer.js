import React, {useState} from 'react';
import Product from './Product.js';
import EditableProduct from './EditableProduct.js';
import './productContainer.css';


function ProductContainer({ products }) {

  // console.log("container products " + products)
  const [editMode, setEditMode] = useState(false)

  const productItem = products.map(product => {    
    if(editMode === true) {
      return <EditableProduct key={product.id} product={product} />
    }
    else {
      return <Product key={product.id} product={product} />
    }
  })

  const pageStatus = () => editMode ? "Cancel" : "Edit"

  const toggleEditMode = () => setEditMode(!editMode)

  return (
    <>
      <h1>I am the product container</h1>
      <p>I will have a list(ul) and each line will be populated with one product item (a li?) from the Product component. Each Product component will use the id to allow you to edit itself from the productcontainer</p>
      <button onClick={() => toggleEditMode()}>{pageStatus()}</button>
      
      <ul className="products-table">
        {productItem}
      </ul>

    </>
  );
}

export default ProductContainer;

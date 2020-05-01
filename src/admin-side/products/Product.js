import React, {useState} from 'react';
import './products.css';

function Product({ product }) {

  // state -> object with changes which is sent as a json in the post request.

  const [productToUpdate, setProductToUpdate] = useState({product})

  // post request function which is fired onClick of save button on the line
  
  const saveProductEdits = () => {

    return console.log("hi")
  }

  const updateStock = (changeValue) => {
    // editedValue = productToUpdate[stock_quantity] + changeValue
    // setProductToUpdate(stock_quantity + changeValue)
  }

  return (
    <li key={product.id}>
      <ul className="product-information">
        <li>
          {product.id}
        </li>
        <li>
          {product.image_url}
        </li>
        <li>
          {product.product_name}
        </li>
        <li>
          {product.description}
        </li>
        <li class="clicked">
          {/* <input>     
            {product.price}
          </input> */}
     
        </li>
        <li>
          <button onClick={() => setProductToUpdate(productToUpdate.stock_quantity -1)}>-</button>
          {product.stock_quantity}
          <button onClick={() => setProductToUpdate(productToUpdate.stock_quantity +1)}>+</button>
        </li>
        <li>
          <button onClick={saveProductEdits}>save</button>
        </li>
      </ul>
    </li>
  );
}

export default Product;

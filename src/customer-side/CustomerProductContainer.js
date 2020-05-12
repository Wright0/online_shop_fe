import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import './CustomerProductContainer.css';


function ViewProductsContainer() {

    // This is for when we implement the GET for the product
    // let { productId } = useParams()

    const [product, setProduct] = useState(
      {"product_name": "Banana",
      "category": "fruit",
      "description": "It is yellow and sometimes has a nodemon, dude",
      "image_url": "google.com",
      "price": "3.00",
      "stock_quantity": "10"}
    )

  return (
    <article className="product-info">
      <div className="product-image">
        <img src="https://picsum.photos/450/300" alt="product"/>
      </div>

      <section>
        <h2>{product.product_name}</h2>
        <p>{product.description}</p>

        <div className="order-info-buttons">
          <p>£{product.price}</p>
          <p>{product.stock_quantity} items left</p>
          <input type="number" default value="1"/>
          <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
        <p>Before you order, please read the delivery information.</p>
      </section>

    </article>
    
  );
}

export default ViewProductsContainer;

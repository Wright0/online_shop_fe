import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ViewProduct.css';
import {displayPriceWithDecimals} from '../../shared-logic/PriceDecimalConversionLogic.js';


function ViewProductsContainer({handleAddToCart}) {

    const urlParams = useParams();
    const history = useHistory();

    const [product, setProduct] = useState({})

    const getProduct = () => {
      fetch(`http://localhost:8000/api/products/${urlParams.id}/`)
      .then(response => response.json())
      .then(product => setProduct(product))
      .catch(err => console.error)
    }

    useEffect(() => {
      getProduct()
    }, [])

  return (
    <>
    <article className="product-info">
      <div className="product-image">
        <img src="https://picsum.photos/450/300" alt="product"/>
      </div>

      <section>
        <h2>{product.product_name}</h2>
        <p>{product.description}</p>

        <div className="order-info-buttons">
          <p>£{displayPriceWithDecimals(product.price)}</p>
          <p>{product.stock_quantity} items left</p>
          <input type="number" defaultValue="1"/>
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart <FontAwesomeIcon icon="shopping-cart" /></button>
        </div>
        <p>Before you order, please read the delivery information.</p>
      </section>
    </article>

    <p className="product-page-back" onClick={() => history.goBack()}> <FontAwesomeIcon icon="chevron-left" /> Go back</p>
    </>
    
  );
}

export default ViewProductsContainer;

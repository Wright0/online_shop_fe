import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { displayPriceWithDecimals } from '../../shared-logic/PriceDecimalConversionLogic.js';
import './ProductCard.css';

function ProductCard({product, handleAddToCart}) {
    
    return (
        <article>
            <h3>{product.product_name}</h3>
            <Link to={`/shop/${product.category}/${product.id}`}><img src={product.image_url} alt={product.product_name}/></Link>
            <p>£{displayPriceWithDecimals(product.price)}</p>
            <section className="add-to-cart">
            <input type="number" defaultValue="1"/>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </section>
        </article>
    )

}

export default ProductCard;
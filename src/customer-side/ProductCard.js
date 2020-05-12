import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

function ProductCard({product}) {
    
    return (
        <article>
            <h3>{product.product_name}</h3>
            <img src={product.image_url} alt={product.product_name}/>
            <p>£{product.price}</p>
            <section className="add-to-cart">
            <input type="number" defaultValue="1"/>
            <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </section>
        </article>
    )

}

export default ProductCard;
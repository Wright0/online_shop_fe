import React from 'react';
import './ViewProductsContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

function ViewProductsContainer() {

  return (
    <>
    <main>
        <section className="category">
            <h2>Products</h2>

            <section className="products">
                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                  <section className="add-to-cart">
                    <input type="number" default value="1"/>
                    <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </section>
                </article>

                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                  <section className="add-to-cart">
                    <input type="number" default value="1"/>
                    <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </section>
                </article>

                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                  <section className="add-to-cart">
                    <input type="number" default value="1"/>
                    <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </section>
                </article>

                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                  <section className="add-to-cart">
                    <input type="number" default value="1"/>
                    <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </section>
                </article>

                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                  <section className="add-to-cart">
                    <input type="number" default value="1"/>
                    <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                  </section>
                </article>


            </section>
        </section>   
    </main>
    </>
  );
}

export default ViewProductsContainer;
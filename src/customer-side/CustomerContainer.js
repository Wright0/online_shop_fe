import React from 'react';
import './CustomerContainer.css'

function CustomerContainer() {

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
                </article>

                <article>
                  <h3>Aloe Vera</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                </article>

                <article>
                  <h3>String of Hearts</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                </article>

                <article>
                  <h3>Monstera Deliciosa</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                </article>

                <article>
                  <h3>Aloe Vera</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                </article>

                <article>
                  <h3>String of Hearts</h3>
                  <img src="https://picsum.photos/300/200" alt="product"/>
                  <p>22.95£</p>
                </article>

            </section>
        </section>   
    </main>
    </>
  );
}

export default CustomerContainer;

//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                   <a href="url.com">More information >></a>

//                   <section>
//                     <p>22.95</p>
//                     <input type="number" default value="1"/>
//                     <button>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
//                   </section> 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
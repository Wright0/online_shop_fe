import React from 'react';
// import { Switch, Route } from 'react-router-dom'
// import ProductContainer from './ProductContainer.js'
// import Categories from './Categories.js'
import './CustomerContainer.css'

// TODO: this needs to be empty, and just renders the customer pages.
function CustomerContainer() {

  return (
    <>
    <header>
        <div class="nav-section">
            <nav class="customer-shop-nav">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Categories">Categories</a></li>
                </ul>
            </nav>
            <section>
                <a href="#shoppingCart">Cart <i class="fas fa-shopping-cart"></i></a>
            </section>
        </div>
        <h1>Grow Urban</h1>
    </header>

    <main>
        <section className="category">
            <h2>Category Name</h2>

            <section className="products">

                <article>
                  <section>
                    <h2>Monstera Deliciosa</h2>
                  </section>

                  <img src="https://picsum.photos/200/200" alt="product"/>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="url.com">More information >></a>

                  <section>
                    <p>22.95</p>
                    <input type="number" default value="1"/>
                    <button>Add to Cart <i class="fas fa-shopping-cart"></i></button>
                  </section>

                </article>

                <article>
                <h2>Variegated Sanseveria</h2>
                  <section>
                  <img src="https://picsum.photos/200/200" alt="product"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                  <p>12.99</p>
                  <section>
                    <input type="number" default value="1"/>
                    <button>Add to Cart <i class="fas fa-shopping-cart"></i></button>
                  </section>
                </article>

                <article>
                  <section class="product-title-zone">
                    <h2>Aloe Vera</h2>
                  </section>
                    <img src="https://picsum.photos/200/200" alt="product"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>17.50</p>
                    <section>
                      <input type="number" default value="1"/>
                      <button>Add to Cart <i class="fas fa-shopping-cart"></i></button>
                  </section>
                </article>
                <article>
                    <h2>Dracaena Marginata</h2>
                    <img src="https://picsum.photos/200/200" alt="product"/>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>15.50</p>
                    <section>
                      <input type="number" default value="1"/>
                      <button>Add to Cart <i class="fas fa-shopping-cart"></i></button>
                  </section>
                </article>

            </section>
        </section>   
    </main>
    </>
  );
}

export default CustomerContainer;
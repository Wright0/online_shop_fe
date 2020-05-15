import React from 'react';
import {Link} from 'react-router-dom';
import '../NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

function CustomerNav() {

return (
    <header>
        <div className="nav-section">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
            <section>

                <Link to="/shop/cart">Cart <FontAwesomeIcon icon={faShoppingCart} /></Link>
            </section>
        </div>
        <h1>Grow Urban</h1>
    </header>
)
}

export default CustomerNav;
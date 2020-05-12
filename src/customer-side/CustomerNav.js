import React from 'react';
import {Link} from 'react-router-dom';
import '../NavBar.css';

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
                <a href="#shoppingCart">Cart <i className="fas fa-shopping-cart"></i></a>
            </section>
        </div>
        <h1>Grow Urban</h1>
    </header>
)
}

export default CustomerNav;
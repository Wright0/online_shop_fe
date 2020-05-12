import React from 'react';
import { Link } from 'react-router-dom'
import '../NavBar.css'

function AdminPortalNav() {
  return (

    <header>
        <div className="nav-section">
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Admin Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders-and-deliveries">Orders &amp; Deliveries</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <p className="login"><Link to="/">Logout</Link></p>
            </section>
        </div>
    </header>

  );
}

export default AdminPortalNav;

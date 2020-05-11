import React from 'react';
import { Link } from 'react-router-dom'
import './AdminPortalNav.css'

function AdminPortalNav() {
  return (
      <div className="admin-nav">
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
        
        <p className="login"><Link to="/">Logout</Link></p>
      </div>
    

  );
}

export default AdminPortalNav;

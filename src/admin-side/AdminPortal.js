import React from 'react';
import { Link } from 'react-router-dom'

function AdminPortal() {
  return (
    <>
    
    <h1>I am the landing admin portal</h1>
    <p>This section will have something that allows you to edit shop information. Also maybe links to download pdf tutorials? Open video tutorials? Idk.</p>
    <Link to="/admin/products"><p>Go to the manage products page</p></Link>
    <Link to="/admin/orders-and-deliveries"><p>Go to the manage orders and deliveries page</p></Link>
    </>
  );
}

export default AdminPortal;

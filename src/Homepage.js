import React from 'react';
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <>
    <Link to="/shop"><p>Go to shop</p></Link>
    <Link to="/admin"><p>Go to admin portal</p></Link>
    <h1>Homepage! Tell us about your shop, where you deliver, contact info, opening hours, etc</h1>
    </>
  );
}

export default Homepage;

import React from 'react';
import {Link} from 'react-router-dom';

import './EditButtons.css'

function ViewEditButtons() {

  return (
    <div className="edit-buttons-container">
      <Link to="/admin/products/edit">
        <button className="edit-product">Edit</button>
      </Link>
      
      <Link to="/admin/products/edit">
        <button className="new-product">New</button>
      </Link> 
    </div>
  );
}

export default ViewEditButtons;




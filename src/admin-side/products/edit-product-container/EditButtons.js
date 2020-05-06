import React from 'react';
import {Link} from 'react-router-dom';

function EditButtons() {

  return (
    <div className="edit-buttons-container">
      <Link to="/admin/products">
      <button className="cancel-product">Cancel</button>
      </Link>
        <button className="new-product">New</button>
        <button className="save-product">Save</button>
    </div>
  );
}

export default EditButtons;




import React from 'react';
import {Link} from 'react-router-dom';

function EditButtons({handleClickAddNew}) {

  return (
    <div className="edit-buttons-container">
      <Link to="/admin/products">
        <button className="cancel-product">Cancel</button>
      </Link>
        <button className="new-product" onClick={handleClickAddNew}>New</button>
        <button className="save-product">Save</button>
    </div>
  );
}

export default EditButtons;




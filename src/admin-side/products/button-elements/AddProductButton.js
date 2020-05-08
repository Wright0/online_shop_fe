import React from 'react';
import './AddProductButton.css';

function EditButtons({handleClickAddNew}) {

  return (
    <button className="new-product" onClick={handleClickAddNew}>New</button>
  );
}

export default EditButtons;




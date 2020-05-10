import React from 'react';
import './Buttons.css';

function AddProductButtons({handleClickAddNew}) {

  return (
    <button className="new-product" onClick={handleClickAddNew}>New</button>
  );
}

export default AddProductButtons;




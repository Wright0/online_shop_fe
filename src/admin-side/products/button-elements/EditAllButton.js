import React from 'react';
import './Buttons.css';

function EditAllButtons({handleClickEditAll}) {

  return (
    <button className="edit-all" onClick={handleClickEditAll}>Edit All</button>
  );
}

export default EditAllButtons;




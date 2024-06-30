import React from 'react'

function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick }) {
  return isEditing ? (
    <td>
        <button onClick={onSaveClick}>Save</button>
    </td>
  ) : (
    <td>
        <button onClick={onEditClick}>Edit</button>
    </td>
  );
}

export default EditableRowModeButtons;
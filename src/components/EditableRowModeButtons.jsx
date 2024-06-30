import React from 'react'

function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick, onDeleteClick }) {
  return isEditing ? (
    <td>
        <button onClick={onSaveClick}>Save</button>
    </td>
  ) : (
    <td>
        <button onClick={onDeleteClick}>Del</button>
        <button onClick={onEditClick}>Edit</button>
    </td>
  );
}

export default EditableRowModeButtons;
import React from 'react'

function EditableRowDeleteButton({ onDeleteClick, isEditing, onSaveClick }) {
  return isEditing ? (
    <td>
    <button onClick={onSaveClick}>Save</button>
</td>
) : (
    <td>
        <button onClick={onDeleteClick}>Del</button>
    </td>
  )
}

export default EditableRowDeleteButton
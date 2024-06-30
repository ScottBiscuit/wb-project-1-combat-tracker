import React from 'react'

function EditableNameCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <td>
        <input 
        type="text" 
        value={value}
        onChange={(e) => onValueChange(e.target.value)} 
        />
    </td>
  ) : (
    <td>{value}</td>
  );
}

export default EditableNameCell
import React from 'react'

function EditableInitiativeCell({ value, isEditing }) {
  return isEditing ? (
    <td>
        <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}

export default EditableInitiativeCell
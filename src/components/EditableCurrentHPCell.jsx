import React from 'react'

function EditableCurrentHPCell({ value, isEditing }) {
  return isEditing ? (
    <td>
        <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}

export default EditableCurrentHPCell
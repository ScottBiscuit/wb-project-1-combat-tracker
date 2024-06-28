import React from 'react'

function EditableMaxHPCell({ value, isEditing }) {
  return isEditing ? (
    <td>
        <input type="text" value={value} />
    </td>
  ) : (
    <td>{value}</td>
  );
}

export default EditableMaxHPCell
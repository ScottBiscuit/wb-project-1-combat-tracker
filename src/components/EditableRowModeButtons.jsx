import React from 'react'

function EditableRowModeButtons({ isEditing }) {
  return isEditing ? (
    <td>
        <button>Save</button>
    </td>
  ) : (
    <td>
        <button>Del</button>
        <button>Edit</button>
    </td>
  );
}

export default EditableRowModeButtons
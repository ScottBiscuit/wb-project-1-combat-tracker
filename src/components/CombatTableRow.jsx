import React from 'react'
import EditableInitiativeCell from './EditableInitiativeCell';
import EditableNameCell from './EditableNameCell'
import EditableArmorCell from './EditableArmorCell';
import EditableCurrentHPCell from './EditableCurrentHPCell';
import EditableMaxHPCell from './EditableMaxHPCell'
import EditableRowModeButtons from './EditableRowModeButtons';


function CombatTableRow({ initialCombatData, initialIsEditing }) {
    const { initiative, name, armor, currentHP, maxHP } = initialCombatData;

  return (
    <tr>
        <EditableInitiativeCell value={initiative} isEditing={initialIsEditing} />
        <EditableNameCell value={name} isEditing={initialIsEditing} />
        <EditableArmorCell value={armor} isEditing={initialIsEditing} />
        <EditableCurrentHPCell value={currentHP} isEditing={initialIsEditing} />
        <EditableMaxHPCell value={maxHP} isEditing={initialIsEditing} />
        <EditableRowModeButtons isEditing={initialIsEditing} />
    </tr>
  );
}

export default CombatTableRow
import React, {useState} from 'react'
import EditableRowModeButtons from './EditableRowModeButtons';
import EditableInitiativeCell from './EditableInitiativeCell';
import EditableNameCell from './EditableNameCell'
import EditableArmorCell from './EditableArmorCell';
import EditableCurrentHPCell from './EditableCurrentHPCell';
import EditableMaxHPCell from './EditableMaxHPCell'


function CombatTableRow({ initialCombatData, initialIsEditing, onDeleteRow }) {
    const [isEditing, setIsEditing] = useState(initialIsEditing);
    
    const [initiative, setInitiative] = useState(initialCombatData.initiative);
    const [name, setName] = useState(initialCombatData.name);
    const [armor, setArmor] = useState(initialCombatData.armor);
    const [currentHP, setCurrentHP] = useState(initialCombatData.currentHP);
    const [maxHP, setMaxHP] = useState(initialCombatData.maxHP)

    const setEditMode = () => setIsEditing(true);
    const setNormalMode = () => setIsEditing(false);

  return (
    <tr>
        <EditableInitiativeCell 
        value={initiative} 
        isEditing={isEditing}
        onValueChange={setInitiative} 
        />
        <EditableNameCell 
        value={name} 
        isEditing={isEditing}
        onValueChange={setName} 
        />
        <EditableArmorCell 
        value={armor} 
        isEditing={isEditing}
        onValueChange={setArmor}  
        />
        <EditableCurrentHPCell 
        value={currentHP} 
        isEditing={isEditing}
        onValueChange={setCurrentHP}  
        />
        <EditableMaxHPCell 
        value={maxHP} 
        isEditing={isEditing}
        onValueChange={setMaxHP}  
        />
        <EditableRowModeButtons 
        isEditing={isEditing} 
        onEditClick={setEditMode}
        onSaveClick={setNormalMode}
        onDeleteClick={onDeleteRow}
        />
    </tr>
  );
}

export default CombatTableRow;
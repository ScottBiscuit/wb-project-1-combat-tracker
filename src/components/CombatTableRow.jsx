import axios from 'axios';
import React, {useState} from 'react'
import EditableRowModeButtons from './EditableRowModeButtons';
import EditableInitiativeCell from './EditableInitiativeCell';
import EditableNameCell from './EditableNameCell'
import EditableArmorCell from './EditableArmorCell';
import EditableCurrentHPCell from './EditableCurrentHPCell';
import EditableMaxHPCell from './EditableMaxHPCell'
import EditableRowDeleteButton from './EditableRowDeleteButton';


function CombatTableRow({ initialCombatData, initialIsEditing, onDeleteRow }) {
    const [isEditing, setIsEditing] = useState(initialIsEditing);
    
    const [initiative, setInitiative] = useState(initialCombatData.initiative);
    const [name, setName] = useState(initialCombatData.name);
    const [armor, setArmor] = useState(initialCombatData.armor);
    const [currentHP, setCurrentHP] = useState(initialCombatData.currentHP);
    const [maxHP, setMaxHP] = useState(initialCombatData.maxHP)

    const setEditMode = () => setIsEditing(true);
    const setNormalMode = async () => {
        const { data } = await axios.put(`/api/combat/${initialCombatData.id}`, {
            initiative,
            name,
            armor,
            currentHP,
            maxHP,
        });
        if (!data.error) {
            setInitiative(data.initiative);
            setName(data.name);
            setArmor(data.armor);
            setCurrentHP(data.currentHP);
            setMaxHP(data.maxHP);
        }
        setIsEditing(false);
    };

  return (
    <tr>
        <EditableRowDeleteButton 
        onDeleteClick={onDeleteRow}
        isEditing={isEditing}
        onSaveClick={setNormalMode}
        />
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

        />
    </tr>
  );
}

export default CombatTableRow;
import React from 'react';
import EditableInitiativeCell from './EditableInitiativeCell';
import EditableNameCell from './EditableNameCell'
import EditableArmorCell from './EditableArmorCell';
import EditableCurrentHPCell from './EditableCurrentHPCell';
import EditableMaxHPCell from './EditableMaxHPCell'
import EditableRowModeButtons from './EditableRowModeButtons';
import CombatTableHeader from './CombatTableHeader';
import CombatTableAddHeroButton from './CombatTableAddHeroButton';
import CombatTableAddVillainButton from './CombatTableAddVillainButton';



function CombatTable() {
  return (
    <table>
        <thead>
            <CombatTableHeader />
        </thead>
        <tbody>
            <tr>
                <EditableInitiativeCell value={20} isEditing={false} />
                <EditableNameCell value="Macho Man" isEditing={false} />
                <EditableArmorCell value={18} isEditing={false} />
                <EditableCurrentHPCell value={33} isEditing={false} />
                <EditableMaxHPCell value={40} isEditing={false} />
                <EditableRowModeButtons isEditing={false} />
            </tr>

            <tr>
                <EditableInitiativeCell value={16} isEditing={true} />
                <EditableNameCell value="Big Boss Man" isEditing={true} />
                <EditableArmorCell value={13} isEditing={true} />
                <EditableCurrentHPCell value={30} isEditing={true} />
                <EditableMaxHPCell value={35} isEditing={true} />
                <EditableRowModeButtons isEditing={true} />
            </tr>
        </tbody>
        <tfoot>
            <CombatTableAddHeroButton />
            <CombatTableAddVillainButton />
        </tfoot>
    </table>
  )
}

export default CombatTable
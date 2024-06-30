import React, { useState } from 'react';
import CombatTableRow from './CombatTableRow';
import CombatTableHeader from './CombatTableHeader';
import CombatTableAddHeroButton from './CombatTableAddHeroButton';
import CombatTableAddVillainButton from './CombatTableAddVillainButton';
import generateId from '../utils/idGenerator.js';

function CombatTable({initialCombatList}) {
    const [combatList, setCombatList] = useState(initialCombatList);

    const addCombatRow = () => {
        const newCombatList = [...combatList];
        newCombatList.push({
            id: generateId(),
            initiative: '',
            name: 'Name',
            armor: '',
            currentHP: '',
            maxHP: '',
            isEditing: true,
        });
        setCombatList(newCombatList);
    };

    const deleteCombatRow = (id) => {
        const newCombatList = [...combatList];
        const index = newCombatList.findIndex((combat) => combat.id === id);
        newCombatList.splice(index, 1);
        setCombatList(newCombatList);
    }

    const rows = combatList.map(({ id, initiative, name, armor, currentHP, maxHP, isEditing}) => (
            <CombatTableRow 
            key={id}
            initialCombatData={{initiative, name, armor, currentHP, maxHP}}
            initialIsEditing={isEditing}
            onDeleteRow={() => deleteCombatRow(id)}
            />
        ));

  return (
    <table>
        <thead>
            <CombatTableHeader />
        </thead>
        <tbody>
            {rows}
        </tbody>
        <tfoot>
            <CombatTableAddHeroButton onClick={addCombatRow} />
            <CombatTableAddVillainButton onClick={addCombatRow} />
        </tfoot>
    </table>
  );
}

export default CombatTable
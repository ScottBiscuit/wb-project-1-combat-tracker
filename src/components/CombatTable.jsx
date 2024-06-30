import React, { useState } from 'react';
import CombatTableRow from './CombatTableRow';
import CombatTableHeader from './CombatTableHeader';
import CombatTableAddHeroButton from './CombatTableAddHeroButton';
import CombatTableAddVillainButton from './CombatTableAddVillainButton';
import generateId from '../utils/idGenerator.js';
import axios from 'axios';

function CombatTable({initialCombatList}) {
    const [combatList, setCombatList] = useState(initialCombatList);

    const addCombatRow = async (id) => {
      const { data } = await axios.post('/api/combat', { name: 'Name' });

      const newCombat = { ...data, isEditing: true };
      setCombatList([...combatList, newCombat]);
    };

    const deleteCombatRow = async (id) => {
        const { data } = await axios.delete(`/api/combat/${id}/delete`);

        if (!data.error) {
            const newCombatList = [...combatList];

            const index = newCombatList.findIndex((combat) => combat.id === data.id);
            newCombatList.splice(index, 1);
            setCombatList(newCombatList);
        }
    };

    const rows = combatList.map(({ id, initiative, name, armor, currentHP, maxHP, isEditing}) => (
            <CombatTableRow 
            key={id}
            initialCombatData={{id, initiative, name, armor, currentHP, maxHP}}
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
import React, { useState } from 'react';
import CombatTableRow from './CombatTableRow';
import CombatTableHeader from './CombatTableHeader';
import CombatTableAddHeroButton from './CombatTableAddHeroButton';
import CombatTableAddVillainButton from './CombatTableAddVillainButton';
import generateId from '../utils/idGenerator.js';
import axios from 'axios';

function CombatTable({initialCombatList}) {
    const [combatList, setCombatList] = useState(initialCombatList);

    const addCombatRowHero = async (id) => {
      const { data } = await axios.post('/api/combat', { name: 'Hero', hero: true });
      const newCombat = { ...data, isEditing: true };
      setCombatList([...combatList, newCombat]);
    };
      const addCombatRowVillain = async (id) => {
        const { data } = await axios.post('/api/combat', { name: 'Villain', hero: false });

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

    const rows = combatList.map(({ id, initiative, name, armor, currentHP, maxHP, hero, isEditing}) => (
            <CombatTableRow 
            key={id}
            initialCombatData={{id, initiative, name, armor, currentHP, maxHP, hero}}
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
            <tr>
            <CombatTableAddHeroButton onClick={addCombatRowHero} />
            <CombatTableAddVillainButton onClick={addCombatRowVillain} />
            </tr>
        </tfoot>
    </table>
  );
}

export default CombatTable
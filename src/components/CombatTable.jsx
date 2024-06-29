import React from 'react';

import CombatTableHeader from './CombatTableHeader';
import CombatTableRow from './CombatTableRow';
import CombatTableAddHeroButton from './CombatTableAddHeroButton';
import CombatTableAddVillainButton from './CombatTableAddVillainButton';

function CombatTable() {
  return (
    <table>
        <thead>
            <CombatTableHeader />
        </thead>
        <tbody>
            <CombatTableRow 
                initialCombatData={{ initiative: 20, name: 'Macho Man', armor: 18, currentHP: 33, maxHP: 40}}
                initialIsEditing={false}
            />
            <CombatTableRow 
                initialCombatData={{ initiative: 16, name: 'Big Boss Man', armor: 13, currentHP: 30, maxHP: 35}}
                initialIsEditing={true}
            />
        </tbody>
        <tfoot>
            <CombatTableAddHeroButton />
            <CombatTableAddVillainButton />
        </tfoot>
    </table>
  )
}

export default CombatTable
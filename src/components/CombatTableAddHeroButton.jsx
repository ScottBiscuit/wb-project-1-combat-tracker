import React from 'react'

function CombatTableAddHeroButton({ onClick }) {
  return (
        <td colSpan='3'>
            <button id='heroBtn' onClick={onClick}>Add Hero!</button>
        </td>
  );
}

export default CombatTableAddHeroButton
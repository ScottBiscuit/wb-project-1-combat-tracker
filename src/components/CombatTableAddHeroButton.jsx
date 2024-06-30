import React from 'react'

function CombatTableAddHeroButton({ onClick }) {
  return (
        <td colSpan='4' >
            <button id='heroBtn' onClick={onClick}>Add Hero!</button>
        </td>
  );
}

export default CombatTableAddHeroButton
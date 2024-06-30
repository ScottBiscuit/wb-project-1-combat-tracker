import React from 'react'

function CombatTableAddVillainButton({ onClick }) {
  return (
        <td colSpan='3'>
            <button id='villainBtn' onClick={onClick}>Add Villain!</button>
        </td>
  )
}

export default CombatTableAddVillainButton 
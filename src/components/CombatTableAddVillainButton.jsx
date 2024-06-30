import React from 'react'

function CombatTableAddVillainButton({ onClick }) {
  return (
        <td>
            <button id='villainBtn' onClick={onClick}>Add Villain!</button>
        </td>
  )
}

export default CombatTableAddVillainButton 
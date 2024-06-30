import React from 'react'

function CombatTableAddVillainButton({ onClick }) {
  return (
    <tr>
        <td>
            <button onClick={onClick}>Add Villain!</button>
        </td>
    </tr>
  )
}

export default CombatTableAddVillainButton 
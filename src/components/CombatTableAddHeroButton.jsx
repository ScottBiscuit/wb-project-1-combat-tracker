import React from 'react'

function CombatTableAddHeroButton({ onClick }) {
  return (
    <tr>
        <td>
            <button onClick={onClick}>Add Hero!</button>
        </td>
    </tr>
  );
}

export default CombatTableAddHeroButton
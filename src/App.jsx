import { useState } from 'react'
import './App.css'
import CombatTable from './components/CombatTable.jsx'

const TEST_DATA = [
  { id: 0, name: 'Drax', initiative: 22, armor: 18, currentHP: 50, maxHP: 50, hero: true },
  { id: 1, name: 'Gamora', initiative: 18, armor: 15, currentHP: 40, maxHP: 40, hero: true },
  { id: 2, name: 'Rocket', initiative: 1, armor: 13, currentHP: 30, maxHP: 30, hero: true },
  { id: 3, name: 'Star Lord', initiative: 17, armor: 16, currentHP: 35, maxHP: 35, hero: true },
  { id: 4, name: 'Thanos', initiative: 9, armor: 20, currentHP: 150, maxHP: 150, hero: false },
  { id: 5, name: 'Ronan', initiative: 12, armor: 17, currentHP: 75, maxHP: 75, hero: false },
];

function App({ initialCombatList }) {
  return <CombatTable initialCombatList={initialCombatList} />
}

export default App

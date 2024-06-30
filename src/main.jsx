import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

axios.get('/api/combat').then(({ data }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App initialCombatList={data} />
  </React.StrictMode>,
  );
});

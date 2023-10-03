import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../styles/index.css'
import { ProCard } from './ProCard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex" element={<App />} />
        <Route path="/procard" element={<ProCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

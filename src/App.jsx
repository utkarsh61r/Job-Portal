import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/apply" element={<div>Apply</div>} />
        <Route path="/application" element={<div>Application</div>} />
      </Routes>
    </div>
  )
}

export default App

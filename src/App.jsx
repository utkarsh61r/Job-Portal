import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/apply" element={<div>Apply</div>} />
        <Route path="/application" element={<div>Application</div>} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { assets } from '../assets/assets'   

const Navbar = () => {
    console.log('logo path:', assets.logo)
  return (
    <div className="shadow py-4">
      <img
        src={assets.logo}
        alt="logo" />
    
    </div>
  )
}

export default Navbar

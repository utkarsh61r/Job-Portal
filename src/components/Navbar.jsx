import React from 'react'
import { assets } from '../assets/assets'   
import { useClerk,UserButton,useUser } from '@clerk/clerk-react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div className="shadow h-15 flex items-center">
      <div className="container px-6 mx-auto flex justify-between items-center">

       
        <img
          src={assets.logo}
          alt="Job Dekho"
          className="h-14 max-w-[200px] object-contain"
        />

       
        {user ? (
          <div className="flex items-center gap-3 text-sm">
            <Link to="/application">Applied Jobs</Link>
            <span>|</span>
            <span>Hi, {user.firstName} {user.lastName}</span>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 text-sm">
            <button className="text-gray-600">Recruiter Login</button>
            <button
              onClick={openSignIn}
              className="bg-blue-600 text-white px-6 rounded-full"
            >
              Login
            </button>
          </div>
        )}

      </div>
    </div>
  )
}



export default Navbar

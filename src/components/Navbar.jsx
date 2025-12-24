import React from 'react'
import { assets } from '../assets/assets'   
import { useClerk,UserButton,useUser } from '@clerk/clerk-react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
   const { openSignIn } = useClerk()
   const { user } = useUser()




  return (
    <div className="shadow py-4">
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between'>
      <img  src={assets.logo} alt="logo" />
      { user 
      ? <div>
        <Link to={'/application'}>Applied Jobs</Link>
        <p>Hii {user.firstName+" "+user.lastName}</p>
        <UserButton />
      </div> 
      :<div className='flex gap-4 max-sm:text-xs'>
      <button className='text-gray-600'>Recuiter Login</button>
      <button onClick={ e=> openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 rounded-full'>Login</button>
    </div>
    }
    </div>
    </div>
  )
}

export default Navbar

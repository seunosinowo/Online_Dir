import React from 'react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'

const NavBar = () => {
  return (
    <nav className='flex'>
      <div className='bg-black min-w-full'>
        <div className='h-12 flex flex-wrap space-x-[800px] '> 

          <div className='flex flex-wrap mx-8 py-3 space-x-2'>
            <Phone className='text-white font-extralight w-5'/>
            <h3 className='text-white'>Call: +234 8256981690</h3>
          </div>

          <div className='flex flex-wrap space-x-2 mx-8 py-3 justify-end sm:hidden'>
            <Mail className='text-white font-extralight w-5'/>
            <h3 className='text-white'>seun@gmail.com</h3>
          </div>

        </div>
        </div>

    </nav>
  )
}

export default NavBar

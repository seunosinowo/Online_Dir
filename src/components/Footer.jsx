import React from 'react'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex space-x-3'>
      <div className='bg-black w-full flex justify-center'>
        <div className='text-white flex flex-row space-x-2'>
            <Copyright/>
            <p>Osinowo Oluwaseun</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

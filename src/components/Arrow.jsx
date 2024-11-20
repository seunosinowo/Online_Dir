import React from 'react'
import { MoveLeft } from 'lucide-react'
import { MoveRight } from 'lucide-react'

const Arrow = () => {
  return (
    <div className=''>
        <div className='flex flex-row lg:space-x-8 justify-center mb-32'>
            <div className='bg-blue-800 p-2 cursor-pointer'>
                <MoveLeft className='w-7 h-7 text-white' />
            </div>

            <div className='bg-blue-800 p-2 cursor-pointer'>
                <MoveRight className='w-7 h-7 text-white' />
            </div>
            
            
        </div>
    </div>
  )
}

export default Arrow

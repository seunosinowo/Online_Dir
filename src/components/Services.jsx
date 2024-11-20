import React from 'react'
import { Search } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Globe } from 'lucide-react'

const Services = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className=' flex flex-col mt-40'>
        <h1 className='font-bold text-3xl uppercase justify-center mx-auto'>our Services</h1>

            <div className='flex flex-col my-10 w-full md:flex-row gap-4 sm:gap-8 p-12'>
                <div className= 'shadow-2xl w-[85%] h-72 hover:bg-orange-500 hover:text-white transition duration-150 mx:auto p-12 my-auto'>
                    <Search className='flex w-full justify-center h-9'/>
                    <h1 className='text-center mb-8 mt-4 font-bold text-[1.2rem]'>Find What You Need</h1>
                    <p className='text-center'>
                        Quickly find what you need, anytime, anywhere. Your local guide, always ready.
                    </p>
                </div>

                <div className='shadow-2xl w-[85%] h-72 hover:bg-orange-500 hover:text-white transition duration-150 mx:auto p-12 my-auto'>
                    <MapPin className='flex w-full justify-center h-9' />
                    <h1 className='text-center mb-8 mt-4 font-bold text-[1.2rem]'>Discover Your City</h1>
                    <p>
                        Explore your city, one click at a time. Discover local gems and hidden treasures
                    </p>
                </div>

                <div className='shadow-2xl w-[85%] h-72 hover:bg-orange-500 hover:text-white transition duration-150 mx:auto p-12 my-auto'>
                    <Globe className='flex w-full justify-center h-9' />
                    <h1 className='text-center mb-8 mt-4 font-bold text-[1.2rem]'>Connect Locally, Globally</h1>
                    <p>
                    Connect with local businesses, reach a global audience. Your one-stop shop for 
                    local and international connections
                    </p>
                </div>

                
                
            </div>
        </div>
        
    </div>
    
  )
}

export default Services

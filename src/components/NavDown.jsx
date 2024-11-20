import React from 'react'
import logo from '../assets/logo.jpg'
import { useState } from 'react'
import { X, Menu, ArrowUp01, Spline, ShieldAlert } from 'lucide-react'



const NavDown = () => {
   const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

   const toggleBar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen)
   };
    
  return (
    <div className='bg-blue-200 h-[900px]'>
        <div className='flex flex-wrap space-x-[450px]'>
        <h2 className='mx-8 my-8 text-2xl text-blue-700 font-bold flex'>ONLINE DIRECTORIES

            <div className='mx-4 py-1 text-neutral-800 lg:hidden'>
                <button onClick={toggleBar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
                
                {mobileDrawerOpen && (
                <div className='bg-sky-500 flex flex-wrap lg:hiden'>
                    <ul className='fixed right-0 z-20 w-full bg-neutral-700 justify-center items-center'>
                        <li className='grid grid-row-4 text-1xl text-neutral-100 justify-center items-center font-extralight '>
                            <a href='#'>Home</a>
                            <a href='#'>About Us</a>
                            <a href='#'>Services</a>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </h2>

        
            <ul className='hidden text-1xl lg:flex'>
                <li className='space-x-9 my-8 mx-8'>
                    <a href='#'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            
        </div>

        <div className='mx-14 my-32 m-1 lg:grid lg:grid-flow-col md:grid-flow-row'>
            <div className=''>
                <h1 className='text-5xl w-96 font-bold text-blue-500'>Repair and Maintenance Services</h1>
                <p className='w-[550px] mt-8 mb-8 text-neutral-800'>
                Welcome to your ultimate local guide. Our online directory is your one-stop shop for everything your city has to offer. Whether you're a seasoned local or a curious visitor, we've got you covered.
                </p>

                <button className='w-36'>
                    <p className='bg-blue-500 p-2 rounded-md text-neutral-100 justify-center hover:text-blue-500 hover:border border-blue-500 hover:bg-blue-200'>
                    Contact US
                    </p>
                </button>
            </div>

                <div className='mt-3'>
                    <img 
                        src={logo} 
                    />
                </div>

            </div>

            <div className='items-center justify-center mx-40'>
                <div className='lg:flex lg:flex-wrap h-32 space-x-9'>
                    <div className='shadow-sm w-72 h-56 pl-28 py-20 text-gray-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white bg-white hover:transition hover:duration-150'>
                        <ArrowUp01 className='w-14 h-14' />
                        <h2 className='mt-4'>REPAIR</h2>
                    </div>

                    <div className='lg:flex lg:flex-wrap w-72 h-56 pl-28 py-20 bg-orange-500 text-white'>
                        <div className='justify-center items-center'>
                            <Spline className='w-14 h-14 sm:w-[100px]' />
                            <h2 className='mt-4'>IMPROVE</h2>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-wrap w-72 h-56 pl-28 py-20 text-gray-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white bg-white hover:transition hover:duration-150'>
                        <ShieldAlert className='w-14 h-14' />
                        <h2 className='mt-4'>MAINTAIN</h2>
                    </div>
                </div>
            </div>

            

    </div>
            
    
  )
}

export default NavDown

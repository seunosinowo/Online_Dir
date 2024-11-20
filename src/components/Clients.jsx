import React from 'react'
import ball from '../assets/ball.jpeg'
import ee from '../assets/ee.jpeg'
import { FaStar } from 'react-icons/fa'
import { Quote } from 'lucide-react'

const Clients = () => {
  return (
    <div className='flex flex-col mt-52'>
      <div className='flex flex-row w-full justify-center mb-9'>
        <h1 className='font-bold uppercase lg:text-4xl text-3xl'>What out Clients say</h1>
      </div>

      <div className='flex flex-col w-full md:flex-row p-14 h-[400px] lg:space-x-7 space-y-5'>
       

        <div className='shadow-2xl lg:w-1/2 w-full'>
            <div className='px-4 py-4 flex'>
                <img src= {ball} 
                className='w-28 h-28 ml-5 rounded-full' 
                alt = 'Logo1' />

                <div className='my-7'>
                  <h1 className='mx-5'>Seun Osinowo</h1>
                  <div className='flex flex-row mx-5'>
                  {[...Array(5)].map(star => {
                      return (
                        <label className='text-orange-400'>
                            <FaStar size={20}/>
                        </label>
                          
                      );
                  })}
                  </div>
                      <div className='flex justify-end w-80'>
                        <Quote />
                      </div>
                      
                  </div>
            </div>
            <p className='px-10 tracking-tighter'>
                Welcome to Online Directories, your premier destination for finding and connecting with local businesses, services, and professionals. Our comprehensive directory empowers you to discover, review, and contact top-rated providers in your area.
            </p>
        </div>

        <div className='shadow-2xl lg:w-1/2 w-full'>
            <div className='px-4 py-4 flex'>
                <img src= {ee} 
                className='w-28 h-28 ml-5 rounded-full'
                alt = 'Logo2' />

                <div className='my-7'>
                  <h1 className='mx-5'>Joe Rock</h1>
                  <div className='flex flex-row mx-5'>
                    {[...Array(5)].map(star => {
                      return (
                        <label className='text-orange-400'>
                          <FaStar size={20} />
                        </label>
                        
                      );
                    })}
                  </div>
                      <div className='flex justify-end w-80'>
                        <Quote />
                      </div>
                </div>
            </div>
            <p className='px-10 tracking-tighter'>
              Online Directories is your one-stop solution for searching and discovering trusted businesses, organizations, and services. Browse our directory today and connect with the best providers in your community.
            </p>
        </div>
           
        

      </div>

    </div>
  )
}

export default Clients

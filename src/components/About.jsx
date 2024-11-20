import React from 'react'
import logo from '../assets/logo.jpg'

const About = () => {
  return (
    <div className='lg:flex justify-center md:w-full'>
      <div className='mt-23 mx-36 mb-48 lg:w-1/2'>
        <h1 className='mt-56 font-bold mb-8 text-3xl'>About US</h1>
        <p className='mb-4 w-[470px]'>
            There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected humour, 
            or randomisedThere are many variations of passages of Lorem Ipsum available, .
            but the majority have suffered alteration in some form, by injected humour, or randomised
        </p>
        <button className='border border-blue-900 bg-blue-900 text-1xl w-48 h-14 text-white hover:bg-white hover:border-blue-900 hover:text-blue-900'>READ MORE</button>
      </div>

      <div className='lg:w-1/2'>
        <img src={logo} alt ="About Logo" className='mt-23 my-32 mx-0 mb-48 w-[500px]' />
      </div>
    </div>
  )
}

export default About

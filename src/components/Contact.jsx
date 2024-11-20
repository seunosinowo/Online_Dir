import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col px-14 pb-8 mt-8 mb-5'>
            <h1 className='text-3xl uppercase font-bold'>Contact us</h1>
      </div>

      <div className='flex lg:flex-row flex-col px-14 mb-10 lg:space-x-9'>
        <div className='lg:w-1/2 md:w-full space-y-6'>
            <input type='text' name='firstname' placeholder='Name'
            className='p-3 w-full shadow-2xl'
            />

            <input type='text' name='number' placeholder='PhoneNumber'
            className='p-3 w-full shadow-2xl'
            />

            <input type='email' name='email' placeholder='email'
            className='p-3 w-full shadow-2xl'
            />

            <input type='text' name='message' placeholder='Message'
            className='p-3 w-full shadow-2xl h-40'
            />

            <button className='cursor-pointer'>
                <div className='flex bg-blue-800 justify-center items-center h-12 w-32'>
                    <h1 className='flex text-white font-bold uppercase text-1.5xl'>Send</h1>
                </div>
            </button>
            
        </div>

        <div className='lg:w-1/2 w-full mt-8 lg:mt-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070398.208299656!2d3.370672737460776!3d9.006690672252256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1732110884659!5m2!1sen!2sng" width = '450' height = '375' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

        


    </div>
  )
}

export default Contact

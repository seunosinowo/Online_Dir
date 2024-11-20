import gamee from '../assets/gamee.png'

const Provide = () => {
  return (
    <div className='flex flex-col bg-blue-200 lg:flex-row lg:h-[700px] md:h-auto md:w-full items-center'>
        <div className='lg:w-1/2 md:w-3/4'>
            <img src= {gamee} alt = 'logo' className='w-[600px] lg:h-[550px] mt-32 h-[300px]'/>
        </div>

        
        
        <div className='lg:w-1/2 md:w-full lg:mt-48 mt-10 md:ml-0 justify-center items-center'>
        <h1 className='text-3xl font-bold lg:w-1/2 text-blue-900 tracking-wide w-5/6 px-9 lg:px-0'>We Provide Professional Home Services</h1>
        <p className='mt-9 lg:w-4/5 mb-7 lg:px-0 px-9'>
        There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected humour, 
            or randomisedThere are many variations of passages of Lorem Ipsum available, .
            but the majority have suffered alteration in some form, by injected humour, or randomised
        </p>
        <button className='bg-blue-900 p-5 text-white hover:bg-transparent hover:border border-blue-900 hover:text-blue-900 border rounded-md w-60 mx-9 lg:mx-0 lg:mb-0 mb-10'>
            Read more</button>
        </div>

    </div>
  )
}

export default Provide

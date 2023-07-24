import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full h-[25vh] mt-1 text-white text-center'>
        <div className="flex container w-full h-full  mx-auto max-w-6xl ">
            <div className="rounded-2xl w-[95%] h-[80%] m-auto bg-red-500 justify-center">
                <div className="flex flex-col container  w-full h-full  m-auto max-w-3xl ">
                    <span className='text-white font-bold text-3xl text-center w-full mt-auto ' >Subscribe to our newsletters</span>
                        <p className='mx-auto my-2'>Subscribe to get notified on our latest products and offers</p>
                    <div className="flex w-[80%] justify-center px-4  mb-auto mx-auto mt-2">
                    <input className='border w-[80%] text-center p-3  rounded-full text-black outline-red-500' type='email' placeholder='email address'></input>   
                    <button type='submit' className=' mx-2 rounded-full w-[20%] p-2 bg-red-400 text-base text-white hover:bg-red-700'>Submit</button>
                </div> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Newsletter
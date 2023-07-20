import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[20%] bg-slate-100 text-black'>
        <div className=' container w-full h-full flex mx-auto max-w-6xl'>
            <div className="flex flex-col font-medium w-[20%] py-3 text-4xl text-red-500">Webwines</div>    
            <div className="flex flex-col w-[60%]">
                <span className='font-bold text-base text-red-500 pt-2 '>New to webwines?</span>
                <p>Subscribe to get notified on our latest products and offers</p>
                <div className="flex">
                <input className='border w-[250px] p-2 rounded-md outline-red-500' type='email' placeholder='email address'></input>   
                    <button type='submit' className='ms-3 border rounded-md p-2 hover:border-red-500 hover:text-red-500'>Submit</button>
                </div> 
            </div>    
            <div className="flex flex-col">
            <span className='font-bold text-base text-red-500 pt-2 '>Get webwines</span>
            <div className="flex ">
                <img className='w-[100px] h-[50px] m-1' src="appstore.png" alt="" />
                <img className='w-[100px] h-[50px] m-1' src="googleplay.png" alt="" />
            </div>
            </div>    
        </div>    
    </div>

  )
}

export default Contact
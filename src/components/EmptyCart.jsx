import React from 'react'

const EmptyCart = () => {
  return (
    <div className='w-full container flex flex-col mx-auto h-[60vh] p-2 max-w-6xl'>
        <div className="flex flex-col w-full h-full m-auto justify-center items-center ">
        <span className='text-red-500 font-semibold text-3xl text-center  m-2'>Your cart is empty</span>
         <button className='bg-red-500 w-[200px]  text-2xl border rounded-full m-2 p-2 text-white  hover:bg-red-700'>Get Liquor</button>
        </div>
     
    </div>
  )
}

export default EmptyCart
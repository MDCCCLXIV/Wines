import React from 'react'

const Navigation = () => {
  return (
    <div className='flex p-4 mb-2 w-full '>
        <ul className='w-full container flex mx-auto my-auto max-w-6xl justify-center border-b p-2 '>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Home</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Products</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">About</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Contact Us</a></li>
        </ul>

    </div>
  )
}

export default Navigation
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex p-4 mb-2 w-full '>
        <ul className='w-full container flex mx-auto my-auto max-w-6xl justify-center border-b p-2 '>
            <Link to="/" className='mx-2 text-black hover:text-red-500'>Home</Link>
            <Link to="/products" className='mx-2 text-black hover:text-red-500'>Products</Link>
            <Link to="/about" className='mx-2 text-black hover:text-red-500'>About</Link>
            <Link to="/contact" className='mx-2 text-black hover:text-red-500'>Contact Us</Link>
        </ul>

    </div>
  )
}

export default Navigation
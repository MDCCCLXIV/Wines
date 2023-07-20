import React from 'react'
import ProductsGrid from './ProductsGrid'

const Products = () => {
  return (
    <div className='w-full container flex mx-auto h-[100vh] p-2 max-w-6xl flex-col mt-4'>
        <div className='font-semibold text-2xl mx-auto h-[10%] mt-3'>
            <span className=' w-full justify-center align-middle flex flex-col h-full '>Designed to supply all Brands</span>
            </div>
        <div className='flex p-4 mb-2 w-full '>
        <ul className='w-full container flex mx-auto my-auto max-w-6xl justify-center  p-2 '>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Whisky</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Whisky</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">Whisky</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">WHisky</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">WHisky</a></li>
            <li className='mx-2 text-black hover:text-red-500'><a href="#">WHisky</a></li>
        </ul>

    </div>
        <div className='flex '>
          <ProductsGrid />
        </div>
    </div>
  )
}

export default Products
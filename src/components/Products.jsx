import React from 'react'
import ProductsGrid from './ProductsGrid'

const Products = () => {
  return (
    <div className='w-full container flex mx-auto h-[45vh] p-2 max-w-6xl flex-col my-4'>
          <ProductsGrid />
    </div>
  )
}

export default Products
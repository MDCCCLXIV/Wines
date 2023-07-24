import React from 'react'
import ProductsGrid from './ProductsGrid'

const Products = () => {
  return (
    <div className='w-full container flex mx-auto h-[60vh] p-2 max-w-6xl flex-col mt-4'>
          <ProductsGrid />
    </div>
  )
}

export default Products
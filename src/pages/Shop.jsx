import React from 'react'
import Filter from '../components/Filter'
import ShopProducts from '../components/ShopProducts'

const Shop = () => {
  return (
    <div className='w-full container flex mx-auto max-w-7xl justify-between'>
        <Filter />
        <ShopProducts />

    </div>
  )
}

export default Shop
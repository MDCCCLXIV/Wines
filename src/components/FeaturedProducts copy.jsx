import React from 'react'
import Carousel from './Carousel'

const FeaturedProducts = () => {
 
  return (
    <div className='w-[50%] h-full flex p-2'>
   <div className="flex  mx-auto mt-[20%] w-full justify-center p-1 ">
    <div className="flex w-full justify-center p-1">
        <Carousel />
    </div> 
    </div>
    </div>
  )
}

export default FeaturedProducts
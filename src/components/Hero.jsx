import React from 'react'
import SiteDescription from './SiteDescription'
import FeaturedProducts from './FeaturedProducts'

const Hero = () => {
  return (
    <div className='w-full container flex mx-auto h-[60vh] p-2 max-w-6xl justify-between'>
        <SiteDescription />
        <FeaturedProducts />
    </div>
  )
}

export default Hero
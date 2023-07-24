import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Brands from '../components/Brands'
const Home = () => {
  return (
    <div className='w-full text-sm  flex flex-col'>
      
        <Hero />
        <Brands />
        <Products />
       
    </div> 
  )
}

export default Home
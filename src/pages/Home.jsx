import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='w-full text-sm outline outline-red-500 flex flex-col'>
        <Header />
        <Navigation />
        <Hero />
        <Products />

    </div> 
  )
}

export default Home
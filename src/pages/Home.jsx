import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Footers from '../components/Footers'

const Home = () => {
  return (
    <div className='w-full text-sm  flex flex-col'>
        <Header />
        <Navigation />
        <Hero />
        <Products />
        <Newsletter />
        <Footers />

    </div> 
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full text-sm  flex flex-col'>
        <Header />
        <Navigation />
        <Hero />
        <Products />
        <Newsletter />
        <Footer />

    </div> 
  )
}

export default Home
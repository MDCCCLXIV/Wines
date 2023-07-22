import React from 'react'
import {AiOutlineShoppingCart,AiOutlineUser} from "react-icons/ai"
import Userbtn from './Userbtn'
import Shoppingcart from './Shoppingcart'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='w-full relative p-4 bg-red-500 text-white flex'>
      <div className='w-full container flex mx-auto my-auto max-w-6xl justify-between'>
      <div className='flex justify-between my-auto'>
            <p className='my-auto text-xl font-bold'>WebWines</p>
            <SearchBar />
        </div>
        <div className='flex justify-between'>
           <Userbtn />
            <Shoppingcart itemCount={0}/>
        </div>

      </div>
    </div>
  )
}

export default Header
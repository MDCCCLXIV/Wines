import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className="flex">
        <input className='p-2 outline-red-500 rounded-lg ms-3 text-black w-[350px]' type="text" placeholder='Brands,whisky,scotch...'/>
        <AiOutlineSearch size={30} className='my-auto ms-2' />
    </div>
  )
}

export default SearchBar
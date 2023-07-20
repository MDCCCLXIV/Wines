import React from 'react'
import {BsCartPlus} from 'react-icons/bs'

const Product = ({products}) => {
  return (
    <div className='w-[80%] container max-w-6xl mx-auto grid grid-cols-4 grid-rows-2'>
      
       
         {products.map(({product_name,price,alcohol_content,image,description}) =>{
            return(
   
          <div className='flex flex-col  p-2 bg-white hover:cursor-pointer border rounded m-1 align-middle hover:border-red-500 text-sm'>
            <div className='w-full h-[70%] flex justify-center'>
                <img className='object-fit w-full h-[100%]' src={image} alt=''/></div>
            <div className='flex w-full justify-between p-2 text-sm'>
                <span>{product_name}</span>
                <span>{alcohol_content}%</span>
            </div>
            <span className='text-sm'>{description}</span>
            <div className='flex w-full justify-evenly text-sm'>
            <span>KES {price}</span>
            </div>
            <div className='flex w-100 justify-center'>
                <button className='hover:bg-orange-300 p-1 my-auto hover:text-white rounded-md text-sm'><BsCartPlus size={18} /></button>
            </div>
            </div>

          
         )})
         }
    </div>
  )
}

export default Product
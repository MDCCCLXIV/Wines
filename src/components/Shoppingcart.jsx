import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Shoppingcart = () => {
  return (
    <div className='flex relative'>
  <AiOutlineShoppingCart size={25} />
  <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center'>
    0
  </span>
</div>
  );
}

export default Shoppingcart;
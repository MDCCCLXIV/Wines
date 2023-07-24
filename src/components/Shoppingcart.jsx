import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom'


const Shoppingcart = ({ itemCount }) => {
  const width = `${Math.max(15, 8 + itemCount.toString().length * 8)}px`;

  return (
    <div className='flex relative'>
      <Link to="/cart"><AiOutlineShoppingCart size={25} /></Link>
      <span
        className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-red-600 bg-white text-xs rounded-full flex items-center justify-center'
        style={{ width }}
      >
        {itemCount}
      </span>
    </div>
  );
};

export default Shoppingcart;

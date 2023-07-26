import React from 'react'

import EmptyCart from '../components/EmptyCart'

const Cart = ({products,setProducts}) => {
  return (
    <div className='w-full text-sm  flex flex-col'>
   
     <EmptyCart products={products} setProducts={setProducts}/>

    </div>
  )
}

export default Cart
import { BsFileMinus, BsFilePlus, BsTrash } from 'react-icons/bs';
import { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  
  const {products,setProducts} =useContext(AppContext)


  function increaseQuantity(productId) {
    setProducts(prevProducts => prevProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  }

  function decreaseQuantity(productId) {
    setProducts(prevProducts => prevProducts.map(product => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  }
   function removeItem(productId) {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  }
    const subtotal = products.reduce((total, product) => {
    return total + (parseInt(product.price) * product.quantity);
  }, 0);
   const deliveryfee = 30;


  return (
    <div className='w-full container flex flex-col mx-auto h-[60vh] p-2 max-w-6xl'>
      {products.length === 0 ?
        <div className="flex flex-col w-full h-full m-auto justify-center items-center ">
          <span className='text-red-500 font-semibold text-3xl text-center m-2'>Your cart is empty</span>
          <Link to="/products" className='bg-red-500 w-[200px] text-2xl border rounded-full m-2 p-2 text-white hover:bg-red-700 text-center'>Get Liquor</Link>
        </div>
        :
        <div className="flex justify-between h-full w-full mx-auto p-2">
          <div className="flex flex-col w-[75%] h-full me-auto border rounded-md p-2 overflow-y-scroll no-scrollbar">
            {products.map(({ id, image, price, Description, product_name, quantity }) => {
                  const totalPrice = price * quantity;
                 
                  
              return (
                <div key={id} className="flex flex-col w-full h-[40%] mx-auto rounded border my-1">
                  <div className="flex justify-between p-1 w-full h-[80%]">
                    <div className="flex h-full w-[80%] p-1">
                      <div className="w-[120px] h-full border rounded">
                        <img className='w-full h-full border rounded object-fill' src={image} alt="" />
                      </div>
                      <div className="flex flex-col ms-2 my-auto">
                        <span className='m-1'>{product_name}</span>
                        <span className='m-1'>{Description}</span>
                        <span className='m-1'>Price: KES {price}.00</span>
                      </div>
                    </div>
                    <span className='font-semibold text-lg h-[20%] text-center mt-3 w-[25%]'>Total KES {totalPrice}.00</span>
                  </div>
                  <div className="flex justify-between w-full h-[20%]">
                    <button onClick={()=>removeItem(id)} className='my-auto mx-1 text-red-500 flex p-2'><BsTrash className='mx-1' size={25} />Remove</button>
                    <div className="flex my-auto mx-3 p-2 mb-1">
                      <button onClick={() => increaseQuantity(id)} className='my-auto '><BsFilePlus size={25} /></button>
                      <span className='my-auto text-base m-2'>{quantity}</span>
                      <button onClick={() => decreaseQuantity(id)} className='my-auto'><BsFileMinus size={25} /></button>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="flex flex-col w-[23%] h-[60%] border rounded-md  ">
            <span className='text-sm font-medium border-b rounded m-1 border p-2'>CART SUMMARY</span>
            <div className="flex flex-col m-1 rounded border p-2">
              <div className="flex justify-between ">
                <span className='font-medium'>Subtotal</span>
                <span className='text-base font-semibold'>KES {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className='font-medium'>Delivery fee</span>
                <span className='text-base font-semibold'>KES {deliveryfee}</span>
              </div>
            </div>
            <div className="flex flex-col m-1 ">
              <button className='bg-red-500 w-full text-lg border rounded-lg p-2 text-white hover:bg-red-700'>Checkout KES {subtotal + deliveryfee}.00</button>
            </div>

          </div>

        </div>

      }
    </div>
  )
}

export default EmptyCart;

import React from 'react'
import { BsCash, BsCreditCard, BsFacebook, BsInstagram, BsMailbox, BsMessenger, BsPaypal, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-[55vh] mt-1 '>
    <div className="flex container w-full h-[97%] m-auto mt-2 max-w-8xl bg-slate-200 rounded-xl ">
        <div className="flex flex-col w-[37%] h-[90%] m-auto rounded-s-xl p-2"> 
        <span className="flex font-bold text-left w-full py-3 text-2xl text-red-500 p-1">Webwines</span>
            <p className='flex text-left p-1 text-base my-2'>webwines is focused on providing high quality services and products</p>
            <div className="flex flex-col my-6">
                    <span className='text-lg font-semibold text-red-500'>Social media</span>
                    <ul className='flex mt-2 '>
                        <li className='m-1 hover:text-blue-600'><a href=''><BsFacebook size={25} /></a></li>
                        <li className='m-1 hover:text-pink-400 '><a href=''><BsInstagram size={25} /></a></li>
                        <li className='m-1 hover:text-blue-400'><a href=''><BsTwitter size={25} /></a></li>
                        <li className='m-1 hover:text-green-600 '><a href=''><BsWhatsapp size={25} /></a></li>

                    </ul>
                </div>
                <div className='flex flex-col'>
                <span className='text-lg font-semibold text-red-500'>Payment Methods</span>
                        <ul className='flex mt-2'>
                            <li className='m-1'><a href=""><BsPaypal size={25}/></a></li>
                        </ul>                
                </div>
        </div>
        <div className="flex w-[60%] m-auto p-2 h-[90%] rounded-e-xl justify-center">
        <div className='w-full py-3 '>
                    <span className='font-bold text-xl pt-2 '>About webwines</span>
                <ul className='mt-2 px-1'>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>About us</a></li>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>Terms and conditions</a></li>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>Contact us</a></li>
                </ul>
        </div>
        <div className='w-full py-3  '>
                    <span className='font-bold text-xl pt-2 '>Quick links</span>
                    <ul className='mt-2 px-1'>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>Home</a></li>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>About us</a></li>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>Products</a></li>
                    <li className='m-1 mt-2'><a className='hover:text-red-500' href='#'>Contact Us</a></li>
                </ul>
                    </div>
                    
                    

        </div>
    </div>
    </div>
  )
}

export default Footer
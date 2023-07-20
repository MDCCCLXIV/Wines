import React from 'react'
import Contact from './Contact'
import { BsCash, BsCreditCard, BsFacebook, BsInstagram, BsMailbox, BsMessenger, BsPaypal, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-[65vh] text-white flex flex-col'>
        <Contact />
        <div className=' bg-red-500 h-[80%]'>
            <div className="flex container mx-auto max-w-6xl w-full h-full">
                <div className='w-[20%] flex flex-col'>
                <span className='font-bold text-xl pt-2 '>Talk to us</span>
                <div className="flex flex-col">
                    <span className='text-lg mt-2'>Social media</span>
                    <ul className=' flex flex-col mt-2 '>
                        <li className='m-1'><a href=''><BsFacebook size={25} /></a></li>
                        <li className='m-1'><a href=''><BsInstagram size={25} /></a></li>
                        <li className='m-1'><a href=''><BsTwitter size={25} /></a></li>
                        <li className='m-1'><a href=''><BsWhatsapp size={25} /></a></li>

                    </ul>
                </div>
                </div>
                <div className='w-[60%] flex py-2'>
                    <div>
                    <span className='font-bold text-xl pt-2 '>About webwines</span>
                <ul>
                    <li>About us</li>
                    <li>Terms and conditions</li>
                    <li>COntact us</li>
                </ul>
                    </div>
                    <div className='ms-[20%]'>
                    <span className='font-bold text-xl pt-2 '>Quick links</span>
                    <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
                    </div>
                    
              
               
                </div>
                <div className='w-[20%] py-2'>
                <span className='font-bold text-xl pt-2  '>Payment Methods</span>
                    <div className="flex">
                        <ul className='flex'>
                            <li className='m-2'><a href=""><BsPaypal size={25}/></a></li>
                            <li className='m-2'><a href=""><BsCash size={25}/></a></li>
                            <li className='m-2'><a href=""><BsCreditCard size={25}/></a></li>
                        </ul>                
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer
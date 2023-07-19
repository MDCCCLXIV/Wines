import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { useState,useEffect,useRef } from 'react';


const Userbtn = () => {
    const [categoryBtnIsOpen,setCategoryBtnIsOpen] = useState(false);

    const openDropdownBtn =()=>{
        setCategoryBtnIsOpen(!categoryBtnIsOpen)
    }
    const closeDropDown=()=>{
        setCategoryBtnIsOpen(false)
    }

    const element = useRef()

   useEffect(() => {
  document.addEventListener("click", handleclick, true);

  return () => {
    document.removeEventListener("click", handleclick, true);
  };
}, [categoryBtnIsOpen]);

    const handleclick = (e)=>{
        element.current.contains(e.target) ? 
        openDropdownBtn()
        :
        closeDropDown()
    }
    
 
  return (
    <div>
        <button  ref={element}><AiOutlineUser size={25} /></button>
      {
        categoryBtnIsOpen &&
    <ul className='flex flex-col absolute mx-auto p-2 mt-2 w-[150px] bg-slate-50 shadow-md rounded text-red-500'>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Login</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Sign Up</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Account Settings</li>
    </ul>
    }
    </div>
  )
}

export default Userbtn
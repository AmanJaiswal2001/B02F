import React, { useState } from "react"

import theAssign from "../assets/theASSignerlogo 2.png"
function Header() {

    const[isOpen, setisOpen]=useState(false);

const toggleMenu=()=>{
    setisOpen(!isOpen);
}


  return (
    <>
    <div className='md:bg-fuchsia-800 md:h-10 md:block   hidden'>
    <div className='flex justify-end top-1 gap-4 pt-1 pr-3 pb-1 pl-3  '>
    <a className='text-white'><i class="fa-brands fa-linkedin-in"></i></a>
    <a className='text-white'><i class="fa-brands fa-meta"></i></a>
    <a className='text-white'><i class="fa-brands fa-instagram"></i></a>
    <a className='text-white'><i class="fa-brands fa-x-twitter"></i></a>
    <a className='text-white'><i class="fa-brands fa-whatsapp"></i></a>
    <a className='text-white'><i class="fa-brands fa-telegram"></i></a>
</div>
    </div>

<div className=" w-full mx-auto flex justify-between items-center shadow-lg md:h-28 p-3 md:p-0 overflow-x-hidden ">
<div className='md:w-56 md:h-20  w-20 h-9 '>
<img className='top-11'
 src={theAssign} alt="logo"/>
</div>

<div className='hidden md:flex bg-gray-200 h-12 w-[780px] top-20 mx-4 shadow-lg rounded-sm '>
<ul className='   flex p-3 gap-4 pt-3 pr-9 pb-3 pl-9 md:gap-16 cursor-pointer'>
   <li>Home </li>
   <li>AboutUs </li>
   <li>Blog </li>
   <li>Our Services </li>
   <li>IETS&PTE </li>
   <li>Contact Us</li>
</ul>

</div>
<div className='font-cormorant text-[10px]   ml-auto  leading-[12.11px] md:text-[15px] md:leading-[18.17px] font-bold  md:m-0 m-4 w-11 h-6 pt-1 md:pt-0 md:w-32 md:h-10 md:top-20  md:mr-10 rounded-sm bg-violet-800 text-center md:flex text-white md:justify-center'>
    <button>
    Login
    </button>
</div>

<div className="md:hidden flex items-center ">
<button onClick={toggleMenu} className="text-gray-800  w-10 h-10 text-3xl top-9  ">
          <i className="fa-solid fa-bars"></i>
        </button></div>
        
</div>
{isOpen && (
        <div className="   md:hidden  bg-gray-200 shadow-lg rounded-sm w-full   ">
          <ul className="  flex flex-col items-center p-4 gap-4 text-sm top-20 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Our Services</li>
            <li>IETS & PTE</li>
            <li>Contact Us</li>
          
          </ul>
        </div>
      )}





</>
  )
}

export default Header
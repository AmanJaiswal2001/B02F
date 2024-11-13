import React from 'react'

import theAssign from "../assets/theASSignerlogo 2.png"
function Header() {
  return (
    <>
    <div className='bg-fuchsia-800 h-10' >
    <div className='flex justify-end top-1 gap-4 pt-1 pr-3 pb-1 pl-3 '>
    <a className='text-white'><i class="fa-brands fa-linkedin-in"></i></a>
    <a className='text-white'><i class="fa-brands fa-meta"></i></a>
    <a className='text-white'><i class="fa-brands fa-instagram"></i></a>
    <a className='text-white'><i class="fa-brands fa-x-twitter"></i></a>
    <a className='text-white'><i class="fa-brands fa-whatsapp"></i></a>
    <a className='text-white'><i class="fa-brands fa-telegram"></i></a>
</div>
    </div>
<div>
<div className="flex justify-between items-center shadow-lg h-28 ">
<div className='w-56 h-20 ml-8 '>
<img className='top-11'
 src={theAssign} alt="logo"/>
</div>

<div className='bg-gray-200 h-12 w-[780px] top-20 left-9 shadow-lg rounded-sm '>
<ul className='flex pt-3 pr-9 pb-3 pl-9 gap-16 cursor-pointer'>
   <li>Home </li>
   <li>AboutUs </li>
   <li>Blog </li>
   <li>Our Services </li>
   <li>IETS&PTE </li>
   <li>Contact Us</li>
</ul>

</div>
<div className='w-32 h-10 top-20  mr-10 rounded-sm bg-violet-800 text-center flex text-white justify-center'>
    <button>
    Login
    </button>
</div>
<div clas>
<i class="fa-solid fa-bars"></i>
</div>
</div>

</div>
</>
  )
}

export default Header
import React, { useState } from 'react'

const Accordian = ({title,description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
 
    return (
    <>
    <div className=' md:w-[1137px] rounded-md  bg-slate-50 p-2 shadow-xl mt-4'>
   <div className='flex justify-between items-center pl-2 md:pl-0' onClick={toggleAccordion}>
    <p className='font-cormorant text-[10px] leading-[20px] md:text-[24px] md:leading-[20px] font-bold'>{title}</p>
   <span className='cursor-pointer'>
  <i className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
   {/* <i class="fa-solid fa-angle-down"></i> */}
   </span>
   </div>
  { isOpen &&(  <p className='font-cormorant  text-[10px] pl-2 md:pl-0 leading-[12px] md:text-[20px] md:leading-[20px] font-normal'>{description} </p>
  
   )} </div>
    
    </>
  )
}

export default Accordian
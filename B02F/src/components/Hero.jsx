import React from 'react'
import image1 from "../assets/image 1.png"
function Hero() {
  return (
    <div className="  relative">
<img className=' ml-2 w-92 md:w-screen md:h-[501px] md:top-0.5 md:left-0.5 sm:w-screen sm:h-[501px] sm:top-0.5 sm:left-0.5  h-32 rounded-sm' 
src={image1} alt="hero image"/>
<div className='absolute   left-5 top-3 md:hidden sm:hidden'>
<div className='   h-14  w-28  md:hidden sm:hidden' >
    <p className='  font-cormorant text-[11px]  leading-[13.32px] font-bold text-purple-500 text-left '>Navigate Your</p>
    <p className='  font-cormorant text-[11px]  leading-[13.32px] font-bold text-purple-900 text-left '>Academic Journey</p> 
    <p className='  font-cormorant text-[11px]  leading-[13.32px] font-bold text-pink-600 text-left '>with Confidence</p>
  
</div>

<div className='w-56  left-5'>
  <p className='font-cormorant text-[10px] leading-[12.11px]'>Providing high-quality and comprehensive assistance with assignments and thesis writing for students 
  at all academic levels.</p>
</div>
</div>


    </div>
  )
}

export default Hero
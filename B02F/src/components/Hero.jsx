import React from 'react'
import image1 from "../assets/image 1.png"
function Hero() {
  return (
    <div className="relative">
<img className='md:w-screen md:h-[501px] md:top-0.5 md:left-0.5 sm:w-screen sm:h-[501px] sm:top-0.5 sm:left-0.5 w-80 h-32 top-' 
src={image1} alt="hero image"/>

<div className=' absolute top-20 left-5 h-14  w-28 bg-green-300 md:hidden sm:hidden' >
    <p className='  font-cormorant text-[11px] font-bold  text-left '>Navigate Your</p>
    <p className='  font-cormorant text-[11px] font-bold  text-left '>Academic Journey</p> 
    <p className='  font-cormorant text-[11px] font-bold  text-left '>with Confidence</p>
    
</div>



    </div>
  )
}

export default Hero
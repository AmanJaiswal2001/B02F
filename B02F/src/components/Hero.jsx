import React from 'react'
import image1 from "../assets/image 1.png"
import object from "../assets/OBJECTS.png"
import star from "../assets/star.png"
import Card from './Card'
function Hero() {
  return (
    <>
    <div className="  relative">
<img className='shadow-sm ml-2 w-92 md:w-screen md:h-[501px] md:top-0.5 md:left-0.5 sm:w-screen sm:h-[501px] sm:top-0.5 sm:left-0.5  h-32 rounded-sm' 
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
     {/* hero-2 */}
<div className='  md:w-full md:h-52 md:top-[680px]  ' >
<div className='md:block hidden'>
<img className='pl-2'
src={object}/>
  
</div>

<div className='w-screen h-28 md:w-[1351px] md:h-56  md:top-[696px] mx-auto md:-mt-[50px] shadow-lg '>
<div className='md:w-[722px] md:h-9 md:items-center   mt-4 md:mx-auto'>
  <h2 className=' font-cormorant text-[11px] md:text-[48px] md:leading-[30.8px]  font-bold text-center'>700+ students saved, and counting</h2>
</div>
<div className=' w-80 h-5  md:w-[632px] md:h-10 mx-auto md:top-[740px] mt-4'>
  <p className='font-cormorant  leading-[12px] text-[10px] md:text-[20px] md:leading-[19.8px] font-medium text-center'>50K new study notes added every day, from the world’s most active student
  communities</p>
</div>
<div className='w-80  md:w-full md:h-24 flex   mx-auto    md:justify-around items-center mt-2 '>
<Card number="350+" iconClass="fa-regular fa-file" label="Study resources"/>

<Card number="115+" iconClass="fa-solid fa-building-columns" label="Institutions"/>
<Card number="700+" iconClass="fa-regular fa-user" label="Users"/>

</div>
<div className='  hidden md:relative md:left-8 md:flex md:justify-end md:-mt-16  '>
<img className=''
src={star}/>
  
</div>
</div>

</div>


</>
  )
}

export default Hero
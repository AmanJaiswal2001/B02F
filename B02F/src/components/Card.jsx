import React from 'react'

const Card = ({number,iconClass,label}) => {
  return (
    <>
    <div className=' '>
    <div className='-mt-5 md:-mt-0 font-cormorant text-[10px] md:text-[64px] leading-[83.6px] font-bold text-center md:w-24 md:h-10 mx-auto w-5 h-5'>
<h2>{number}</h2>
</div>
<div className='   w-24 h-4  md:w-64 md:h-6 md:pr-0.5 md:pl-0.5 md:mt-7  mt-9 flex justify-center items-center text-[10px] md:text-[20px] leading-[24.6px] font-normal'>
<i className={iconClass}>
</i><span className='font-cormorant m-2'>{label}</span>
</div>
</div>
   </>
  )
}
// feature card
export const FeatureCard=({title,image,paragraph})=>{
  return(
    <div className=' w-32 h-24 hover:bg-gray-300 transition ease-in-out delay-50  hover:-translate-y-2  md:w-72 md:h-48 rounded-xl border shadow-2xl border-black bg-slate-100 '>
  
   <div className='w-5 h-5 md:w-fit md:h-fit m-auto'> 
    <img  className='  md: m-auto pt-3'
    src={image} alt='image'/>
    </div>
<div className='md:w-60  md:h-11  w-28 h-3 pt-3  md:m-auto md:pt-5 '>
<h3 className=' font-cormorant text-[10px] leading-[11.32px] md:text-[20px] md:leading-[24.8px] font-medium text-center'>{title}</h3>
</div>
 <div className=' w-28 h-9 md:w-72  md:h-9 md:gap-0.5  mt-5 '>
  <p className='font-cormorant text-[10px] leading-[12.11px]  md:text-[20px] md:leading-[24.8px] font-normal text-center'>{paragraph}</p>
</div>
  </div>
  )
}

export const ServiceCard=({title,img,rating})=>{
  return(
    <div className='  h-28  md:w-[226px] md:h-60 border border-black md:rounded-2xl md:overflow-hidden md:ml-2'>
<div className=''>
<img className='md:rounded-t-xl md:w-56 md:h-40 transition ease-linear delay-150  hover:-translate-y-1 hover:bg-gray-300 '
 src={img}/>
</div>
<div className=' md:w-56 md:h-20 md:pl-1'>
<h6 className='font-cormorant text-[11px] leading-[13.32px] md:text-[20px] md:leading-[29.1px] font-bold '>{title}</h6>
<img src={rating}/>
</div>
    </div>
  )
}
// advantages card//

export const Advantage=({title,description})=>{
  return(
    <div className=' transition ease-in-out delay-50  hover:-translate-y-2 w-28 h-24 md:hover:bg-red-800 hover:bg-red-800 md:w-60 md:h-60 border border-black rounded-2xl pt-2  overflow-hidden  bg-red-300  flex md:items-center md:justify-center md:mt-10'>
   <div>
    <h3 className='font-cormorant text-[11px] leading-[13.32px] md:text-[24px] md:leading-[29.1px] font-bold text-center '>{title}</h3>
       <p className='font-cormorant text-[10px] leading-[12.11px] md:text-[16px] md:leading-[19.3px] font-medium text-center mt-2'>{description}</p>
       </div>
        </div>
        
  )
}

export default Card
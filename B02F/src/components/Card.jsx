import React from 'react'

const Card = ({number,iconClass,label}) => {
  return (
    <>
    <div className=' '>
    <div className='font-cormorant text-[64px] leading-[83.6px] font-bold text-center w-24 h-10 mx-auto'>
<h2>{number}</h2>
</div>
<div className='w-64 h-6 pr-0.5 pl-0.5 mt-7 flex justify-center items-center  '>
<i className={iconClass}></i><span className='font-cormorant m-2'>{label}</span>
</div>
</div>
   </>
  )
}
// feature card
export const FeatureCard=({title,image,paragraph})=>{
  return(
    <div className='w-72 h-48 rounded-xl border shadow-2xl border-black bg-slate-100 '>
    <img  className='m-auto pt-3'
    src={image} alt='image'/>

<div className='w-60  h-11 m-auto pt-5 '>
<h3 className=' font-cormorant text-[20px] leading-[24.8px] font-medium text-center'>{title}</h3>
</div>
 <div className='w-72  h-9 gap-0.5 mt-5'>
  <p className='font-cormorant text-[20px] leading-[24.8px] font-normal text-center'>{paragraph}</p>
</div>
  </div>
  )
}

export const ServiceCard=({title,img,rating})=>{
  return(
    <div className='w-[226px] h-60 border border-black rounded-2xl overflow-hidden ml-2'>
<div className=''>
<img className='rounded-t-xl w-56 h-40 '
 src={img}/>
</div>
<div className='w-56 h-20 pl-1'>
<h6 className='font-cormorant text-[20px] leading-[29.1px] font-bold '>{title}</h6>
<img src={rating}/>
</div>
    </div>
  )
}
// advantages card//

export const Advantage=({title,description})=>{
  return(
    <div className='w-60 h-60 border border-black rounded-2xl   overflow-hidden  bg-red-300 flex items-center justify-center mt-10'>
   <div>
    <h3 className='font-cormorant text-[24px] leading-[29.1px] font-bold text-center '>{title}</h3>
       <p className='font-cormorant text-[16px] leading-[19.3px] font-medium text-center mt-2'>{description}</p>
       </div>
        </div>
        
  )
}

export default Card
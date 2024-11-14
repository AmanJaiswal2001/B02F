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

export const featureCard=()=>{
  return(
    <div className='w-72 h-48 rounded-xl border-0.5 bg-slate-100'>
    <img  className='m-auto pt-3'
    src={img1}/>

<div className='w-60  h-11 m-auto pt-5 '>
<h3 className=' font-cormorant text-[20px] leading-[24.8px] font-medium text-center'>Plagiarism Checker</h3>
</div>
 <div className='w-72  h-9 gap-0.5 mt-5'>
  <p className='font-cormorant text-[20px] leading-[24.8px] font-normal text-center'>We will provide access to assignments free of plagiarism</p>
</div>



  </div>
 


  )
}

export default Card
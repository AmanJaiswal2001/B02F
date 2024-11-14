import React from 'react'

const Card = ({number,iconClass,label}) => {
  return (
    <>
    <div className=' '>
    <div className='font-cormorant text-[64px] leading-[83.6px] font-bold text-center w-24 h-10 mx-auto'>
<h2>{number}</h2>
</div>
<div className='w-64 h-6 pr-0.5 pl-0.5 mt-7 flex justify-center items-center '>
<i className={iconClass}></i><span className='font-cormorant m-2'>{label}</span>
</div>
</div>
   </>
  )
}

export default Card
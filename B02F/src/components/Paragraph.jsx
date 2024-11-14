import React from 'react'

const Paragraph = ({title, color}) => {
  return (
   
   <span 
    className={`font-cormorant text-[64px] leading-[77.8px] font-semibold  ${color}`}>{title}</span>
 
  )
}

export  const Button=()=>{
     return(
        <div className='w-80 h-10   m-auto'>
<button className='font-cormorant text-[36px] leading-[43.8px] font-semibold text-center'>Enroll Now</button>
</div>
     )
}

export default Paragraph
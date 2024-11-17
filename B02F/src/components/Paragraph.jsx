import React from 'react'

const Paragraph = ({title, color}) => {
  return (
   
   <span 
    className={`font-cormorant  text-[9px] md:text-[64px]  md:leading-[77.8px] font-semibold  ${color}`}>{title}</span>
 
  )
}

export  const Button=()=>{
     return(
        <div className='md:w-80 md:h-10 w-14 h-3 -mt-1   md:m-auto'>
<button className='font-cormorant text-[10px] leading-[12.8px] md:text-[36px] md:leading-[43.8px]   md:font-semibold md:text-center'>Enroll Now</button>
</div>
     )
}

export default Paragraph
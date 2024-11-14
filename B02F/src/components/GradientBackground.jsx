import React from 'react'
import Paragraph,{Button} from './Paragraph'
import vector from "../assets/Vector.png"
import Group from "../assets/Group 1984.png"
import img1  from "../assets/3146064.png.png"
const GradientBackground = () => {
  return (
    <>
    <div className="w-full h-[638px] relative bg-custom-gradient  flex rounded-2xl left-0.5 mt-8">
    <div>
      <div className='w-[840px] h-80 pt-16 pl-12  '>
      <Paragraph title="IELTS Preparation" color="text-pink-700"/>
      <br></br>
<Paragraph title="Online Best Learning " color="text-purple-900"/>
<br></br>
<Paragraph title="opportunities in The World " color="text-violet-700"/>
      </div>
      <div className='w-[821px] h-28 pt-2 pl-12 '>
        <p className='font-cormorant text-[32px] leading-[38.8px] font-semi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Audax negotium, dicerem impudens, nisi hoc institut 
translatum ad philosophos nostros esset.</p>
      </div>
      <div className='w-96 h-28 bg-purple-900 mt-12 ml-24 text-center flex justify-center rounded-2xl text-white'>
     <Button/>
     </div>
      </div>
<div>
    <div className='w-[858px] absolute top-0 right-0 h-80 pt-7 '>
      
      <img className='w-[733px] h-72 ' 
      src={vector}/> 
    </div>
    <div className='w-[437.9px] h-[417.29px] mt-52 ml-36  '>
      <img 
      className='w-[362.49px] h-[351.83px]'
      src={Group}/>
    </div>
</div>


    </div>

    {/* awesome Feature */}
    <div className='w-full h-72 '>
<div className='w-80 h-12 m-auto mt-2'>
  <p className='font-cormorant text-[40px] leading-[48.8px] font-bold text-center'>Awesome Features</p>
</div>
<div className='w-[484px] h-7 m-auto'>
<p className='font-cormorant text-[24px] leading-[29.8px] font-medium text-center'
>Get ready to unlock the next level of features</p>
</div>
{/* card */}
<div className='w-[1380px] h-56 pt-9 m-4  flex'>
 
</div>
    </div>
    </>
      )
}

export default GradientBackground
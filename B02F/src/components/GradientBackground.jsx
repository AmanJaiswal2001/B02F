import React from 'react'
import Paragraph,{Button} from './Paragraph'
import vector from "../assets/layer.png"
import Group from "../assets/Group 1984.png"
import img1  from "../assets/3146064.png.png"
import img2  from "../assets/2232688.png.png"
import img3  from "../assets/2658986.png.png"
import img4  from "../assets/15869380.png.png"
import { FeatureCard } from './Card'

const GradientBackground = () => {
  return (
    <>
    <div className="md:w-full w-screen h-36 md:h-[638px] relative bg-custom-gradient  flex rounded-2xl left-0.5 md:mt-12">
    <div>
      <div className='w-36 h-10 md:w-[840px] md:h-80  md:pt-16 md:pl-12 m-2 flex flex-col '>
      <Paragraph title="IELTS Preparation" color="text-pink-700"/>
      {/* <br></br> */}
<Paragraph title="Online Best Learning " color="text-purple-900"/>
{/* <br></br> */}
<Paragraph title="opportunities in The World " color="text-violet-700"/>
      </div>
      <div className='md:w-[821px]  w-56 h-10 md:h-28  md:pl-12 '>
        <p className='font-cormorant  text-[10px] pl-2  leading-[12.11px]  md:text-[32px] md:leading-[38.8px] font-semi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Audax negotium, dicerem impudens, nisi hoc institut 
translatum ad philosophos nostros esset.</p>
      </div>
      <div className='w-14 h-6 md:w-96 md:h-28  bg-purple-900 md:mt-12 md:ml-24 ml-2  mt-1 text-center flex justify-center rounded-sm md:rounded-2xl text-white'>
     <Button/>
     </div>
      </div>
<div>
    <div className='md:w-[858px]  w-56 h-16 md:mr-5 md:mt-4 absolute  md:top-0 right-0 md:h-80 md:pt-7 '>
      
      <img className='' 
      src={vector}/> 
    </div>
    <div className=' w-32 h-32 md:w-[497.9px] md:h-[417.29px] md:mt-56 md:ml-52 mt-4 ml-4 '>
      <img 
      className=' w-32 h-32 md:w-[385.49px] md:h-[395.83px] '
      src={Group}/>
    </div>
</div>


    </div>

    {/* awesome Feature */}
    <div className=' md:w-full md:h-72 '>
<div className='md:w-80 md:h-12 w-24 h-4 m-auto mt-2'>
  <p className='font-cormorant  text-[11px] leading-[13.8px]  md:text-[40px] md:leading-[48.8px] font-bold text-center'>Awesome Features</p>
</div>
<div className=' w-48 h-3  md:w-[484px] md:h-7 m-auto'>
<p className='font-cormorant text-[10px] leading-[12.11px] md:text-[24px] md:leading-[29.8px] font-medium text-center'
>Get ready to unlock the next level of features</p>
</div>
{/* card */}
<div className='md:w-[1380px]   h-40 md:h-56 gap-3 mt-2 md:pt-9 m-auto flex flex-wrap md:flex justify-center items-center  md:gap-10 '>
 <FeatureCard  title="Plagiarism Checker" image={img1} paragraph="We will provide access to assignments free of plagiarism"
 />
 <FeatureCard  title="Free Publications" image={img2} paragraph="We will provide access to publication"
 />
 <FeatureCard  title="Provides Free Books and PDF" image={img3} paragraph="Free Books and PDF will be provided"
 />
 <FeatureCard  title="Paraphraser" image={img4} paragraph="A paraphraser will be provided"
 />
</div>
    </div>
    </>
      )
}

export default GradientBackground
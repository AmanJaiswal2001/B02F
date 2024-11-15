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
    <div className="w-full h-[638px] relative bg-custom-gradient  flex rounded-2xl left-0.5 mt-12">
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
      <div className='w-96 h-28  bg-purple-900 mt-12 ml-24 text-center flex justify-center rounded-2xl text-white'>
     <Button/>
     </div>
      </div>
<div>
    <div className='w-[858px] mr-5 mt-4 absolute top-0 right-0 h-80 pt-7 '>
      
      <img className='' 
      src={vector}/> 
    </div>
    <div className='w-[497.9px] h-[417.29px] mt-56 ml-52  '>
      <img 
      className='w-[385.49px] h-[395.83px] '
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
<div className='w-[1380px] h-56 pt-9 m-auto  flex justify-center items-center  gap-10 '>
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
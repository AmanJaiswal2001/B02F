import React from 'react'
import { ServiceCard,Advantage } from './Card'
import image1 from "../assets/image 2.png"
import image2 from "../assets/image 3.png"
import image3 from "../assets/image 7.png"
import image4 from "../assets/image 5.png"
import image5 from "../assets/image 6.png"
import image6 from "../assets/image 8.png"
import image7 from "../assets/image 9.png"
import image8 from "../assets/image 10.png"
import image9 from "../assets/image 11.png"
import image10 from "../assets/image 12.png"
import image11 from "../assets/image 13.png"
import image12 from "../assets/image 14.png"
import image13 from "../assets/image 15.png"
import image14 from "../assets/image 16.png"
import con1 from "../assets/Container.png"
import con2 from "../assets/con2.png"
import con3 from "../assets/con3.png"
import con4 from "../assets/con4.png"
import con5 from "../assets/con5.png"
import con6 from "../assets/con6.png"
import con7 from "../assets/con7.png"
import con8 from "../assets/con8.png"
import con9 from "../assets/con9.png"
import con10 from "../assets/con10.png"
import con11 from "../assets/con11.png"
import con12 from "../assets/con12.png"
import con13 from "../assets/con13.png"
import con14 from "../assets/con14.png"
import obj from "../assets/ob.png"
import obj1 from "../assets/st.png"
import Accordian from './Accordian'
const Services = () => {
  return (
   
    <>
   <div className=' h-[660px]  md:w-[1356px] md:h-[1313px] bg-pink-200 rounded-md mt-12 md:mt-10 shadow-xl '>
 <div className='md:w-[1550.8px] md:h-[1289px] md:border border-black md:bg-slate-50 md:shadow-xl relative top-2'>
<h2 className='font-cormorant  text-[11px]  leading-[13.32px] md:text-[40px] md:leading-[48.8px] font-bold text-center'>Our Services</h2>
<p className='font-cormorant  text-[10px] leading-[12.11px]    md:text-[24px] md:leading-[29.8px] font-medium text-center'>We offer some fantastic services</p>

<div className='grid  grid-cols-3 md:grid-cols-4  gap-2 md:gap-8 m-4 md:m-20 '>
<ServiceCard  title="Assignment" img={image1} rating={con1}/>
<ServiceCard title="Dissertation" img={image2} rating={con2}/>
<ServiceCard title="Course work" img={image3} rating={con3}/>
<ServiceCard title="Thesis" img={image4} rating={con4}/>
<ServiceCard title="Essay" img={image5} rating={con5}/>
<ServiceCard title="Research Paper" img={image6} rating={con6}/>
<ServiceCard title="Power Point Presentation" img={image7} rating={con7}/>
<ServiceCard title="Programming" img={image8} rating={con8}/>
<ServiceCard title="Paper Writing" img={image9} rating={con9}/>
<ServiceCard title="Case Study" img={image10} rating={con10}/>
<ServiceCard title="Speech Writing" img={image11} rating={con11}/>
<ServiceCard title="Term Paper Writing" img={image12} rating={con12}/>
<ServiceCard title="Cover Letter Writing" img={image13} rating={con13}/>
<ServiceCard title="Resume Maker" img={image14} rating={con14}/>

</div>




</div>
    </div>


 <div className=' h-96  md:w-full md:h-[435px] border  bg-slate-50  pt-4 '>
<h2 className='font-cormorant  text-[11px] leading-[13.3px]   md:text-[36px] md:leading-[43.6px] font-bold text-center'>Our Assistance's advantages</h2>
<p className='font-cormorant   text-[10px] leading-[12.12px]  md:text-[20px] md:leading-[24.2px] font-medium text-center'>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>


    {/*advantage  */}
<div className='m-auto mt-2 gap-4 flex flex-wrap md:flex justify-center items-center md:mt-4  md:gap-14'>
<Advantage title="No Plagiarism" description="100% original answers that lessen the possibility of receiving a bad grade."/>
<Advantage title="On-time Submission" description="We promise to turn in the job ahead of schedule, no matter how difficult it is."/>
<Advantage title="24/7 support" description="Help for homework is available 24/7; we are always here to assist students with their assignments."/>
<Advantage title="Rewrites that satisfy" description="Get your schoolwork redone as many times as you like till you are happy."/>

   </div>
  

   <div className='md:flex justify-end relative bottom-80 right-28 hidden '>
   <img src={obj}/>
   </div>

   </div>

   {/* accodinan design */}
<div>
<div className='relative bottom-28 left-32 hidden md:block'>
   <img src={obj1}/>
   </div>
<h2 className='font-cormorant  text-[40px] leading-[48.44px] md:text-[40px] md:leading-[48.44px] font-bold text-center relative bottom-24 md:bottom-36 '>FAQs</h2>
<div className='md:w-[1317px] h-44  relative md:bottom-36 bottom-28 md:m-auto '>
{/* Accrdian */}
<Accordian title="What services are available on our website?" description="Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to testLorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test"/>
<Accordian title="How can we guarantee the caliber of the assignments?" description="Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to testLorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test"/>

<Accordian title="What distinguishes our company from other assignment writing firms?" description="Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to testLorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test"/>
<Accordian title="Does utilizing our service have any limitations?" description="Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to testLorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test"/>
<Accordian title="How can consumers access our website's news and updates?" description="Lorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to testLorem Ipsum” generator. “Lorem ipsum” dummy text is used by many web-developers to test"/>


</div>


</div>

   </> 
  )
}

export default Services
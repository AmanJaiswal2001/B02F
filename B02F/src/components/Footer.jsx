import React from 'react'
import footer from "../assets/footer.png"

const Footer = () => {
  return (
    <div className=' md:w-[1540px]   md:h-[565px] relative '>
<img  className='w-[1540px] md:h-[565px] h-56 relative top-3'
src={footer}/>
  <div >
  <div className=' md:w-[1540px] md:h-[465px] absolute md:flex justify-between gap-12 top-10 hidden  '>
    {/* quick link */}
    <div className='m-12 flex flex-col  gap-2'>
    <h3 className='font-cormorant text-[32px] leading-[38.44px] font-bold'>Quick Link</h3>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Home</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>About Us</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Blog</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>FAQ</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Contact Us</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>How We Help</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Community</a>
  </div>
  <div className='m-12 flex flex-col gap-2'>
    <h3 className='font-cormorant text-[32px] leading-[38.44px] font-bold'>Features</h3>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Plagiarism Checker</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Provides Books</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Provides PDF</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Paraphraser</a>
  </div>
  <div className='m-12 flex flex-col gap-2'>
    <h3 className='font-cormorant text-[32px] leading-[38.44px] font-bold'>Our Offering</h3>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Free IELTS Masterclass</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Talk to Counsellor</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>IELTS Exam Overview</a>
  <a className='font-cormorant text-[28px] leading-[38.44px] font-light'>Important IELTS Articles</a>
  
  </div>
  <div className='m-12 flex flex-col  '>
    <h3 className='font-cormorant text-[32px] leading-[38.44px] font-bold relative top-36'>Newsletter</h3>
    <p className='font-cormorant text-[20px] leading-[38.44px] font-light relative top-36 '>You can trust us. We only send promo offers.</p>
  
  <div className='relative top-36 gap-10 flex'>
    <div className='w-52 h-10 bg-purple-900'>
<h3 className='font-cormorant text-[20px] leading-[38.44px] font-light text-white text-center '>Your email here</h3>
    </div>
    <div className='w-28 h-10 bg-pink-400'>
<h3 className='font-cormorant text-[15px] leading-[38.44px] font-light text-white text-center '>Subscribe</h3>
 
    </div>
  </div>
  </div>
  
  </div>
 
 
 
 
  
  </div>
  
  
  
  
  
  
    </div>
  )
}

export default Footer

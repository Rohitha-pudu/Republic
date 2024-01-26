import Image from 'next/image'
import React from 'react'
import CardWhole from './CardWhole'

const Hero = () => {
  return (
    
    <div className='w-[100vw] h-[60vw] bg md:h-[87vh] relative'>
     <div className='flex flex-col items-center justify-center mx-auto w-[67%] h-[100%]'>
      <div className='text-white text-[26px] font-primary md:text-[30px] lg:text-[34px] uppercase'>
      Empowering Minds, Celebrating Unity.
      </div>
      <div className='text-white text-[16px] font-primary md:text-[20px] lg:text-[13px] uppercase mt-[1rem]'>
      Unveiling the Essence of Republic Day and Indian Constitution on somex.
      </div>
       <button 
       className='cursor Pointer mt-[2.6rem] w-[8rem] h-[2.6rem] hover:bg-[#125f67] hover:text-white hover:border-transparent bg-transparent text-white'
       >Learn more</button>
     </div>
     
    </div>
    
    
    
  )
}

export default Hero
import React from 'react'
import {Card, CardFooter, Image, Button, CardHeader, CardBody} from "@nextui-org/react";
import Link from 'next/link';

const CardWhole = () => {
  return (
    <div className='bg-black'>
    <div className=' text-[36px] text-white h1 text-center'>Explore Here In one Place</div>
    <div className=' text-[20px] text-[#ff9945] text-center mt-[0.8rem]'>All you need is here...</div>
    <div className='flex flex-col-4 mt-[5rem]'>
    <div className='ml-[3rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/final2.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href={`/text`}>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-[#d16a25] hover:text-black hover:border-transparent bg-transparent text-white'
       >History</button>
             </Link>
             </div>    


        {/* second card  */}
        <div className='ml-[7rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/img4.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href='/text2'>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-white hover:text-black hover:border-transparent bg-transparent text-white'
       >Articles</button>
       </Link>
             
             </div>     
         
         {/* third row */}
         <div className='ml-[7rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/img5.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href='/text'>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-[#239165] hover:text-black hover:border-transparent bg-transparent text-white'
       >Amendments</button>
             </Link>
             </div>  
             </div>

             {/* second line */}
             <div className='flex flex-col-4 mt-[5rem]'>
    <div className='ml-[3rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/img10.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href='/text'>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-[#d16a25] hover:text-black hover:border-transparent bg-transparent text-white'
       >Parades</button>
             </Link>
             </div>    


        {/* second card  */}
        <div className='ml-[7rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/img7.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href='/text'>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-white hover:text-black hover:border-transparent bg-transparent text-white'
       >Constitution</button>
             </Link>
             </div>     
         
         {/* third row */}
         <div className='ml-[7rem] cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-7'>
              <div className='flex justify-center items-center py-4'>
              <Image src='/images/img8.jpg' width="350" height="350" className='rounded-lg sepia card '/>
              
              </div>
              <Link href='/text'>
              <button 
       className='cursor Pointer  mt-[0.4rem] w-[22rem] h-[2.6rem] rounded-lg mb-[4rem] hover:bg-[#239165] hover:text-black hover:border-transparent bg-transparent text-white'
       >Leaders</button>
             </Link>
             </div>  
             </div>
    </div>
    
  
  )
}

export default CardWhole
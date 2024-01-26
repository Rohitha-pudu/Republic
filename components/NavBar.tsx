import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='h-[10vh] bg-black' >
        <div className='w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between'>
            <div>
                <h1 className='text-white'>India</h1>
            </div>
            <div className='h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center'>
               <input 
               type="text"
               placeholder="Amendment 123"
               className='block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200'
               />
               <MagnifyingGlassIcon className='w-[1.8rem] h-[1.8rem] mr-[1.4rem] cursor-pointer'/>
            </div>
            <div className='flex items-center justify-center space-x-8' >
                <div className='relative'>
              
                    <HeartIcon className='w-[1.8rem] h-[1.8rem] cursor-pointer text-white'/>
                    <UserCircleIcon className='w-[1.8rem] h-[1.8rem] cursor-pointer text-white ml-9'/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default NavBar

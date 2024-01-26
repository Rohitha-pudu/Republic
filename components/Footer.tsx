import { HeartIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col-3 justify-center mt-9'>
        <h3 className=''>Made with  </h3>
        <div className='mt-3 pl-2'>
        <HeartIcon className='w-[1.8rem] h-[1.8rem] cursor-pointer text-[#ca5185]'/>
        </div>
        <h3 className='pl-2'>India</h3>
    </div>
  )
}

export default Footer
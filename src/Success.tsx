import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const Success = () => {
  return (
    <>
     <div className='flex grid w-full h-[120px] bg-[#102231]  justify-center items-center p-4 rounded-md'>
        <h1 className='flex font-bold items-center text-md text-white'> <FaCircleCheck /> Message Sent!</h1>
        <p className='text-gray-400 mt-2'>Thanks for completing the form. We'll be in touch soon</p>
     </div>
    </>
  )
}

export default Success
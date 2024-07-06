import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const Success = () => {
  return (
    <>
     <div className='flex grid w-[450px] h-[100px] bg-[#102231]  justify-center items-center p-2 rounded-md opacity-95'>
        <h1 className='flex font-bold items-center text-xl text-white'> <FaCircleCheck /> <span className='pl-2'> Message Sent! </span></h1>
        <p className='text-gray-400'>Thanks for completing the form. We'll be in touch soon</p>
     </div>
    </>
  )
}

export default Success
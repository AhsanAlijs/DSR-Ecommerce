import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'
import { BsTwitterX } from "react-icons/bs";

const CoacheCard = (props) => {
  return (
    <>
      <div>
        <h2 className='text-2xl font-semibold text-[#012555] max-sm:text-center max-sm:text-xl'>{props.head}</h2>

        <div className='mt-3 max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:justify-center max-sm:items-center'>
          <div className='flex items-center justify-between max-sm:flex-wrap max-sm:justify-start gap-4'>
            <span className='text-[#8A8A8A] text-xl max-sm:text-lg flex items-center gap-2'><FaUser className='text-[#E51A1A]'/> Name</span>
            <h4 className='text-xl font-medium max-sm:text-sm'>{props.name}</h4>
          </div>
          <div className='flex items-center justify-between max-sm:flex-wrap max-sm:justify-start gap-4 mt-2'>
            <span className='text-[#8A8A8A] text-xl max-sm:text-lg flex items-center gap-2'><IoCall className='text-[#E51A1A]'/> Phone</span>
            <h4 className='text-xl font-medium max-sm:text-sm'>{props.phone}</h4>
          </div>
          <div className='flex items-center justify-between max-sm:flex-wrap max-sm:justify-start gap-4 mt-2'>
            <span className='text-[#8A8A8A] text-xl max-sm:text-lg flex items-center gap-2'><HiMail className='text-[#E51A1A]'/> Email</span>
            <h4 className='text-xl font-medium max-sm:text-sm'>{props.email}</h4>
          </div>
          <div className='flex items-center justify-between max-sm:flex-wrap max-sm:justify-start gap-4 mt-2'>
            <span className='text-[#8A8A8A] text-xl max-sm:text-lg flex items-center gap-2'><BsTwitterX className='text-[#E51A1A]'/> Twitter</span>
            <h4 className='text-xl font-medium max-sm:text-sm'>{props.twitter}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoacheCard
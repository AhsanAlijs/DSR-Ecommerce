import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const UserCard = (props) => {
  return (
    <>
      <div className='bg-white p-4 rounded-xl flex items-center justify-between max-sm:flex-wrap max-sm:gap-4 max-sm:justify-center'>
        <div className='flex items-center gap-2 max-sm:flex-wrap'>
          <FaUserCircle className='text-[#012555] text-5xl max-sm:text-3xl' />
          <div>
            <h2 className='text-xl font-medium max-md:text-sm'>{props.name}</h2>
            <p className='max-md:text-xs'>{props.work}</p>
          </div>
        </div>
        <div className='flex flex-col items-end max-md:text-xs max-sm:items-center'>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
      </div>
    </>
  )
}

export default UserCard
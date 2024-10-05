import React from 'react'

const HomeCard2 = (props) => {
  return (
    <>
      <div className='bg-white p-6 rounded-[10px] border border-[#E9E9E9]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[#012555] text-lg font-semibold'>{props.head}</h2>
          <button className='text-[#E51A1A] text-lg font-semibold'>Edit</button>
        </div>
        <p className='text-xl mt-3'>{props.date}</p>
        <p className='text-xl mt-3'>{props.city}</p>
      </div>
    </>
  )
}

export default HomeCard2
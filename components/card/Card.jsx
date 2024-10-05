import React from 'react'

const Card = (props) => {
    const {title,num} = props 
  return (
    <div className='border-2 rounded-md border-[#012555] hover:bg-[#012555] transition-[600ms] cursor-pointer hover:text-white p-5'>
        <p className='text-sm '>{title}</p>
        <p className='text-4xl max-md:text-2xl pt-3 font-medium '>{num}</p>
    </div>
  )
}

export default Card
import React from 'react'

const MatricsCard = (props) => {
  return (
    <>
      <div className='bg-white border border-[#01255514] p-8 max-md:p-4 max-sm:p-3 rounded-lg shadow-[0_4px_20px_rgba(238,238,238,50)]'>
        <h3 className='text-3xl font-semibold text-[#012555] text-center max-md:text-2xl max-sm:text-xl'>{props.value}</h3>
        <p className='text-center mt-2 max-md:text-sm max-sm:text-xs'>{props.head}</p>
      </div>
    </>
  )
}

export default MatricsCard
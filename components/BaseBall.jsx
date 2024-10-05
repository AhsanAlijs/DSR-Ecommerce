import Link from 'next/link'
import React from 'react'

const BaseBall = () => {
  return (
    <>
    <div className='bg-[#012555] '>
      <div className=' flex  flex-col py-20 max-w-screen-2xl px-10 max-md:px-4 mx-auto justify-center items-center text-white' >
        <h3 className='lg:text-[2.5rem] sm:text-[2rem] text-[1rem]'>We focus soley on</h3>
        <h1 className='lg:text-[3.5rem] sm:text-[2.5rem] text-[1.5rem] py-7 font-bold'>Baseball & Softball Athletes</h1>
        <div className='flex gap-5'>
        <Link href="/pricing" className='bg-white hover:bg-[#ffffffad] transition-all text-[#012555] p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Get Recruited</Link>
        <Link href="/pricing" className='bg-[#012555] border-2 border-white hover:bg-white hover:text-[#012555] transition-all text-white p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Join Today</Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default BaseBall
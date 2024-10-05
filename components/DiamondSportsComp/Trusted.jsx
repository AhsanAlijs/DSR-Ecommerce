import React from 'react'

import Image from 'next/image'; // Import Image from next/image
import trusted from '../../assets/DiamondSports/Mask group.png'

const Trusted = () => {
  return (
   <>
   <div className='bg-[#012555] text-white py-20'>
  <div className='grid-cols-[70%_auto] max-sm:grid-cols-1 grid-rows-[auto_1fr] grid gap-2 px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5'>
    <h1 className='xl:text-[3.5rem] lg:text-[3rem] sm:text-[2rem] py-7 font-medium max-sm:text-center'>
      Trusted by Softball & Baseball student-athletes from across the USA
    </h1>
    <Image
      className="object-cover object-center rounded max-sm:w-20 justify-self-center"
      alt="hero"
      src={trusted}
      width={190}
      height={190}
    />
  </div>
</div>
   </>
  )
}

export default Trusted
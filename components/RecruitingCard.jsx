import React from 'react'

import card1 from '@/assets/recruiting-page/card1.png'
import Image from 'next/image'
import profile from '@/assets/recruiting-page/profile.png'

const RecruitingCard = (props) => {
  return (
    <>
        <div>
            <Image className='rounded-[30px] max-md:w-full h-[300px] object-cover max-xl:h-[250px] max-sm:h-auto' src={props.image} alt='img' width={553} height={300}/>

            <div className='mt-12 flex gap-8 items-center'>
                <h5 className='text-xs'>2024-04-24</h5>
                <h4 className='text-xs font-medium bg-[#F8F8F8F8] p-1 px-2 rounded-md drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)]'>Recruiting Tips</h4>
            </div>
            <div>
                <h2 className='text-xl font-semibold text-[#012555] mt-4 max-xl:text-lg'>{props.head}</h2>
                <p className='mt-4 max-xl:text-sm'>{props.para}</p>
            </div>
            <div className='mt-6 flex items-center gap-6'>
                <Image src={profile} alt='img' width={50} height={50}/>
                <div>
                    <h3 className='max-xl:text-sm font-semibold text-[#012555]'>Colin McAtee</h3>
                    <p className='max-xl:text-sm'>Founder of ProductiveRecruit</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default RecruitingCard
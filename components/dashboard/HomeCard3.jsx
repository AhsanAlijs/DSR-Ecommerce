import Image from 'next/image'
import React from 'react'
import ballImage from '@/assets/dashboard/ball-img.png'
import profileUser from '@/assets/dashboard/profile-user.svg'
import playBtn from '@/assets/dashboard/playBtn.svg'

const HomeCard3 = (props) => {
  return (
    <>
      <div className='bg-[#012555] rounded-2xl text-white'>
        <div className='relative'>
          <Image className='w-full rounded-t-2xl' src={props.cardBanner} alt='img' width={481} height={356}/>
          <div className='absolute -bottom-7 right-4'>
            <div className='flex items-center justify-center cursor-pointer bg-white p-4 rounded-full w-[60px] h-[60px]'>
              <Image className='mx-auto' src={playBtn} alt='img' width={23} height={26}/>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <span className='flex items-center gap-2 text-[#B7B9D2]'>
            <Image src={props.profileImage} alt='img' width={37} height={37}/>
             {props.userName}
          </span>
          <p className='mt-4 text-lg'>{props.videoTitle}</p>
          <p className='text-[#808191] text-sm mt-4'><span>{props.views}</span>  •  <span>{props.weeks}</span></p>
        </div>
      </div>
    </>
  )
}

export default HomeCard3
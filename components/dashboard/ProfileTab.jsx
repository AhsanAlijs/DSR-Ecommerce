'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ProfileTab = ({children}) => {

  const pathname = usePathname()

  return (
    <>
      <div className='grid grid-cols-[25%_auto] max-lg:grid-cols-1 items-start'>
        <div className='bg-[#F0F1F3] p-6 py-10 lg:sticky lg:top-[82px]  max-lg:w-full rounded-r-xl grid grid-cols-1 max-lg:grid-cols-2 gap-4 max-[500px]:grid-cols-1 max-sm:p-4 max-sm:py-6'>
          <Link href='/dashboard/player-profile' className={`${pathname === '/dashboard/player-profile' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>Personal Information</Link>
          <Link href='/dashboard/player-profile/team' className={`${pathname === '/dashboard/player-profile/team' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>Team (Club & High School)</Link>
          <Link href='/dashboard/player-profile/media' className={`${pathname === '/dashboard/player-profile/media' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>Media & Social Presence</Link>
          <Link href='/dashboard/player-profile/my-events' className={`${pathname === '/dashboard/player-profile/my-events' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>My Events</Link>
          <Link href='/dashboard/player-profile/athletic-information' className={`${pathname === '/dashboard/player-profile/athletic-information' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>Athletic Information</Link>
          <Link href='/dashboard/player-profile/academic-information' className={`${pathname === '/dashboard/player-profile/academic-information' ? "bg-[#012555] hover:bg-[#012555c4] text-white" : "bg-white hover:bg-[#dddddd]"} transition-all p-3 px-10 rounded-[10px] max-lg:px-6 max-lg:text-center max-lg:text-sm max-[500px]:text-xs`}>Academic Information</Link>

        </div>
        <div className='p-6 max-sm:p-4'>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProfileTab
import HomeCard from '@/components/dashboard/HomeCard'
import React from 'react'
import companyLogo from '@/assets/dashboard/company-logo.png'
import profileUser from '@/assets/dashboard/profile-user.svg'
import ballImage from '@/assets/dashboard/ball-img.png'
import HomeCard2 from '@/components/dashboard/HomeCard2'
import HomeCard3 from '@/components/dashboard/HomeCard3'
import Link from 'next/link'

const page = () => {

  const cardArr = [
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%",
      id: 1234
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%",
      id: 5678
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%",
      id: 9876
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%",
      id: 8769
    },
  ]

  const cardArr2 = [
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
  ]

  const cardArr3 = [
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
  ]
  return (
    <>
    <div className=''>
      <div className=' grid grid-cols-[55%_auto] gap-6 max-lg:grid-cols-1'>
        <div className=''>
          <h2 className='text-lg font-semibold'>Favorites</h2>
          <div className='h-[900px] overflow-y-auto mt-6'>
            <div className='flex flex-col gap-6  '>
              {cardArr.map((item, index)=>{
                return <HomeCard index={index} id={item.id} image={item.image} head={item.head} description={item.description} web={item.web} location={item.location} tuitionCost={item.tuitionCost} acceptanceRate={item.acceptanceRate} key={index}/>
              })}   
            </div>
          </div>
        </div>
        <div className=''>
          <h2 className='text-lg font-semibold'>My Events</h2>
          <div className='h-[900px] overflow-y-auto mt-6'>
            <div className='flex flex-col gap-6  '>
              {cardArr2.map((item, index)=>{
                return <HomeCard2 key={index} head={item.head} date={item.date} city={item.city}/>
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Tutorials</h2>
          <Link href='/dashboard/tutorials' className='p-2 px-8 text-lg rounded-xl bg-[#012555] hover:bg-[#012555b6] text-white transition-all'>View All</Link>
        </div>

        <div className='grid grid-cols-4 gap-4 mt-6 max-xl:grid-cols-2 max-md:grid-cols-1'>
          {cardArr3.map((item, index)=>{
            return <HomeCard3 cardBanner={item.cardHeader} profileImage={item.userImage} userName={item.userName} videoTitle={item.videoTitle} views={item.views} weeks={item.date}/>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default page
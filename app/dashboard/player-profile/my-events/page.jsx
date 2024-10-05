import HomeCard2 from '@/components/dashboard/HomeCard2'
import React from 'react'

const page = () => {

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
  return (
    <>
      <div>
          <div className='flex items-center justify-between '>
            <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>My Events</h2>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Add New Events</button>
          </div>
          
          <h5 className='mt-4'>Past Events</h5>
          <div className='flex flex-col gap-6 mt-4'>
              {cardArr2.map((item, index)=>{
                return <HomeCard2 key={index} head={item.head} date={item.date} city={item.city}/>
              })}
            </div>
      </div>
    </>
  )
}

export default page
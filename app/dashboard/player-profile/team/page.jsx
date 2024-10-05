import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>Club Team</h2>
          <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Upload Photo</button>
        </div>

        <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="club-name" className='md:text-lg'>Club Name</label>
              <input id='club-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Club Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="team-name" className='md:text-lg'>Team Name</label>
              <input id='team-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Team Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="jersey" className='md:text-lg'>Jersey Number</label>
              <input id='jersey' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Jersey Number' />
            </div>
        </div>

        <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Coach Information</h3>
        <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="first-name" className='md:text-lg'>First Name</label>
              <input id='first-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='First Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="last-name" className='md:text-lg'>Last Name</label>
              <input id='last-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Last Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='md:text-lg'>Email</label>
              <input id='email' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="email" placeholder='Coach Email' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='md:text-lg'>Phone Number</label>
              <input id='phone' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Coach Phone Number' />
            </div>
        </div>


        <div className='flex items-center justify-between mt-8'>
          <h2 className='text-3xl font-semibold max-lg:mt-2 max-md:text-2xl'>High School Team</h2>
          <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Upload Photo</button>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col col-span-2 max-md:col-span-1'>
              <label htmlFor="high-school" className='md:text-lg'>High School</label>
              <input id='high-school' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Club Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="city" className='md:text-lg'>City</label>
              <input id='city' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Club Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="state" className='md:text-lg'>State</label>
              <input id='state' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Team Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email-high" className='md:text-lg'>Your Email</label>
              <input id='email-high' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="email" placeholder='Your Email' />
            </div>
        </div>


        <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Coach Information</h3>
        <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="first-name-coach" className='md:text-lg'>First Name</label>
              <input id='first-name-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='First Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="last-name-coach" className='md:text-lg'>Last Name</label>
              <input id='last-name-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Last Name' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email-coach" className='md:text-lg'>Email</label>
              <input id='email-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="email" placeholder='Coach Email' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone-coach" className='md:text-lg'>Phone Number</label>
              <input id='phone-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Coach Phone Number' />
            </div>
        </div>
      </div>
    </>
  )
}

export default page
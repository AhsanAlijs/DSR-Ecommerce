import Image from 'next/image'
import React from 'react'
import userImage from '@/assets/dashboard/profile/user.jpeg'

const page = () => {
  return (
    <>
      <div>
        <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>Personal Information</h2>
        <div className='flex items-center gap-8 max-md:flex-wrap max-sm:justify-center'>
          <div className='relative mt-6 '>
            <Image className='w-[300px] h-[300px] max-lg:w-48 max-lg:h-48 max-md:w-36 max-md:h-36 object-cover rounded-full' src={userImage} width={300} height={300} alt='img'/>
          </div>
          <div className='w-[50%] max-lg:w-[80%] max-md:w-full max-sm:text-center'>
            <h2 className='text-3xl font-semibold mb-2 max-sm:text-2xl'>Musfiq Arham</h2>
            <p className='max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in efficitur mi. Donec sollicitudin tellus sed nibh commodo vehicula. Integer aliquam ac nisl tristique aliquam.</p>
          </div>
        </div>


        <div className='mt-8 grid grid-cols-2 gap-4 gap-y-6 max-md:grid-cols-1 max-md:gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="first-name" className='md:text-lg'>First Name</label>
            <input id='first-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='First Name' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="last-name" className='md:text-lg'>Last Name</label>
            <input id='last-name' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Last Name'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='md:text-lg'>Email</label>
            <input id='email' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="email" placeholder='Your Email'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone-number" className='md:text-lg'>Phone Number</label>
            <input id='phone-number' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Your Phone Number'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="date" className='md:text-lg'>Date of Birth</label>
            <input id='date' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="date" placeholder='Your Phone Number'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="graduation" className='md:text-lg'>Graduation Year</label>
            <input id='graduation' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='yyyy'/>
          </div>
          <div className='flex flex-col col-span-2 max-md:col-span-1'>
            <label htmlFor="address" className='md:text-lg'>Home Address</label>
            <input id='address' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Add your City and State here'/>
          </div>
          <div className='flex flex-col col-span-2 max-md:col-span-1'>
            <label htmlFor="about" className='md:text-lg flex justify-between items-center mb-2'>About Me <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Upload Photo</button></label>
            {/* <input id='about' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Add your City and State here'/> */}
            <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' rows={4} name="" id="about" placeholder='Allow coaches to get to know you better by writing a short personal statement introducing yourself. Please note, this will appear on your public profile.'></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
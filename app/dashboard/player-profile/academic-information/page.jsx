import React from 'react'
import { IoSearch } from 'react-icons/io5';
import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {

  const transcriptsArr = [
    {
      name: "June 2024 Transcripts"
    },
    {
      name: "June 2024 Transcripts"
    },
    {
      name: "June 2024 Transcripts"
    },
    {
      name: "June 2024 Transcripts"
    },
    {
      name: "June 2024 Transcripts"
    },
    {
      name: "June 2024 Transcripts"
    },
  ]
  return (
    <>
      <div>
         <h2 className='text-3xl font-semibold  max-sm:text-2xl'>Academic Information</h2>
         <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Academic Status</h3>

         <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col col-span-2 max-md:col-span-1'>
              <label htmlFor="first-name-coach" className='md:text-lg'>GPA</label>
              <div className='flex gap-2 w-full items-center max-md:flex-wrap max-md:justify-center'>
                <input id='first-name-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='3.6' />
                <p className='w-40 text-center'>Out of</p>
                <input id='first-name-coach' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='4' />
              </div>
            </div>
            <div className='flex flex-col col-span-2 max-md:col-span-1'>
              <label htmlFor="class" className='md:text-lg'>Class Rank</label>
              <div className='flex gap-2 w-full items-center max-md:flex-wrap max-md:justify-center'>
                <input id='class' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='0' />
                <p className='w-40 text-center'>Out of</p>
                <input id='class' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='0' />
              </div>
            </div>
            <div className='flex flex-col col-span-2 max-md:col-span-1'>
              <label htmlFor="eligibility" className='md:text-lg'>NCAA Eligibility No</label>
                <input id='eligibility' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' type="text" placeholder='323865423' />
            </div>
          </div>

          <h3 className='text-2xl font-semibold mt-8 max-sm:text-xl'>SAT</h3>

          <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col max-xl:col-span-2 max-lg:col-span-1'>
              <label htmlFor="math" className='md:text-lg'>Math</label>
                {/* <input id='math' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' type="text" placeholder='323865423' /> */}
                <select className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' name="" id="math">
                  <option value="210">210</option>
                  <option value="200">200</option>
                  <option value="190">190</option>
                </select>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="writing" className='md:text-lg'>Reading & Writing</label>
                {/* <input id='math' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' type="text" placeholder='323865423' /> */}
                <select className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' name="" id="writing">
                  <option value="320">320</option>
                  <option value="310">310</option>
                  <option value="300">300</option>
                </select>
            </div>
            <div className='flex flex-col col-span-2 max-xl:col-span-3 max-md:col-span-1'>
              <label htmlFor="total" className='md:text-lg'>Total</label>
                <input id='total' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' type="text" placeholder='Total numbers' />
            </div>
          </div>


          <h3 className='text-2xl font-semibold mt-8 max-sm:text-xl'>ACT</h3>

          <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col col-span-2 max-md:col-span-1'>
                <label htmlFor="total-act" className='md:text-lg'>Total</label>
                  <select className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' name="" id="writing">
                    <option value="Total numbers">Total numbers</option>
                    <option value="some members">some members</option>
                  </select>
              </div>
          </div>

          <div className='flex items-center justify-between mt-8'>
            <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>Transcripts</h2>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Add New Transcripts</button>
          </div>

          <h3 className='mt-2 max-sm:text-sm'>Click and draw the rows below to record your Transcripts.</h3>

          <div className='bg-white mt-6 rounded-2xl'>
          {transcriptsArr.map((item, index) => (
            <div key={index}>
              <span className='flex items-center justify-between gap-4 p-4 px-6'>
                <h2 className='text-xl font-semibold max-sm:text-sm'>{item.name}</h2>
                <div className='flex items-center gap-4 text-[#E51A1A]'>
                  <button className='font-semibold text-lg underline max-sm:text-sm'>Edit</button>
                  <button><RiDeleteBin6Line className='text-xl max-sm:text-lg' /></button>
                </div>
              </span>
              {index < transcriptsArr.length - 1 && <hr />}
            </div>
          ))}
          </div>



          <h2 className='text-3xl font-semibold mt-8 max-sm:text-2xl'>Academic Honors</h2>

          <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-4 outline-none w-full' placeholder='Add text here' rows={4} name="" id=""></textarea>


          <h2 className='text-3xl font-semibold mt-8 max-sm:text-2xl'>Extracurricular Activities</h2>

          <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-4 outline-none w-full' placeholder='Add text here' rows={4} name="" id=""></textarea>



          <h2 className='text-3xl font-semibold mt-8 max-sm:text-2xl'>Indented Major/Area of Study</h2>
           <div className='flex flex-col  mt-4'>
              <label htmlFor="ques" className='md:text-lg'>What is the major area of study you plan to pursue iin college?</label>
                <input id='ques' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none ' type="text" placeholder='Sports Management/Business or Marketing' />
            </div>



          <h2 className='text-3xl font-semibold mt-8 max-sm:text-2xl'>College Commitment</h2>
          <h3 className='text-2xl mt-4 max-md:text-xl max-sm:text-sm'>Have you committed to a college program?</h3>
            <div className='flex flex-col mt-4'>
              <label htmlFor="search" className='md:text-lg'>Search for your School Below</label>
              <div className='flex items-center relative'>
                <IoSearch className='text-3xl absolute left-3 top-4' />
                <input id='search' className='bg-white border border-[#012555] p-3 px-4 pl-12 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='Search here...' />
              </div>
            </div>


          <div className='flex mt-8 max-md:justify-center'>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-3 px-20 rounded-xl max-sm:text-sm'>Save</button>
          </div>

      </div>
    </>
  )
}

export default page
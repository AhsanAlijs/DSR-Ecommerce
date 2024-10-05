import React from 'react'

const page = () => {
  return (
    <>
      <div>
          <div className='flex items-center justify-between '>
            <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>Videos</h2>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Embed Youtube Video</button>
          </div>
          <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Add your Videos here</h3>

          <div className="flex items-center justify-center w-full mt-6">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 px-4 max-sm:h-52 border-4 max-md:border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
            <h2 className='text-2xl max-sm:text-lg text-center'>Upload your video here</h2>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all mt-6 max-sm:mt-3 text-white p-2 px-4 rounded-xl max-sm:text-sm'>Upload Video</button>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> 

          <h2 className='text-3xl font-semibold max-sm:mt-4 max-sm:text-2xl mt-6'>Social Profiles</h2>
          <div className='mt-4 grid grid-cols-2 gap-4 gap-y-6 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="instagram" className='md:text-lg'>Instagram Handle</label>
              <input id='instagram' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='@' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="twitter" className='md:text-lg'>Twitter Handle</label>
              <input id='twitter' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='@' />
            </div>
          </div>
      </div>
    </>
  )
}

export default page
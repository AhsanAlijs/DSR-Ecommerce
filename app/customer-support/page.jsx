import React from 'react'

const page = () => {
  return (
    <>
      <div className='max-w-screen-2xl px-10 max-md:px-4 mx-auto mt-20 max-md:mt-[10%] mb-10'>
        <h1 className='text-6xl font-bold text-center  max-md:text-3xl'>We Want To Hear From You!</h1>
        <h2 className='text-2xl mt-8 max-md:mt-4 font-medium text-center max-md:text-lg'>Let us know how we can help, one of our team members will be in touch shortly!</h2>

        <form className='grid grid-cols-2 mt-14 w-[1200px] max-xl:w-full max-md:mt-8 max-md:w-full mx-auto gap-10 max-sm:gap-6'>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="first">First Name:*</label>
            <input id='first' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='John'/>
          </div>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="last">Last Name:*</label>
            <input id='last' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='Doe'/>
          </div>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="email">Email Address:* </label>
            <input id='email' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="email" placeholder='jane@email.com'/>
          </div>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="number">Phone Number (Optional):</label>
            <input id='number' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="number" placeholder='(123) 456-7890'/>
          </div>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="inquiry">Inquiry Type:*</label>
            <select defaultValue='test' name="" id="inquiry" className='border-2 border-[#DADADA] bg-white p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3 cursor-pointer'>
              <option value="">Select</option>
              <option value="test">Test</option>
              <option value="test1">Test1</option>
            </select>
          </div>
          <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="message">Message:*</label>
            <textarea rows={6} className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' name="" id="message" placeholder='Enter your Message'></textarea>
          </div>

          <div className='col-span-2 w-[50%] mx-auto'>
            <button className='bg-[#012555] w-full hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Send</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default page
'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Page = () => {
  const searchParams = useSearchParams()
  const subscription = searchParams.get('subscription')

  console.log(subscription);

  return (
    <div className='max-w-screen-2xl px-10 max-md:px-4 mx-auto mt-20 max-md:mt-[10%] mb-10 max-sm:mb-[10%]'>
      <h2 className='text-5xl font-bold text-center text-[#012555] w-[60%] mx-auto max-xl:w-full max-lg:text-2xl'>
        Get Started Today with Diamond Sports Recruiting!
      </h2>

      <form className='grid grid-cols-2 mt-14 w-[1200px] max-xl:w-full max-md:mt-8 max-md:w-full mx-auto gap-10 max-sm:gap-6'>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="first">Athlete's First Name:*</label>
          <input id='firstName' name='firstName' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='John'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="last">Athlete's Last Name:*</label>
          <input id='lastName' name='lastName' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='Doe'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="email">Athlete's Email Address:*</label>
          <input id='email' name='email' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="email" placeholder='jane@email.com'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="number">Athlete's Cell #:</label>
          <input id='phoneNumber' name='phoneNumber' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="number" placeholder='(123) 456-7890'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="inquiry">Athlete's Graduation Year:*</label>
          <select defaultValue='' name="graduationYear" id="inquiry" className='border-2 border-[#DADADA] bg-white p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3 cursor-pointer'>
            <option value="">Select</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="password">Password:</label>
          <input id='password' name='password' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="password" placeholder='●●●●●●'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="confirm-password">Confirm Password:</label>
          <input id='confirm-password' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="password" placeholder='●●●●●●'/>
        </div>

        {subscription === "monthly" ? (
          <div className='bg-[#012555] text-white col-span-2 p-6 max-sm:p-4'>
            <h2 className='text-3xl font-semibold text-center max-sm:text-2xl'>Monthly Access billed at:</h2>
            <p className='text-2xl text-center mt-4 max-sm:text-xl'>
              <span className='text-4xl font-bold max-sm:text-3xl text-[#E1E1E1]'>$15 /</span> monthly subscription
            </p>
          </div>
        ) : (
          <div className='bg-[#012555] text-white col-span-2 p-6 max-sm:p-4'>
            <h2 className='text-3xl font-semibold text-center max-sm:text-2xl'>Annual Access billed at:</h2>
            <p className='text-2xl text-center mt-4 max-sm:text-xl'>
              <span className='text-4xl font-bold max-sm:text-3xl text-[#E1E1E1]'>$150 /</span> annual subscription
            </p>
          </div>
        )}

        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="card-name">Credit Card Name:*</label>
          <input id='card-name' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='John'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="card-num">Credit Card #:*</label>
          <input id='card-num' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="number" placeholder='Enter Card Number'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="expiration">Expiration Date:* </label>
          <input id='expiration' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="text" placeholder='11/2026'/>
        </div>
        <div className='flex flex-col w-full gap-2 max-md:col-span-2'>
          <label className='font-semibold max-sm:text-sm' htmlFor="security-code">Card Security Code(CSC or CVC):*</label>
          <input id='security-code' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="number" placeholder='012'/>
        </div>

        <div className='col-span-2 w-[50%] mx-auto max-sm:w-[80%]'>
          <button className='bg-[#012555] w-full hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>
            Join Diamond Sports Recruiting
          </button>
        </div>
      </form>

      <p className='text-lg mt-28 text-center max-md:text-sm max-md:mt-16'>
        By clicking "Join Diamond Sports Recruiting" you agree to be bound by our 
        <span className='text-[#2E8EC3] cursor-pointer'> Terms of Service</span>, 
        <span className='text-[#2E8EC3] cursor-pointer'> Privacy Policy</span>,  
        and <span className='text-[#2E8EC3] cursor-pointer'> EULA.</span>
      </p>
    </div>
  )
}

const PageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
        <Page />
  </Suspense>
);

export default PageWrapper;
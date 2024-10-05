import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <>
      <div className='max-w-screen-2xl px-10 max-md:px-4 mx-auto mt-20 max-md:mt-[10%] mb-16 max-sm:mb-[10%]'>
        <h1 className='text-6xl font-bold text-center  max-md:text-3xl'>Welcome back</h1>
        <h2 className='text-2xl mt-8 max-md:mt-4 font-medium text-center max-md:text-lg'>Welcome back! Please enter your details</h2>


        <form className='flex flex-col items-center mt-14 w-[500px] max-md:mt-8 max-md:w-full mx-auto gap-6'>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="email">Email</label>
            <input id='email' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="email" placeholder='Enter your email'/>
          </div>

          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold max-sm:text-sm' htmlFor="password">Password</label>
            <input id='password' className='border-2 border-[#DADADA] p-3 px-4 rounded-xl outline-none max-sm:p-2 max-sm:px-3' type="password" placeholder='●●●●●●'/>
          </div>

          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center gap-2'>
              <input id='remember' type="checkbox" className='cursor-pointer size-4 accent-[#012555ad]' />
              <label className='font-semibold cursor-pointer max-sm:text-sm' htmlFor="remember">Remember me</label>
            </div>
            <Link href={''} className='text-[#E51A1A] font-semibold max-sm:text-sm hover:text-[#e51a1abd] transition-all'>Forgot Password?</Link>
          </div>

          <button className='bg-[#012555] w-full hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Sign In</button>
          <button className='flex items-center gap-2 justify-center border-2 border-[#DADADA] w-full hover:bg-[#DADADA] transition-all p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'> <FcGoogle className='text-3xl max-sm:text-xl'/> Sign in with Google</button>
        </form>

        <div className='text-center mt-10 font-medium md:text-lg '>Don’t have an account yet? <Link href={'/pricing'} className='text-[#012555] font-semibold hover:text-[#012555ad]'>Sign up</Link></div>
      </div>
    </>
  )
}

export default page
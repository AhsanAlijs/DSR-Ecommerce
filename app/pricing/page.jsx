import React from 'react'
import tick from '@/assets/tick.svg'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-20'>
        <h2 className='text-2xl font-semibold text-[#012555] text-center w-[40%] max-xl:w-[70%] max-sm:w-[80%] mx-auto mt-14'>Innovative Recruiting Tools and Resources to Help YOU Get Recruited</h2>
        <p className='text-center w-[40%] max-xl:w-[70%] max-sm:w-[80%] mx-auto mt-4'>Our pricing is simple, you pay for the number of active athlete accounts that you need. If you need more you can upgrade. Pay yearly to get two months free (20% off). All features included.</p>


        <div className='flex justify-center gap-10 mt-10 flex-wrap'>
          <div className=' shadow-[0_0px_4px_rgba(0,0,0,0.25)] p-8 rounded-[40px] w-fit max-sm:w-full'>
            <div className='w-[400px] max-sm:w-full'>
              <h3 className='text-xl font-semibold text-[#012555] text-center'>Individual Athlete Monthly Access</h3>

              <h2 className='text-2xl text-[#8E8CA1] flex items-center gap-2 mt-4'><span className='text-5xl font-bold text-[#231D4F]'>$15</span> / monthly subscription</h2>
              <p className='font-[500] text-lg mt-2 mx-auto'>Subscription will renew automatically each month until cancelled.</p>
              <p className='text-sm mt-4'>For individual softball and baseball athletes who are looking to pave their path to an athletic scholarship!</p>
            </div>

            <h4 className='font-semibold mt-4 w-fit'>Features:</h4>
            <div className='mt-4 flex flex-col gap-4 mx-auto items-start w-[350px] max-sm:w-full'>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Online Player Profile</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Diamond College Best Fit Finder</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Access to ALL College Softball & Baseball Coaches Contact Info</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Unlimited College Favorites</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Monthly recruiting tips and advice</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Communication Templates</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Expert Guidance</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>All Other Features</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Dedicated Customer Support</span>
              </p>
            </div>

          <div className='flex justify-center mt-6'>
            <Link href="/signup?subscription=monthly" className='bg-[#012555] hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Subscribe</Link>
          </div>

          </div>

          <div className=' shadow-[0_0px_4px_rgba(0,0,0,0.25)] p-8 rounded-[40px] w-fit max-sm:w-full bg-[#012555]'>
            <div className='w-[400px] max-sm:w-full'>
              <h3 className='text-xl font-semibold text-white text-center'>Individual Athlete Monthly Access</h3>

              <h2 className='text-2xl text-[#8E8CA1] flex items-center gap-2 mt-4'><span className='text-5xl font-bold text-[#FDFDFD]'>$150</span> / 1x annually</h2>
              <p className='font-[500] text-lg mt-2 mx-auto text-[#F2F2F2]'>Subscription will renew automatically until cancelled.</p>
              <p className='text-sm mt-4 text-white'>For individual softball and baseball athletes who are looking to pave their path to an athletic scholarship!</p>
            </div>

            <h4 className='font-semibold mt-4 w-fit text-white'>Features:</h4>
            <div className='mt-4 flex flex-col gap-4 mx-auto items-start w-[350px] max-sm:w-full'>
              <p className='flex items-center gap-2 '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Online Player Profile</span>
              </p>
              <p className='flex items-center gap-2'>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Diamond College Best Fit Finder</span>
              </p>
              <p className='flex items-center gap-2 '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Access to ALL College Softball & Baseball Coaches Contact Info</span>
              </p>
              <p className='flex items-center gap-2 '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Unlimited College Favorites</span>
              </p>
              <p className='flex items-center gap-2'>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Monthly recruiting tips and advice</span>
              </p>
              <p className='flex items-center gap-2 '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Communication Templates</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Expert Guidance</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>All Other Features</span>
              </p>
              <p className='flex items-center gap-2  '>
                <Image className='bg-white rounded-full' src={tick} alt='img' width={28} height={28}/>
                <span className='text-[#8E8CA1] font-medium'>Dedicated Customer Support</span>
              </p>
            </div>

          <div className='flex justify-center mt-6'>
            <Link href="/signup?subscription=annually" className='bg-white hover:bg-[#ffffffad] transition-all text-[#012555] p-2 px-6 text-xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Subscribe</Link>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default page
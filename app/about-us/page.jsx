import React from 'react'
import image1 from '@/assets/about/image1.png'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className='mb-16 max-md:mb-10'>

      <div className='bg-[#012555] p-14 py-16 text-white max-lg:p-8'>
        <h2 className='text-7xl font-bold max-w-screen-2xl mx-auto px-10 max-md:px-4 max-xl:text-5xl max-lg:text-3xl'>About Us</h2>
      </div>

      <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 my-16 flex gap-20 max-sm:gap-10 max-sm:text-sm max-xl:flex-wrap max-xl:flex-col-reverse max-xl:items-center'>
        <div>
          <p>Welcome to Diamond Sports Recruiting, the premier recruiting service dedicated exclusively to Baseball and Softball athletes. Founded on a passion for the game and a commitment to helping young student athletes achieve their dreams, our mission is to provide personalized, effective, and digital cutting-edge recruiting tools to aspiring college players.</p>
          <p className='mt-14 max-sm:mt-8'>At Diamond Sports Recruiting, we understand that each athlete’s journey is unique. That’s why we offer recruiting services designed to highlight your individual strengths and align with your academic and athletic goals. Our expertise in Baseball and Softball, combined with our advanced predictive analytics, sets us apart from other recruiting services. By focusing solely on these sports, we ensure that our athletes receive the specialized attention and resources they need to succeed.</p>
          <p className='mt-8 max-sm:mt-6'>Our comprehensive approach includes creating custom online player profiles, offering guidance on NCAA and NAIA eligibility requirements, assisting with highlight video production, and connecting you with college coaches through our extensive network. We pride ourselves on our ability to match athletes with the Diamond College best-fit college tool, increasing the chances of securing athletic scholarships and collegiate opportunities.</p>
          <p className='mt-8 max-sm:mt-6'>Founded by former D1 athletes and coaches, Diamond Sports Recruiting is built on a foundation of knowledge, dedication, and a deep understanding of the recruiting landscape. We are committed to supporting both athletes and their families throughout the recruiting process, providing valuable insights, ongoing communication, and personalized plans to help you reach your full potential.</p>
        </div>
        <Image className='w-[40%] h-full max-md:w-[60%] max-sm:w-[80%]' src={image1} alt='img' width={619} height={414}/>
      </div>

      <div className='mt-20 max-w-screen-2xl mx-auto px-10 max-md:px-4 max-sm:mt-8'>
        <p className='w-[65%] max-lg:w-full'><Link href={''} className='text-[#00A3FF]'>Join Diamond Sports Recruiting today</Link> and take the first step towards turning your college sports aspirations into reality. Let us be your trusted partner on Your Path to Athletic Scholarships.</p>
      </div>
    </div>
    </>
  )
}

export default page

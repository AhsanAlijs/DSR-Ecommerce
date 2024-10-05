import IntroBanner from '@/components/IntroBanner'
import Image from 'next/image'
import React from 'react'
import ball from '@/assets/paywall/ball1.png'
import baseball from '@/assets/paywall/baseball1.png'

const page = () => {
  return (
    <>
      <IntroBanner/>


      <div className='mb-16'>
        <div className='w-fit mx-auto'>
          <h2 className='text-3xl font-bold text-center max-sm:text-xl text-[#012555]'>Find Scholarships by State</h2>
          <hr className='border-4 border-red-600 w-[15%] max-sm:border-2'/>
          <p className='mt-2 text-sm'>Your Path to Athletic Scholarships</p>
        </div>


        <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 mt-10 flex gap-60 max-2xl:gap-40 max-lg:gap-20 max-md:flex-wrap max-md:mt-18 max-sm:gap-10'>
          <div className='flex flex-col max-md:items-center'>

            <Image src={ball} alt='img' width={42} height={42}/>
            <div className='w-fit mt-4 '>
              <h2 className='text-3xl font-bold max-sm:text-xl text-[#012555]'>Women's Sports</h2>
              <hr className='border-4 border-red-600 w-[15%] max-sm:border-2'/>
              <h3 className='mt-3 font-semibold max-md:text-center'>Softball</h3>
            </div>
            <p className='mt-2 max-sm:text-sm max-md:text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div className='flex flex-col max-md:items-center'>

            <Image src={baseball} alt='img' width={42} height={42}/>
            <div className='w-fit mt-4'>
              <h2 className='text-3xl font-bold max-sm:text-xl text-[#012555]'>Men's Sports</h2>
              <hr className='border-4 border-red-600 w-[15%] max-sm:border-2'/>
              <h3 className='mt-3 font-semibold max-md:text-center'>Baseball</h3>
            </div>
            <p className='mt-2 max-sm:text-sm max-md:text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>


      <div className='bg-[#012555] p-14 text-center  text-white max-md:px-8 max-sm:px-4'>
        <h2 className='text-4xl font-bold'>Athletic Scholarships</h2>
        <div className='w-[80%] max-xl:w-full transition-all mx-auto'>
          <p className='mt-8 max-sm:text-sm'>An athletic scholarship is a form of financial aid awarded to student-athletes based on their athletic abilities and performance. These scholarships are typically offered by colleges and universities to recruit talented athletes for their sports teams. Athletic scholarships can cover a range of expenses, including tuition, fees, room and board, and sometimes additional costs like books and equipment</p>
          <p className='mt-8 max-sm:text-sm'>There are two main types of athletic scholarships: full scholarships and partial scholarships. A full scholarship covers all the major expenses associated with attending college, while a partial scholarship covers a portion of these costs. Athletic scholarships are not just about sports performance; they also often require maintaining a certain academic standard and following team and university policies. Student-athletes receiving these scholarships are expected to commit to their sport, attend practices and games, and contribute positively to the team. These scholarships can provide a significant financial benefit to student-athletes, allowing them to pursue higher education while continuing to develop their athletic skills. They are awarded based on a combination of the athlete's skill level, the needs of the team, and the availability of funds within the athletic program.</p>
        </div>
      </div>
    </>
  )
}

export default page
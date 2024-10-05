import React from 'react'
import companyLogo from '@/assets/dashboard/company-logo.png'
import Image from 'next/image'
import UserCard from '@/components/dashboard/UserCard'

const page = () => {

  const headCoacheArr = [
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
  ]

  const assistantCoacheArr = [
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
    {
      name:"Kristi Bredbenner",
      work: "Head Coach",
      email: 'james12@gmail.com',
      phone: "+1 645 265 9403"
    },
  ]


  return (
    <>
      <div className='bg-white rounded-3xl shadow-[0_4px_24px_#0000000F] pb-6'>
        <div className='flex items-center gap-8 p-4 px-6 border-b-2 border-gray-300 flex-wrap max-sm:gap-6'>
          <div className='flex items-center gap-3 max-sm:flex-wrap max-sm:justify-center'>
            <div className='border border-black shadow-[0_0px_12px_rgba(0,0,0,0.07)] p-3 rounded-full'>
              <Image  src={companyLogo} alt='img' width={40} height={40}/>
            </div>
            <h2 className='text-2xl font-semibold max-sm:text-center'>Florida Institute of Technnology</h2>
          </div>

       
            <p className='text-xl font-medium max-md:text-sm'>Witchia</p>
            <p className='text-[#012555] max-md:text-sm bg-[#ECF4FF] p-2 px-4 rounded-full font-medium'>• NCAA Division 1</p>
            <p className='text-xl font-medium max-md:text-sm'>AAC</p>
          </div>

        <div className='grid grid-cols-2 gap-4 mt-6 mx-4 max-xl:grid-cols-1'>
          <div className='bg-[#F6F6F6] p-4 rounded-3xl'>
            <h2 className='text-xl font-semibold mb-4'>Head Coaches</h2>
            {headCoacheArr.map((item)=>{
              return <UserCard name={item.name} work={item.work} email={item.email} phone={item.phone}/>
            })}


            <h2 className='text-xl font-semibold my-4'>Assistant Coaches</h2>
            <div className='grid grid-cols-1 gap-4 h-[400px] overflow-y-auto'>
              {assistantCoacheArr.map((item)=>{
                return <UserCard name={item.name} work={item.work} email={item.email} phone={item.phone}/>
              })}
            </div>
          </div>

          <div className='bg-[#F6F6F6] p-4 rounded-3xl'>
            <h2 className='text-xl font-semibold mb-4'>Website and Email</h2>
              

            <div className='grid grid-cols-1 gap-4'>
              <div className='flex items-center justify-between bg-white p-4 rounded-xl max-md:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:text-sm'>
                <h4 className=''>Atheletic Website</h4>
                <p className='font-semibold'>www.goshockers.com</p>
              </div>
              <div className='flex items-center justify-between bg-white p-4 rounded-xl max-md:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:text-sm'>
                <h4 className=''>Recruiting Questionaire</h4>
                <p className='font-semibold'>www.recruitme.com</p>
              </div>
            </div>


            
          </div>
        </div>
      </div>

      <div className='bg-white rounded-3xl shadow-[0_4px_24px_#0000000F] pb-6 mt-8'>
        <div className='flex items-center gap-8 p-4 px-6 border-b-2 border-gray-300 flex-wrap max-sm:gap-6'>
          <div className='flex items-center gap-3 max-sm:flex-wrap max-sm:justify-center'>
            <div className='border border-black shadow-[0_0px_12px_rgba(0,0,0,0.07)] p-3 rounded-full'>
              <Image  src={companyLogo} alt='img' width={40} height={40}/>
            </div>
            <h2 className='text-2xl font-semibold max-sm:text-center'>Florida Institute of Technnology</h2>
          </div>

       
            <p className='text-xl font-medium max-md:text-sm'>Witchia</p>
            <p className='text-[#012555] max-md:text-sm bg-[#ECF4FF] p-2 px-4 rounded-full font-medium'>• NCAA Division 1</p>
            <p className='text-xl font-medium max-md:text-sm'>AAC</p>
          </div>

        <div className='grid grid-cols-2 gap-4 mt-6 mx-4 max-xl:grid-cols-1'>
          <div className='bg-[#F6F6F6] p-4 rounded-3xl'>
            <h2 className='text-xl font-semibold mb-4'>Head Coaches</h2>
            {headCoacheArr.map((item)=>{
              return <UserCard name={item.name} work={item.work} email={item.email} phone={item.phone}/>
            })}


            <h2 className='text-xl font-semibold my-4'>Assistant Coaches</h2>
            <div className='grid grid-cols-1 gap-4 h-[400px] overflow-y-auto'>
              {assistantCoacheArr.map((item)=>{
                return <UserCard name={item.name} work={item.work} email={item.email} phone={item.phone}/>
              })}
            </div>
          </div>

          <div className='bg-[#F6F6F6] p-4 rounded-3xl'>
            <h2 className='text-xl font-semibold mb-4'>Website and Email</h2>
              

            <div className='grid grid-cols-1 gap-4'>
              <div className='flex items-center justify-between bg-white p-4 rounded-xl max-md:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:text-sm'>
                <h4 className=''>Atheletic Website</h4>
                <p className='font-semibold'>www.goshockers.com</p>
              </div>
              <div className='flex items-center justify-between bg-white p-4 rounded-xl max-md:flex-wrap max-sm:justify-center max-sm:gap-4 max-sm:text-sm'>
                <h4 className=''>Recruiting Questionaire</h4>
                <p className='font-semibold'>www.recruitme.com</p>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </>
  )
}

export default page
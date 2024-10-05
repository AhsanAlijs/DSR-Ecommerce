import Image from 'next/image'
import React from 'react'
import companyLogo from '@/assets/dashboard/company-logo.png'
import { GiWorld } from "react-icons/gi";
import { PiMapPinAreaFill } from 'react-icons/pi';

const HomeCard = (props) => {
  return (
    <>
      <div className='p-6 bg-white rounded-[10px] border border-[#E9E9E9] shadow-[0_3.42px_17px_rgb(238,238,238,.7)]'>
        <div className='flex items-center gap-3 justify-between max-2xl:flex-wrap'>
          <div className='flex items-center gap-3'>
            <div className='border border-black shadow-[0_0px_12px_rgba(0,0,0,0.07)] p-3 rounded-full'>
              <Image  src={props.image} alt='img' width={34} height={34}/>
            </div>
            <h2 className='text-xl'>{props.head}</h2>
          </div>

          <div className='flex items-center gap-4'>
            <p className='flex items-center gap-2 text-lg'><GiWorld className='text-[#E51A1A] text-3xl'/>{props.web}</p>
            <p className='flex items-center gap-2 text-lg'><PiMapPinAreaFill className='text-[#E51A1A] text-3xl'/>{props.location}</p>
          </div>
        </div>

        <p className='mt-6 w-[90%]'>{props.description}</p>

        <div className='mt-6 flex items-center justify-between flex-wrap gap-4'>
          <div className='flex items-center gap-8'>
            <div>
              <p className='text-sm text-[#7C7C7C]'>Avg. Tuition Cost</p>
              <h3 className='text-lg text-[#E51A1A] font-semibold mt-1'>${props.tuitionCost} /year</h3>
            </div>
            <div>
              <p className='text-sm text-[#7C7C7C]'>Acceptance Rate</p>
              <h3 className='text-lg text-[#E51A1A] font-semibold mt-1'>{props.acceptanceRate}</h3>
            </div>
          </div>
          <div className='flex items-center gap-6 max-sm:flex-wrap max-sm:w-full'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2 '>
                <input className='cursor-pointer' type="checkbox" name="Compare" id={props.id} />
                <label className='font-semibold cursor-pointer' htmlFor={props.id}>Compare</label>
              </div>
              <div className='flex items-center gap-2 '>
                <input className='cursor-pointer' type="checkbox" name="save" id={props.index}/>
                <label className='font-semibold cursor-pointer' htmlFor={props.index}>Save</label>
              </div>
            </div>
            <button className='p-2 px-4 rounded-xl max-sm:w-full bg-[#012555] hover:bg-[#012555b6] text-white transition-all'>View Details</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
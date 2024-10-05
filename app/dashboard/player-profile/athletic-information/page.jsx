import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const page = () => {
  const transcriptsArr = [
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
    {
      name: "Ranked # 24 in 2025 Class by Showtime Sports"
    },
  ]

  return (
    <>
      <div>
        <h2 className='text-3xl font-semibold  max-sm:text-2xl'>Athletic Information</h2>
        <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Position</h3>

        <h4 className='text-xl mt-6 max-sm:text-lg'>Select your position(s)</h4>

        <div className='grid grid-cols-3 mt-4 gap-4'>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="p" />
            <label htmlFor="p">P</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="c" />
            <label htmlFor="c">C</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="1B" />
            <label htmlFor="1B">1B</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="2B" />
            <label htmlFor="2B">2B</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="3B" />
            <label htmlFor="3B">3B</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="INF" />
            <label htmlFor="INF">INF</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="UTL" />
            <label htmlFor="UTL">UTL</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="OF" />
            <label htmlFor="OF">OF</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="RF" />
            <label htmlFor="RF">RF</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="LF" />
            <label htmlFor="LF">LF</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="CF" />
            <label htmlFor="CF">CF</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="SS" />
            <label htmlFor="SS">SS</label>
          </div>
        </div>


        <h3 className='text-2xl font-semibold mt-6 max-sm:text-xl'>Stats</h3>

        <h4 className='text-xl mt-6 max-sm:text-lg'>Physical Attributes</h4>


          <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="Height" className='md:text-lg'>Height</label>
              <div className='flex items-center gap-2'>
                <input id='Height' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='Foot' />
                <input id='Height' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none w-full' type="text" placeholder='Inch' />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="Weight" className='md:text-lg'>Weight</label>
                <input id='Weight' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
          </div>



          <h4 className='text-xl mt-6 max-sm:text-lg'>Bats</h4>
          <div className='grid grid-cols-3 mt-4 gap-4'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="Left" />
              <label htmlFor="Left">Left</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="Right" />
              <label htmlFor="Right">Right</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="Switch" />
              <label htmlFor="Switch">Switch</label>
            </div>
          </div>


          <h4 className='text-xl mt-6 max-sm:text-lg'>Throws</h4>
          <div className='grid grid-cols-3 mt-4 gap-4'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="Left" />
              <label htmlFor="Left">Left</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" name="" id="Right" />
              <label htmlFor="Right">Right</label>
            </div>
          </div>


          <div className='grid grid-cols-2 gap-4 gap-y-6 mt-4 max-md:grid-cols-1 max-md:gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="Velo" className='md:text-lg'>FB(Best) Velo</label>
                <input id='Velo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="FBVelo" className='md:text-lg'>FB(Range) Velo</label>
                <input id='FBVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="INFVelo" className='md:text-lg'>INF Velo</label>
                <input id='INFVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="OFVelo" className='md:text-lg'>OF Velo</label>
                <input id='OFVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="CurveballVelo" className='md:text-lg'>Curveball Velo</label>
                <input id='CurveballVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="ChangeupVelo" className='md:text-lg'>Changeup Velo</label>
                <input id='ChangeupVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="H-1B" className='md:text-lg'>H-1B</label>
                <input id='H-1B' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="ExitVelo" className='md:text-lg'>Exit Velo (Tee)</label>
                <input id='ExitVelo' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="POP" className='md:text-lg'>POP</label>
                <input id='POP' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="YardTime" className='md:text-lg'>60 Yard Time</label>
                <input id='YardTime' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="10YardTime" className='md:text-lg'>10 Yard Time</label>
                <input id='10YardTime' className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-2 outline-none' type="text" placeholder='Kgs' />
            </div>
          </div>


        <div className='mt-6'>
          <label htmlFor="additional" className='md:text-lg'>Additional Statistics</label>
          <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-4 outline-none w-full' placeholder='Add text here' rows={4} name="" id=""></textarea>
        </div>

        <div className='mt-6'>
          <label htmlFor="additional" className='md:text-lg'>Other Sports Played</label>
          <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-4 outline-none w-full' placeholder='Add text here' rows={4} name="" id=""></textarea>
        </div>



          <div className='flex items-center justify-between mt-8'>
            <h2 className='text-3xl font-semibold max-lg:mt-2 max-sm:text-2xl'>Press Links</h2>
            <button className='bg-[#012555] hover:bg-[#012555c4] transition-all text-white p-2 px-4 rounded-xl max-sm:text-sm'>Add New Press Link</button>
          </div>

          <h3 className='mt-2 max-sm:text-sm'>Click and draw the rows below to recorder your Press Links.</h3>

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



          <div className='mt-6'>
            <label htmlFor="additional" className='md:text-lg'>Athletic Hours</label>
            <textarea className='bg-[#F0F1F3] p-3 px-4 rounded-2xl mt-4 outline-none w-full' placeholder='Add text here' rows={4} name="" id=""></textarea>
          </div>
      </div>
    </>
  )
}

export default page
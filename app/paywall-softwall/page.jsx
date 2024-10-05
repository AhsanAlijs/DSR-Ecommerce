import Card from '@/components/card/Card'
import Map from '@/components/map/Map'
import Link from 'next/link'
import React from 'react'

const city= [
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alaska",
        link:"#"
    },
    {
        name:"Arizona",
        link:"#"
    },
    {
        name:" Arkansas",
        link:"#"
    },
    {
        name:"California",
        link:"#"
    },
    {
        name:"Colorado",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },
    {
        name:"Alabama",
        link:"#"
    },

]

const colleges = [
    {
        title:"NCAA D1",
        num:280
    },
    {
        title:"NCAA D1",
        num:260
    },
    {
        title:"NCAA D1",
        num:400
    },
    {
        title:"NCAA D1",
        num:304
    },
]
const page = () => {
  return (
    <div className='mb-10'>
        <div className='text-center bg-[#012555] py-10 text-white'>
            <p className='text-3xl py-5 max-md:text-xl max-sm:text-sm cursor-pointer'>Athletic Scholarships / Softball</p>
            <h1 className='font-bold text-6xl max-md:text-4xl max-sm:text-3xl'>Softball Scholarships</h1>
        </div>
        <div className='h-[550px] w-[800px] mx-auto mt-14 max-md:h-[350px] max-md:w-[500px] max-sm:h-[400px] max-sm:hidden'>
        <Map/>
        </div>
        <div  className='grid grid-cols-4 gap-5 py-10 justify-center w-fit mx-auto max-xl:grid-cols-3 max-lg:w-full  max-lg:grid-cols-2 px-10 max-md:px-4 max-md:gap-4'>
        {
          !city ? "Locading..." :   city &&  city.map((data,index)=>(
         
            <Link key={index} href={data.link} className="py-5 max-sm:text-sm max-sm:p-3 w-72 max-lg:w-full border-2 border-[#012555] rounded-md text-center hover:bg-[#012555] hover:text-white transition-[600ms]">
            {data.name}
            </Link>
        
          ))
        }
            </div>



    <div className='max-w-screen-2xl mx-auto mb-10  max-md:px-4 px-10'>
        <h1 className='text-2xl pb-3 font-semibold max-md:text-xl'>Quick Links</h1>
        <ul className='list-outside  list-disc pb-16 pl-16 max-sm:pl-8'>
            <li ><span className=''>All Colleges with Softball</span></li>
            <li><span className=''>D1 Colleges with Softball</span> </li>
            <li><span className=''>D2 Colleges with Softball</span> </li>
            <li><span className=''>D3 Colleges with Softball</span> </li>
            <li><span className=''>NAIA Colleges with Softball</span> </li>
            <li><span className=''>Junior Colleges with Softball</span> </li>
           
          </ul>
          <h1 className='text-2xl pb-3 font-semibold max-md:text-xl'>How to get a softball scholarship</h1>
          <p>Softball scholarships are a great way for talented players to pay for their education. There are a few things you can do to increase your chances of getting a softball scholarship. First, make sure that you excel at softball and have great grades. Next, start building your athletic resume by competing in softball tournaments or showcases. Finally, reach out to college softball coaches at schools you want to attend and let them know why you would be a valuable addition to their team. If you follow these tips, you'll put yourself in a good position to receive a college softball scholarship. If you want further assistance in getting recruited, you can signup for a ProductiveRecruit account.</p>
    </div>

    <div className='max-w-screen-2xl px-10 mx-auto my-10 max-md:px-4'>
        <h1  className='text-2xl pb-3 font-semibold max-md:text-xl'>Colleges offering softball by division</h1>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-48 max-lg:gap-x-28 max-md:gap-x-10 gap-y-5 '>

        {
            colleges && colleges.map((data,index)=>(
                <div key={index}>
                    <Card title={data.title} num={data.num}/>
                </div>
            )) 
        }
        </div>
    </div>

    <div className='max-w-screen-2xl px-10 my-10 mx-auto max-md:px-4'>
        <h1  className='text-2xl pb-3 font-semibold max-md:text-xl '>Softball athletic scholarship opportunities by division</h1>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-48 max-lg:gap-x-28 max-md:gap-x-10 gap-y-5 '>

        {
            colleges && colleges.map((data,index)=>(
                <div key={index}>
                    <Card title={data.title} num={data.num}/>
                </div>
            )) 
        }
        </div>
    </div>

    <div className='max-w-screen-2xl px-10 my-10 mx-auto max-md:px-4'>
        <h1  className='text-2xl pb-3 font-semibold max-md:text-xl'>Softball student-athlete participation by division</h1>
        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-48 max-lg:gap-x-28 max-md:gap-x-10 gap-y-5 '>

        {
            colleges && colleges.map((data,index)=>(
                <div key={index}>
                    <Card title={data.title} num={data.num}/>
                </div>
            )) 
        }
        </div>
    </div>


    <div className='max-w-screen-2xl px-10 max-md:px-4 mx-auto'>
        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>

        <h1 className='pb-3 font-black text-xl'>How many division 1 college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>


        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>


        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>


        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>

        <h1 className='pb-3 font-black text-xl' font-black text-xl>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many student-athletes participate in division 1 softball?
        </h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many athletic scholarships are available for division 1 softball programs?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many student-athletes participate in division 1 softball?
        </h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many athletic scholarships are available for junior college softball programs?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many college softball teams are there?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many student-athletes participate in junior college softball?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>
        <h1 className='pb-3 font-black text-xl'>How many high school student-athletes participate in softball?</h1>
        <p className='pb-3'>There are 1,561 college softball teams in the United States.</p>

    </div>
    </div>
  )
}

export default page
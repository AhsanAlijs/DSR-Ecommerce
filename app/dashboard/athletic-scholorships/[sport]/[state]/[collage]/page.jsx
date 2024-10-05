'use client'
import CoacheCard from '@/components/dashboard/CoacheCard'
import MatricsCard from '@/components/dashboard/MatricsCard'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()

    const formatCollegeName = (name) => {
      return name
          .split('-') // Split by '-'
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join(' '); // Join back with a space
  }



  const coachArr = [
    {
      head: "Head Coach",
      name: "Joe Johnson",
      phone: "+154 46476474",
      email: "joejohnson438@gmail.com",
      twitter: "joe_johnson"
    },
    {
      head: "Assistant Coach",
      name: "Joe Johnson",
      phone: "+154 46476474",
      email: "joejohnson438@gmail.com",
      twitter: "joe_johnson"
    },
    {
      head: "Head Coach",
      name: "Joe Johnson",
      phone: "+154 46476474",
      email: "joejohnson438@gmail.com",
      twitter: "joe_johnson"
    },
  ]

const matricsArr = [
  {
    name: "Undergrad Enrollment",
    value: "50,000"
  },
  {
    name: "Students living on Campus",
    value: "70%"
  },
  {
    name: "Acceptance Rate",
    value: "50%"
  },
  {
    name: "In-State Tuition",
    value: "100+"
  },
  {
    name: "Out of Station Tuition",
    value: "25+"
  },
  {
    name: "Campus Size (acres)",
    value: "0123"
  },
  {
    name: "Average GPA",
    value: "99"
  },
  {
    name: "Avegare SAT Score",
    value: "90"
  },
  {
    name: "Average ACT Score",
    value: "80"
  },
]



  return (
    <>
      <div>
        <h2 className='text-3xl font-semibold capitalize text-[#012555]'>{formatCollegeName(params.collage)}</h2>

        <div className='grid grid-cols-2 gap-6 max-xl:grid-cols-1 max-xl:gap-2'>
          <div className='bg-white rounded-2xl p-4 border h-[500px] border-[#E9E9E9] mt-6'>
            <h3 className='capitalize text-2xl font-semibold mb-4 max-sm:text-xl'>{params.sport} Coaches</h3>

      
            <div className='flex flex-col gap-8 h-[400px] overflow-y-auto'>
              {coachArr.map((item , index)=>{
                return <CoacheCard key={index} head={item.head} name={item.name} phone={item.phone} email={item.email} twitter={item.twitter}/>
              })}
            </div>
          </div>

          <div className='bg-white rounded-2xl p-4 border border-[#E9E9E9] mt-6  '>
            <h3 className='capitalize text-2xl font-semibold mb-4 max-sm:text-xl'>Athletics</h3>

          <div className='flex flex-col gap-4 max-h-[400px] overflow-y-auto'>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center'>
              <span className='text-[#8A8A8A] text-xl max-sm:text-lg'>Division</span>
              <h4 className='text-xl font-medium max-sm:text-lg'>[Division]</h4>
            </div>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center mt-2'>
              <span className='text-[#8A8A8A] text-xl max-sm:text-lg'>Conference</span>
              <h4 className='text-xl font-medium max-sm:text-lg'>[Conference]</h4>
            </div>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center mt-2'>
              <span className='text-[#8A8A8A] text-xl max-sm:text-lg'>Athletic Website</span>
              <h4 className='text-xl font-medium max-sm:text-lg'>[Athletic Website]</h4>
            </div>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center mt-2'>
              <span className='text-[#8A8A8A] text-xl max-sm:text-lg'>Questionaire</span>
              <h4 className='text-xl font-medium max-sm:text-lg'>[Questionaire]</h4>
            </div>
            <div className='flex items-center justify-between max-sm:flex-col max-sm:justify-center mt-2'>
              <span className='text-[#8A8A8A] text-xl max-sm:text-lg'>Field / Stadium</span>
              <h4 className='text-xl font-medium max-sm:text-lg'>[Field / Stadium]</h4>
            </div>
          </div>


          </div>
        </div>


        <div className='mt-6'>
          <h3 className='capitalize text-2xl font-semibold mb-4'>Matrics</h3>

          <div className='grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2'>
            {matricsArr.map((item , index)=>{
              return <MatricsCard key={index} head={item.name} value={item.value}/>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default page








// {
//     name: {
//       type: String,
//       trim: true,
//     },
//     slug: String,
//     city: String,
//     location: String,
//     logo: String,
//     division: {
//       type: String,
//       enum: ['NCAA D1', 'NCAA D2', 'NCAA D3', 'NAIA', 'JUCO'],
//     },
//     conference: String,
//     majors: [String],
//     type: {
//       type: String,
//       enum: ['public', 'private'],
//     },
//     homeField: String,
//     annualCostInState: Number,
//     annualCostOutState: Number,
//     avergeACTScore: Number,
//     avergeSATScore: Number,
//     avergeGPA: Number,
//     acceptanceRate: Number,
//     studentsLivingOnCampus: Number,
//     undergradEnrollment: Number,
//     campusSize: Number,
//     hbcu: Boolean,
//     website: String,
//     athleticWebsite: String,
//     questionnaire: String,
//     scholarships: [{
//       type: String,
//       enum: ['baseball', 'softball'],
//     }]
//   }
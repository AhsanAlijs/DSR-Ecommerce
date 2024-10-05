'use client'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";


const page = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // console.log(isOpen);

  const faqArr = [
    {
      ques: "Can I register two players under the same email address?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "Do I need an online player profile to get recruited?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "What does the Diamond Sports Recruiting online player profile include?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "How is the Diamond College Fit Finder different from other tools that help find a college fit?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "What % of softball and baseball athletes get athletic scholarships?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "Do you offer recruiting services for all sports?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "Can you help with creating highlight videos and other recruiting materials?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "What makes your recruiting services different from others?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "What age or grade should athletes start using your recruiting services?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },
    {
      ques: "What is the process for getting started with your recruiting services?",
      ans: "Unfortunately, we cannot have two accounts under the same email address because our system uses emails as a unique identifier to the account. You will need to use an alternate email address for multiple players in the same household."
    },

  ]



  return (
    <>
      <div className=''>
        <div className='bg-[#012555] p-10 pt-20 max-md:p-10 text-white'>
          <div className='max-w-screen-2xl mx-auto max-md:text-center'>
            <h1 className='text-6xl font-semibold max-md:text-3xl'>Are you serious</h1>
            <h3 className='text-3xl font-semibold mt-5 max-md:text-xl max-md:mt-2'>About your future?</h3>
            <h4 className=' font-medium mt-2 max-md:text-xs'>Your recruritment starts here</h4>
           <button className='mt-6 bg-white hover:bg-[#ffffffad] transition-all text-[#012555] p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Join Today</button>
          </div>
        </div>


        <div>
          <div className='w-fit mx-auto my-14 max-md:mt-8'>
            <h2 className='text-3xl font-bold text-center max-sm:text-xl text-[#012555]'>Frequently Asked Questions</h2>
            <hr className='border-4 border-red-600 w-[10%] max-sm:border-2'/>
          </div>
        </div>


        <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-20'>
          {faqArr.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => toggleOpen(index)}
                className={`flex items-center justify-between border-2 mt-4 border-[#012555] rounded-2xl p-4 px-6 text-lg max-sm:text-sm font-medium cursor-pointer transition-all ${openIndex === index ? "rounded-b-none bg-[#012555] border-none text-white" : ""}`}
              >
                <p>{item.ques}</p>
                <FaChevronDown className={`transition-all duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              <div
                className={`transition-all overflow-hidden -mt-5 items-center justify-between rounded-t-none rounded-2xl text-lg max-sm:text-xs p-4 px-6 font-medium cursor-pointer ${openIndex === index ? "bg-[#A2CFFE] opacity-100 h-auto mt-0" : "h-0 opacity-0 bg-none"}`}
              >
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
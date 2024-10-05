"use client"
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const page = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqArr = [
    {
      question: "Can I register two payers under the same eemail address?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "DO I need an online player profile to get  recruited?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "Why does the Diamond College Fit Finder different from other tools that help find a college fit?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "What % of softballs ad baseballs athletes get athletic scholorship?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "Do you offer recruiting service for all sports?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "Can you help with creating highlighting videos adn other recruiting materials?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "What makes your recruiting service different from others?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "What age or grade should athletes start using your recruiting services?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
    {
      question: "What is the purpose for getting started with your recruiting services?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates alias ipsum veniam dicta blanditiis fuga doloremque libero a tempore! Ratione, nulla minima quisquam consequatur adipisci exercitationem atque maiores quas?"
    },
  ]

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <>
      <div className='bg-white p-6 rounded-xl shadow-[0_2px_20px_#00000012]'>
          <h2 className='text-3xl font-semibold max-md:text-2xl'>Can’t find what you are looking for?</h2>
          <h5 className='mt-2 text-lg max-md:text-sm'>Send email us at <a className='text-red-600 underline' target='_blank' rel='noopener noreferrer' href="mailto:support@diamondsportsrecruiting.com">
            support@diamondsportsrecruiting.com
          </a></h5>
          


          <div className='w-[85%] mx-auto max-lg:w-full'>
            {faqArr.map((item, index)=> (
               <div onClick={() => toggleAnswer(index)} key={index} className='bg-[#F7F7F7] p-4 mt-6 rounded-xl  cursor-pointer'>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-4'>
                    <h2 className='text-4xl font-bold text-[#0000001A] max-sm:text-2xl'>{index > 8 ? `${index + 1}` : `0${index + 1}`}</h2>
                    <p className='font-semibold max-sm:text-sm'>{item.question}</p>
                  </span>
                  <span className='text-[#D84D2D] text-2xl'>{expandedIndex === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-[800px] transition-all translate-y-0 opacity-100' : 'max-h-0 -translate-y-8 opacity-0'
              }`}
            >
              <p className="mt-2 max-sm:text-xs">{item.answer}</p>
            </div>
              </div>
            
          ))}
          </div>
      </div>
    </>
  )
}

export default page
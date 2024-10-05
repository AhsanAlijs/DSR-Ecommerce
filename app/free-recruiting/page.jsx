import RecruitingCard from '@/components/RecruitingCard'
import React from 'react'
import card1 from '@/assets/recruiting-page/card1.png'
import card2 from '@/assets/recruiting-page/card2.png'
import card3 from '@/assets/recruiting-page/card3.png'
import card4 from '@/assets/recruiting-page/card4.png'
import card5 from '@/assets/recruiting-page/card5.png'
import card6 from '@/assets/recruiting-page/card6.png'
import card7 from '@/assets/recruiting-page/card7.png'
import card8 from '@/assets/recruiting-page/card8.png'
import card9 from '@/assets/recruiting-page/card9.png'
import IntroBanner from '@/components/IntroBanner'

const page = () => {

    const cardArr = [
        {
            image: card1,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card2,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card3,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card4,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card5,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card6,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card7,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card8,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
        {
            image: card9,
            head: "What It Really Takes to Be a College Athlete",
            para: "Thinking of becoming a college athlete? This article breaks down the top 5 realities of what it takes to become a successful player at the next level.",
        },
    ]
  return (
    <>
        <div>
           <IntroBanner/>


            <div className='max-w-screen-2xl mx-auto px-10 max-md:px-4 grid grid-cols-3 gap-8 max-lg:grid-cols-2 mb-20 max-sm:grid-cols-1 max-sm:gap-16'>
                
              {cardArr.map((item)=>{
                return <RecruitingCard head={item.head} image={item.image} para={item.para}/>
              })}
            </div>
        </div>
    </>
  )
}

export default page
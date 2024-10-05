import React from 'react'
import BaseBall from '@/components/BaseBall'
import DiamondCards from '@/components/DiamondCards'
import OurApproach from '@/components/DiamondSportsComp/OurApproach'
import IntroBanner from '@/components/IntroBanner'
import Trusted from '@/components/DiamondSportsComp/Trusted'

const page = () => {
  return (
    <div>
      <IntroBanner/>
      <DiamondCards/>
      <BaseBall/>
      <OurApproach/>
      <Trusted/>
    </div>
  )
}

export default page

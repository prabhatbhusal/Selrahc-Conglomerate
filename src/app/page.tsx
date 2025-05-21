import Herosection from '@/components/landing/herosection'
import Coreservices from '@/components/landing/Coreservices'
import Trust from '@/components/landing/Trust'
import Waste from '@/components/landing/Waste'
import React from 'react'

const page = () => {
  return (
    <main>
      <Herosection/>
      <Coreservices/>
      <Waste/>
      <Trust/>
    </main>
  )
}

export default page

import Herosection from '@/components/landing/herosection'
import Coreservices from '@/components/landing/Coreservices'
import Trust from '@/components/landing/Trust'
import Waste from '@/components/landing/Waste'
import React from 'react'
import Workspace from '@/components/landing/Workspace'
import Choose from '@/components/landing/Choose'

const page = () => {
  return (
    <main>
      <Herosection />
      <Coreservices />
      <Waste />
      <Trust />
      <Workspace />
      <Choose/>
    </main>
  );
}

export default page

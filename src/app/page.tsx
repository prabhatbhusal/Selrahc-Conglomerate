import PageBanner from '@/components/landing/Pagebanner'
import Coreservices from '@/components/landing/Coreservices'
import Trust from '@/components/landing/Trust'
import Waste from '@/components/landing/Waste'
import React from 'react'
import Workspace from '@/components/landing/Workspace'
import Choose from '@/components/landing/Choose'
import Reviews from '@/components/landing/Reviews'

const page = () => {
  return (
    <main>
      <PageBanner  />
      <Coreservices />
      <Waste />
      <Trust />
      <Workspace />
      <Choose/>
      <Reviews/>
    </main>
  );
}

export default page

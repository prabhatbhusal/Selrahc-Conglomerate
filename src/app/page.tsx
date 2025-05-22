import PageBanner from '@/components/landing/Pagebanner'
import Coreservices from '@/components/landing/Coreservices'
import Trust from '@/components/landing/Trust'
import Waste from '@/components/landing/Waste'
import React from 'react'
import Workspace from '@/components/landing/Workspace'
import Choose from '@/components/landing/Choose'
import Reviews from '@/components/landing/Reviews'
import Service from '@/components/landing/Service'
import Tips from '@/components/landing/Tips'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/ui/Footer'

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
      <Service/>
      <Tips/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default page

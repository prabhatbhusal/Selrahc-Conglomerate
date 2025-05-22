import { footerContactInfo } from '@/constants/data';
import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <section className="z-100  bg-[url(/images/Footerbg.png)] h-140 w-full relative bg-cover">
      <div className="">
        <div>
          {footerContactInfo.map((link, idx) => (
            <div className="flex" key={idx}>
              <Image src={link.url} alt="alt" width={100} height={50} />
              <div className='flex flex-'>
                <h2>{link.title}</h2>
                <p>{link.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer

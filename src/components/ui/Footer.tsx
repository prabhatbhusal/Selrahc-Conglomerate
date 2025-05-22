import { footerContactInfo,footerimg,clientlogo } from '@/constants/data';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <section className="z-10 px-30 py-30 text-white font-md  bg-[url(/images/Footerbg.png)] h-140 w-full relative bg-cover">
      <div className="flex md:flex-row flex-col justify-between  items-center gap-40">
        <div className="flex flex-col gap-5">
          {footerContactInfo.map((link, idx) => (
            <div className="flex flex-row gap-10 items-center " key={idx}>
              <Image
                src={link.url}
                alt="alt"
                width={100}
                height={100}
                className="object-contain "
              />
              <div className="flex flex-col  ">
                <h2>{link.title}</h2>
                <p>{link.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row  relative justify-right items-center ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {footerimg.map((link, idx) => (
              <div className="flex flex-col " key={idx}>
                <h2 className="font-bold text-xl text-[#DD9B5C]">
                  {link.title}
                </h2>
                <div className="flex flex-col gap-5">
                  {link.items.map((link, idx) => (
                    <div key={idx}>
                      <Link href="">{link.item}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex relative bottom-15 flex-col items-center justify-center gap-5">
            {clientlogo.map((link, idx) => (
              <div className="" key={idx}>
                <h2 className="font-bold text-xl text-[#DD9B5C]">
                  {link.title}
                </h2>
                <div className="flex flex-row gap-5 items-center justify-center ">
                  {link.items.map((link, idx) => (
                    <div className="flex gap-5" key={idx}>
                      <Link href="/">
                        <Image
                          src={link.url}
                          alt="alt"
                          width={100}
                          height={50}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer

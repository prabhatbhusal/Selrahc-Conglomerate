import React from 'react'
import {trustimg} from '@/constants/data'
import Image from 'next/image';
const Trust = () => {
  return (
    <section className='md:px-30'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col justify-center items-center'>
          {" "}
          <h2 className="text-with-gradient font-bold md:text-4xl text-2xl">
            TRUSTED BY HUNDREDS
          </h2>
          <h2 className="text-with-gradient flex  gap-3 flex-row items-center font-bold md:text-4xl text-2xl">
            <hr className="border-3  w-10 border-green-500  " /> POWERED BY
            PRECISION
          </h2>
          <p>
            There should be millions of people striving for zero waste, rather
            than a select few who achieve it perfectly.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 ">
          {trustimg.map((link, idx) => (
            <div
              className="flex flex-col justify-center items-center"
              key={idx}
            >
              <Image
                src={link.url}
                alt="alt"
                width={2000}
                height={50}
                className="h-25 w-100 rounded-full object-cover"
              />
              <h2 className="text-with-gradient flex font-bold md:text-4xl text-2xl">
                {link.number}
              </h2>
              <p>{link.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust

'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { servimg } from '@/constants/data';
import { FaTruckFast } from "react-icons/fa6";
import { BiWater } from "react-icons/bi";
import { Button } from '../ui/button';
import { RiHandSanitizerFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="md:px-30 px-10 top-200 relative">
      <div className="gap-10 flex flex-col">
        {servimg.map((link, idx) => (
          <div
            className={`flex flex-col gap-10 ${
              idx % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            } `}
            key={idx}
          >
            <Image
              src={hoveredIndex === idx ? link.url2 : link.url1}
              alt="alt"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              width={2000}
              height={50}
              className="rounded-2xl object-cover h-120 w-400 "
            />
            <div className="flex flex-col justify-center gap-5">
              <h2 className="text-with-gradient font-bold md:text-5xl text-2xl">
                {link.title}
              </h2>
              <h2 className="text-with-gradient font-bold md:text-5xl text-3xl">
                {link.title1}
              </h2>
              <p>{link.content}</p>
              {idx % 2 == 0 ? (
                <div className="flex md:flex-row flex-col gap-3">
                  <span className="flex flex-row gap-3 text-lg md:text-xl">
                    <FaTruckFast className="md:text-4xl text-2xl text-primary" />
                    POWER WASHING
                  </span>
                  <span className="flex flex-row gap-3 text-lg md:text-xl">
                    <BiWater className="md:text-4xl text-2xl text-primary" />
                    ODOR REMOVAL
                  </span>
                  <span className="flex flex-row gap-3 text-lg md:text-xl">
                    <RiHandSanitizerFill className="md:text-4xl text-2xl text-primary" />
                    DEEP SANITAZATION
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <span className="flex flex-row gap-3 items-center md:text-xl">
                    <FaCircleCheck className="md:text-4xl text-2xl text-primary" />
                    Free estimates
                  </span>
                  <span className="flex flex-row  gap-3 items-center md:text-xl">
                    <FaCircleCheck className="md:text-4xl text-2xl text-primary" />
                    Low Price Guaranteed
                  </span>
                </div>
              )}
              <Button size="lg">{link.btntext}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service
'use client'
import React from 'react'
import Image from 'next/image';
import { servimg } from '@/constants/data';
import { FaTruckFast } from "react-icons/fa6";
import { BiWater } from "react-icons/bi";
import { Button } from '../ui/button';
import { RiHandSanitizerFill } from "react-icons/ri";
const Service = () => {

  return (
    <section className="md:px-30 top-200 relative">
      <div className="gap-10 flex flex-col">
        {servimg.map((link, idx) => (
          <div
            className={`flex gap-10 ${
              idx % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } `}
            key={idx}
          >
            <Image
              src={link.url1}
              alt="alt"
              width={2000}
              height={50}
              className="rounded-2xl object-cover h-120 w-400 "
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-with-gradient font-bold md:text-5xl text-3xl">
                {link.title}
              </h2>
              <h2 className="text-with-gradient font-bold md:text-5xl text-3xl">
                {link.title1}
              </h2>
              <p>{link.content}</p>
              {idx % 2 == 0 ? (
                <div className="flex flex-row gap-3">
                  <span className="flex flex-row gap-3  text-xl">
                    <FaTruckFast className="text-4xl text-primary" />
                    POWER WASHING
                  </span>
                  <span className="flex flex-row gap-3 text-xl">
                    <BiWater className="text-4xl text-primary" />
                    ODOR REMOVAL
                  </span>
                  <span className="flex flex-row gap-3 text-xl">
                    <RiHandSanitizerFill className="text-4xl text-primary" />
                    DEEP SANITAZATION
                  </span>
                </div>
              ) : (
                <div className=""></div>
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

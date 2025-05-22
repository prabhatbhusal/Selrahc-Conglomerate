import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
const Contact = () => {
  return (
    <section className="flex flex-row relative  z-10 md:top-20">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="flex flex-col justify-center relative md:left-35">
          <h2 className="font-bold text-with-gradient md:text-4xl text-2xl">
            BOOK YOUR SURFACE <br /> REVIVAL NOW
          </h2>
          <p className="">
            Whether it’s your home’s curb appeal or your building’s exterior, 
            we’re here to bring back the brilliance. Get in touch today and
            discover how affordable transformation can be.
          </p>
        </div>

        <form className="flex flex-col relative left-30 items-center justify-center gap-5">
          <div className="flex md:flex-row gap-5 items-center  justify-center  flex-col">
            <input
              type="text"
              placeholder="Name"
              className="py-3 px-2 w-95 border-1 border-neutral-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-3 px-2 w-100 border-1 border-neutral-300 rounded"
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <input
              type="tel"
              placeholder="Contact"
              className="py-3 px-2 w-200 border-1 border-neutral-300 rounded"
            />
            <input
              type="text"
              placeholder="Message"
              className="py-3 px-2 w-200 border-1 border-neutral-300 rounded"
            />
          </div>
          <div className="flex justify-right">
            {" "}
            <Button size={"lg"} type="submit">
              Contact Now
            </Button>
          </div>
        </form>
      </div>
      <div>
        <Image
          src="/images/contactbg.png"
          alt="alt"
          width={2000}
          height={50}
          className="object-cover h-210 "
        />
      </div>
    </section>
  );
}

export default Contact

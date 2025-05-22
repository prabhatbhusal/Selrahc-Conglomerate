
import React from 'react'
import { RiRecycleFill } from "react-icons/ri";
import Image from 'next/image';
const Waste = () => {
  return (
    <section className="px-[50px] ">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-with-gradient font-bold md:text-4xl text-2xl">
            ZERO WASTE
          </h2>
          <p>
            There should be millions of people striving for zero waste, rather
            than a select few who achieve it perfectly.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-center relative bottom-30 px-[50px] items-centerflex-col">
          <Image
            src="/images/waste1.png"
            alt="alt"
            width={2000}
            height={60}
            className="object-contain md:h-170 md:w-180"
          />
          <div className="flex justify-center">
            <span className="md:text-7xl text-4xl w-auto flex md:w-[80px] md:h-[80px] relative md:top-80 md:-left-1 bg-primary  p-1 rounded-full justify-center">
              <RiRecycleFill color="white" />
            </span>
          </div>
          <Image
            src="/images/waste2.png"
            alt="alt"
            width={2000}
            height={60}
            className="object-contain md:h-170 md:w-180"
          />
        </div>
      </div>
    </section>
  );
}

export default Waste

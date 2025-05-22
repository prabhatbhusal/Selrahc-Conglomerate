import Link from 'next/link';
import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { coreimg } from '../../constants/data';
import Image from 'next/image';
const Coreservices = () => {
  return (
    <section className="md:px-30 md:py-10 px-10 py-5">
      <div>
        <div className="flex flex-col justify-center text-center items-center">
          <h2 className="text-with-gradient font-bold md:text-4xl text-2xl">
            OUR CORE RESTORATION SERVICES
          </h2>
          <p className="md:w-200">
            At Selrahc Conglomerate Companies, we go beyond cleaning — we
            restore integrity, preserve beauty, and extend the life of your
            property. Our comprehensive services are tailored to tackle the
            toughest grime, wear, and weather damage.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
            {coreimg.map((link, idx) => (
              <div
                className="flex flex-col justify-center items-center hover:scale-103 transition-all ease-in-out duration-500 "
                key={idx}
              >
                <Image
                  src={link.url}
                  alt="alt"
                  width={2000}
                  height={50}
                  className=""
                />
                <h2 className="text-with-gradient font-bold md:text-4xl text-2xl">
                  {link.text}
                </h2>
                <Link
                  href="/services"
                  className="md:relative bottom-90 md:text-5xl text-primary  md:left-52"
                >
                  <BsFillArrowUpRightCircleFill />
                </Link>
                <Link
                  href={`/services`}
                  className="flex bottom-10 relative gap-3  hover:underline transition-all ease-in-out duration-500 justify-center items-center"
                >
                  Learn More <MdKeyboardDoubleArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coreservices

import Link from 'next/link';
import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { coreimg } from '../../constants/data';
import Image from 'next/image';
const Coreservices = () => {
  return (
    <section className="px-30">
      <div>
        <div>
          <h2 className="text-with-gradient font-bold md:text-4xl text-2xl">
            OUR CORE RESTORATION SERVICES
          </h2>
          <p>
            At Selrahc Conglomerate Companies, we go beyond cleaning — we
            restore integrity, preserve beauty, and extend the life of your
            property. Our comprehensive services are tailored to tackle the
            toughest grime, wear, and weather damage.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1">
            {coreimg.map((link, idx) => (
              <div className="" key={idx}>
                <Image src={link.url} alt="alt" width={2000} height={50} />
                <h2>{link.text}</h2>
                <BsFillArrowUpRightCircleFill />
                <Link
                  href={`/services`}
                  className="flex  gap-3 justify-center items-center"
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

import React from 'react'
import Image from 'next/image'
const Choose = () => {
  return (
    <section className="relative top-170 -z-[10]">
      <div className="z-[1000] bg-[url(/images/bgchoose.png)]  md:h-150 relative bg-cover">
        <div></div>
        <div className="justify-center flex flex-col items-center relative top-25">
          <h3 className=" font-bold text-with-gradient md:text-3xl text-xl">
            WHY CHOOSE US
          </h3>
          <h2 className=" font-bold text-with-gradient md:text-4xl text-2xl">
            The Selrahc Standard: <br /> More Than Just Clean
          </h2>
        </div>
        <div className="flex md:flex-row flex-col md:gap-5 justify-center items-center px-5 md:px-30">
          <div className="flex flex-col mt-30 md:mt-0  justify-center items-center">
            <Image
              src="/images/chooseimg1.png"
              alt="alt"
              width={2000}
              height={50}
              className="w-20"
            />
            <h2 className="text-with-gradient md:text-2xl text-lg">
              Factory-Fresh Finish
            </h2>
            <p>
              We don’t just clean — we restore with precision. Expect surfaces
              that look brand new and stay that way.
            </p>
          </div>
          <div className="relative md:top-50 flex flex-col justify-center items-center">
            <Image
              src="/images/chooseimg2.png"
              alt="alt"
              width={2000}
              height={50}
              className="w-20"
            />
            <h2 className="text-with-gradient text-2xl">Fast & Affordable</h2>
            <p>
              Our team delivers powerful results in less time — and at a
              fraction of the cost of replacement or repainting.
            </p>
          </div>
          <div className="relative md:top-50 flex flex-col justify-center items-center">
            <Image
              src="/images/chooseimg3.png"
              alt="alt"
              width={2000}
              height={50}
              className="w-20"
            />
            <h2 className="text-with-gradient md:text-2xl text-lg">
              Long-Lasting Protection
            </h2>
            <p>
              Our treatments don&apos;t just remove dirt — they extend the life
              of your surfaces and resist future wear.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/chooseimg4.png"
              alt="alt"
              width={2000}
              height={50}
              className="w-20"
            />
            <h2 className="text-with-gradient md:text-2xl text-lg">
              Clear Pricing. No Surprises.
            </h2>
            <p>
              Know what you&apos;re getting and what it costs — upfront. No
              hidden fees. No games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose

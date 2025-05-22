import React from 'react'
import Image from 'next/image'
const Tips = () => {
  return (
    <section className="mt-210 relative top-20 text-white px-[50px] py-5 bg-[url(/images/tips.png)] bg-cover h-[120vh] flex flex-col items-center justify-center w-full">
      <div className=' flex flex-col gap-10'>
        <div className="flex flex-col justify-center items-center text-center md:px-100">
          <h2 className=" font-bold md:text-4xl text-2xl">
            TIPS, TRENDS & TRANSFORMATIONS
          </h2>
          <p className="text-white text-md">
            Stay informed with the latest tips, trends, and expert advice from
            Selrahc Conglomerate Companies. Whether you&apos;re a homeowner or
            business owner, our blog covers everything from effective surface
            restoration techniques to seasonal maintenance tips
          </p>
        </div>
        <div className="flex flex-row gap-5 md:px-30 ">
          <div className="flex flex-col items-center  justify-center ">
            <Image
              src="/images/tips1.png"
              alt="alt"
              width={3000}
              height={50}
              className="md:h-[500px] md:w-[700px] bg-cover  rounded-2xl"
            />
            <div className="flex flex-col justify-center items-center w-[640px] ">
              <h2 className="text-xl font-semibold ">
                Dustless Blasting Explained: Why It&apos;s the Smart Way to
                Restore Any Surface
              </h2>
              <p className="">
                Dustless blasting is a revolutionary surface preparation method
                that combines water and abrasive media to safely strip away
                paint, rust, grime, and more
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center   ">
            <Image
              src="/images/tips2.png"
              alt="alt"
              width={2000}
              height={50}
              className="h-[300px] w-[500px] object-cover rounded-2xl"
            />
            <div className="flex flex-col justify-center items-center w-[500px]  ">
              <h2 className="text-xl font-semibold">
                Softwash vs. Pressure Washing: What’s Best for Your Property?
              </h2>
              <p>
                While both softwashing and pressure washing aim to clean
                exterior surfaces, the best method depends on the material and
                type of grime involved.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Tips

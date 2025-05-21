import React from 'react'
import Image from 'next/image'
const Tips = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Tips, Trends & Transformations</h2>
          <p>
            Stay informed with the latest tips, trends, and expert advice from
            Selrahc Conglomerate Companies. Whether you&apos;re a homeowner or
            business owner, our blog covers everything from effective surface
            restoration techniques to seasonal maintenance tips
          </p>
        </div>
        <div className='flex flex-row gap-5'>
          <div>
            <Image src="/images/tips1.png" alt="alt" width={2000} height={50} className='h-100 w-100'/>
            <h2>
              Dustless Blasting Explained: Why It&apos;s the Smart Way to Restore Any
              Surface
            </h2>
            <p>
              Dustless blasting is a revolutionary surface preparation method
              that combines water and abrasive media to safely strip away paint,
              rust, grime, and more
            </p>
          </div>
          <div>
            <Image src="/images/tips2.png" alt="alt" width={2000} height={50} />
            <h2>
              Softwash vs. Pressure Washing: What’s Best for Your Property?
            </h2>
            <p>
              While both softwashing and pressure washing aim to clean exterior
              surfaces, the best method depends on the material and type of
              grime involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tips

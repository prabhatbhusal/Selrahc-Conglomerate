import React from 'react'
import Image from 'next/image'
const Choose = () => {
  return (
    <section>
      <div>
        <div>
          <h3>WHY CHOOSE US</h3>
          <h2>The Selrahc Standard:   <br /> More Than Just Clean</h2>
          <div>
            <div className=''>
              <Image src="src" alt="alt" width={2000} height={50} className='w-20' />
              <h2>Factory-Fresh Finish</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose

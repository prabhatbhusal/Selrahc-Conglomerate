import React from 'react'

const herosection = () => {
  return (
    <main>
      <div className=" bg-blend-multiply w-full h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-[90vh]  bg-blend-overlay top-0 w-full absolute "
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-[90vh] bg-custom-green-overlay opacity-50 z-10" />
      </div>
    </main>
  );
}

export default herosection

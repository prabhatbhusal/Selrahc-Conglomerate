import Link from 'next/link';
import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Image from 'next/image';
const Workspace = () => {
  return (
    <section>
      <div>
        <div className="flex text-white flex-col justify-center items-center relative top-100 z-100">
          <h2 className=" font-bold md:text-4xl text-2xl">
            Solutions That Serve Homes and Workspaces
          </h2>
          <div className="flex gap-3">
            <p>residential</p>|<p>commercial</p>
          </div>
          <div>
            <Image
              src="/images/contact.png"
              alt="alt"
              width={2000}
              height={50}
              className=" w-25"
            />
            <Link
              href="/services"
              className="md:relative flex w-[100] bottom-14 md:text-5xl text-primary  left-7"
            >
              <BsFillArrowUpRightCircleFill />
            </Link>
          </div>
        </div>
        <Image
          src="/images/workspacebg1.png"
          alt="alt"
          width={2000}
          height={50}
          className=" absolute  overflow-x-hidden w-full"
        />
        <Image
          src="/images/workspacebg2.png"
          alt="alt"
          width={2000}
          height={40}
          className=" absolute  overflow-x-hidden w-full"
        />
      </div>
    </section>
  );
}

export default Workspace

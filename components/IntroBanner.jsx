import React from "react";
import Image from "next/image"; // Import Image from next/image
import bannergirl from "../public/bannergirl.png";
import Link from "next/link";

const IntroBanner = () => {
  return (
    <>
      <section className=" bg-[#012555] mb-20 max-md:mb-10">
        <div
          className="max-w-screen-2xl max-2xl:px-24 max-md:px-14 max-sm:px-5
 px-10  mx-auto flex lg:flex-row flex-col items-center "
        >
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center max-md:mb-0 py-10">
            <h1 className="xl:text-[3rem] lg:text-[2rem] sm:text-[2rem] mb-4 font-bold text-white">
              Are you Sure about your fufure ?
              {/* <br className="hidden lg:inline-block"/>readymade gluten */}
            </h1>
            <p className="text-white font-medium mb-8 leading-relaxed">
              Your recruitment starts here......
            </p>
            <div className="flex justify-center">
            <Link href="/pricing" className='bg-white hover:bg-[#ffffffad] transition-all text-[#012555] p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Join Today</Link>

            </div>
          </div>
          <div className="xl:max-w-[40rem] lg:max-w-[30rem] md:max-w-[15rem] hidden lg:block">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={bannergirl} // Use relative path from public folder
               // Set appropriate height
              priority // Optional: for loading priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroBanner

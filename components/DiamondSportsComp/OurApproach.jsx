import React from "react";

import Image from "next/image"; // Import Image from next/image
import baseball from "../../assets/DiamondSports/young-baseball-player-field 1.png";

const OurApproach = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex   py-24 md:flex-row flex-col items-center max-w-screen-2xl px-10 max-md:px-4">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={baseball}
              width={500} // Replace with appropriate width
              height={300} // Replace with appropriate height
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#012555]">
              Our Approach to Recruiting
            </h1>
            <p className="mb-8 leading-relaxed">
              At Diamond Sports Recruiting, we simplify the recruiting process
              by offering personalized recruiting guidance based on your
              "Diamond School Best Fit Finder" matches. Our cutting edge
              technology saves you time and allows you to focus on the schools
              that are the best athletic and academic fit for you. Our approach
              goes beyond traditional methods, focusing on innovation and
              individualization. We provide a comprehensive roadmap that not
              only highlights your athletic talents but also showcases your
              academic achievements and personal strengths. This view ensures
              that you connect with the right colleges and universities,
              maximizing your opportunities for athletic scholarships. With
              Diamond Sports Recruiting, your path to securing an athletic
              scholarship is not just a dream—working together we can make it a
              reality! We are here to support you every step of the way, making
              your recruitment journey as straightforward and successful as
              possible.
            </p>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;

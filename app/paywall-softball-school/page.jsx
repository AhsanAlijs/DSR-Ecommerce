import IntroBanner from "@/components/IntroBanner";
import React from "react";
import primaryLogo from "@/assets/paywall/ce-primary.png";
import profile from "@/assets/paywall/profile.png";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";


const page = () => {
  return (
    <>
      <IntroBanner />

      <div>
        <p className="text-center max-sm:text-xs px-4">
          <span className="cursor-pointer">Scholarships</span> /{" "}
          <span className="cursor-pointer">Softball</span> /{" "}
          <span className="cursor-pointer">[State - Long]</span> /{" "}
          <span className="cursor-pointer">C.E. Primary School</span>
        </p>
        <h2 className="text-4xl font-bold text-center mt-2 max-md:text-2xl">
          C.E. Primary School Softball
        </h2>
      </div>

      <div className=" max-w-screen-2xl mx-auto px-10 max-md:px-4 mt-8">
        <div className="p-10 max-md:p-6 bg-[#A2CFFE] rounded-[30px] mb-10 py-16">
          <div className="flex items-center gap-4">
            <Image src={primaryLogo} alt="img" width={100} height={100} />
            <h3 className="text-2xl font-bold text-[#012555]">
              C.E. Primary School
            </h3>
          </div>

          <div className="grid grid-cols-2 mt-6 gap-6 max-[850px]:grid-cols-1">

            <div className="bg-white text-[#012555] border-2 border-[#012555] rounded-[30px]">
              <h3 className="text-xl font-semibold p-4 px-6">
                Softball Coaches
              </h3>
              <p className="bg-[#012555] p-2 px-6 text-white">Head Coach</p>

              <div className=" p-3 px-6 max-sm:text-sm">
                <table>
                  <tbody>
                  <tr>
                    <td className="pr-3 pb-2"><Image className="rounded-full" src={profile} alt="img" width={26} height={26}/></td>
                    <td className="pb-2 max-sm:pr-4 font-semibold pr-8">Name</td>
                    <td className="pb-2">Joe Johnson</td>
                  </tr>
                  <tr>
                    <td className="pr-3 pb-2"><IoCallOutline className="text-xl"/></td>
                    <td className="pb-2 max-sm:pr-4 pr-8">Phone</td>
                    <td className="pb-2">+154 4645645</td>
                  </tr>
                  <tr>
                    <td className="pr-3 pb-2"><MdOutlineMail className="text-xl"/></td>
                    <td className="pb-2 max-sm:pr-4 pr-8">Email</td>
                    <td className="pb-2">Joe@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="pr-3 "><FiTwitter className="text-xl"/></td>
                    <td className=" pr-8max-sm:pr-4 ">X handle</td>
                    <td className="">Joulain_Jay</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p className="bg-[#012555] p-2 px-6 text-white">Head Coach</p>

              <div className=" p-3 px-6 max-sm:text-sm">
                <table>
                <tbody>
                  <tr>
                    <td className="pr-3 pb-2"><Image className="rounded-full" src={profile} alt="img" width={26} height={26}/></td>
                    <td className="pb-2 max-sm:pr-4 font-semibold pr-8">Name</td>
                    <td className="pb-2">Joe Johnson</td>
                  </tr>
                  <tr>
                    <td className="pr-3 pb-2"><IoCallOutline className="text-xl"/></td>
                    <td className="pb-2 max-sm:pr-4 pr-8">Phone</td>
                    <td className="pb-2">+154 4645645</td>
                  </tr>
                  <tr>
                    <td className="pr-3 pb-2"><MdOutlineMail className="text-xl"/></td>
                    <td className="pb-2 max-sm:pr-4 pr-8">Email</td>
                    <td className="pb-2">Joe@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="pr-3 "><FiTwitter className="text-xl"/></td>
                    <td className=" pr-8max-sm:pr-4 ">X handle</td>
                    <td className="">Joulain_Jay</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white text-[#012555] border-2 border-[#012555] rounded-[30px]">
              <h3 className="text-xl font-semibold p-4 px-6">
                Athletics
              </h3>

              <table className="w-full overflow-x-auto max-sm:text-sm">
                <tbody>
                <tr className="border-t-2 border-[#012555] w-full">
                  <td className="p-2 px-6 max-sm:px-2">Division</td>
                  <td className="p-2 px-6 max-sm:px-2">[Division]</td>
                </tr>
                <tr className="border-t-2 border-[#012555] w-full">
                  <td className="p-2 px-6 max-sm:px-2">Conference</td>
                  <td className="p-2 px-6 max-sm:px-2">[Conference]</td>
                </tr>
                <tr className="border-t-2 border-[#012555] w-full">
                  <td className="p-2 px-6 max-sm:px-2">Athletic Website</td>
                  <td className="p-2 px-6 max-sm:px-2">[Athletic Website]</td>
                </tr>
                <tr className="border-t-2 border-[#012555] w-full">
                  <td className="p-2 px-6 max-sm:px-2">Questionnaire</td>
                  <td className="p-2 px-6 max-sm:px-2">[Softball Recruitment Form]</td>
                </tr>
                <tr className="border-y-2 max-[850px]:border-b-0 border-[#012555] w-full">
                  <td className="p-2 px-6 max-sm:px-2">Field / Stadium</td>
                  <td className="p-2 px-6 max-sm:px-2">[Home Field]</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>


          <h2 className="underline text-3xl font-semibold text-center mt-12">Metrics</h2>

          <div className="grid grid-cols-3 gap-20 px-44 mt-8 max-2xl:px-20 max-xl:px-10 max-xl:gap-14 max-lg:gap-8 max-md:grid-cols-2 max-lg:px-0 max-md:gap-6 max-[400px]:grid-cols-1">
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">50,000</h2>
              <p className="text-sm">Undergrad Enrollment</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">70 %</h2>
              <p className="text-sm">% of Students Living on Campus</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">50 %</h2>
              <p className="text-sm">Acceptance Rate</p>
            </div>

            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">100+</h2>
              <p className="text-sm">In-State Tuition</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">25+</h2>
              <p className="text-sm">Out of State Tuition</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">0123</h2>
              <p className="text-sm">Campus Size (acres)</p>
            </div>

            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">99</h2>
              <p className="text-sm">Average GPA</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">90</h2>
              <p className="text-sm">Average SAT Score</p>
            </div>
            <div className="bg-white p-4 px-6 rounded-[10px] text-center shadow-[-4px_4px_40px_rgba(0,0,0,0.15)]">
              <h2 className="text-3xl font-semibold mb-2 max-sm:text-xl">80</h2>
              <p className="text-sm">Average ACT Score</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

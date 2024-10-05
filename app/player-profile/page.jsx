import React from "react";
import profilePic from "@/assets/profile/profile.png";
import profilePic2 from "@/assets/profile/profile2.png";
import player from "@/assets/profile/player.png";
import player1 from "@/assets/profile/player1.png";
import player2 from "@/assets/profile/player2.png";
import player3 from "@/assets/profile/player3.png";
import card1 from "@/assets/profile/card1.png";
import playBtn from "@/assets/profile/playBtn.svg";
import Image from "next/image";
import { FaArrowRight, FaBaseballBatBall, FaUser } from "react-icons/fa6";
import { PiMapPinAreaFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoDocumentTextOutline, IoMail } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi";
import CardComp from "@/components/profile/CardComp";
import { IoIosBaseball } from "react-icons/io";
import { FaRunning, FaTachometerAlt } from "react-icons/fa";
import PlayerCard from "@/components/profile/PlayerCard";

const page = () => {
  const cardArr = [
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
    {
      image: card1,
      head: "2024 defensive highlights ",
      views: "10 View",
      date: "jul 7,2024",
    },
  ];

  const playerCardArr = [
    {
      image: player1,
      head: "Keelee Hagler",
      contact: "0123-456-789",
      mail: "abc@gmail.com",
      twitter: "Twitter profile name",
      insta: "Instagram profile name",
      youtube: "Youtube name"
    },
    {
      image: player1,
      head: "Keelee Hagler",
      contact: "0123-456-789",
      mail: "abc@gmail.com",
      twitter: "Twitter profile name",
      insta: "Instagram profile name",
      youtube: "Youtube name"
    },
    {
      image: player1,
      head: "Keelee Hagler",
      contact: "0123-456-789",
      mail: "abc@gmail.com",
      twitter: "Twitter profile name",
      insta: "Instagram profile name",
      youtube: "Youtube name"
    },
  ]
  return (
    <>
      <div className="bg-[#012555] text-white shadow-[0_11px_6.5px_rgba(0,0,0,0.25)] mb-10 pb-28 max-xl:pb-8">
        <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 p-4 flex justify-between items-center max-lg:flex-wrap gap-4">
          <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:w-full max-sm:text-center">
            <Image
              className="w-[80px] max-sm:w-[60px] rounded-full"
              src={profilePic}
              alt="img"
              width={116}
              height={116}
            />
            <div className="max-sm:w-full">
              <h2 className="text-2xl font-bold max-sm:text-xl">
                Keelee Hagler
              </h2>
              <h4 className="text-sm font-bold mt-2 max-sm:text-xs">
                Fastpitch Softball Profile
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-10 max-sm:w-full max-sm:justify-center max-md:mt-6">
            <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:text-center max-sm:gap-2">
              <FaUser className="text-5xl max-sm:text-3xl" />
              <div>
                <h4 className="text-sm font-bold mt-2 max-sm:text-xs">
                  5' 6" Tall   150 Pounds
                </h4>
                <h4 className="text-sm font-bold mt-2 max-sm:text-xs">
                  Throws: Right   Bats: Right
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:text-center max-sm:gap-2">
              <PiMapPinAreaFill className="text-5xl max-sm:text-3xl" />
              <div>
                <h4 className="text-sm font-bold mt-2 max-sm:text-xs">
                  [City], [State]
                </h4>
                <h4 className="text-sm font-bold mt-2 max-sm:text-xs">
                  [Club Team Name][ Age]
                </h4>
              </div>
            </div>
          </div>
        </div>

        <nav className="overflow-x-auto border-y-2 border-[#A2CFFE] p-4 max-sm:mt-4">
          <ul className="flex items-center justify-evenly  whitespace-nowrap">
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Videos
            </li>
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Player Profile
            </li>
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Athletics
            </li>
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Academics
            </li>
            <li className="cursor-pointer hover:text-[#e2e2e2] transition-all px-4">
              Contact Info
            </li>
          </ul>
        </nav>

        <div className="p-10 flex items-center justify-center gap-40 max-lg:gap-20 max-md:gap-10 max-lg:flex-wrap">
          <Image
            className="w-[400px] max-lg:w-[300px] max-md:w-[200px] rounded-full  border-2 border-[#A2CFFE]"
            src={profilePic2}
            alt="img"
            width={500}
            height={500}
          />
          <div className="flex flex-col gap-6 max-lg:w-full max-sm:justify-center max-sm:text-center max-sm:gap-4">
            <h2 className="text-5xl font-bold max-md:text-3xl max-sm:text-2xl">
              Keelee Hagler 2009
            </h2>
            <h4 className="text-2xl font-bold max-md:text-xl">
              Columbia, MO 2027 Graduate
            </h4>
            <h4 className="text-2xl font-bold max-md:text-xl">
              Rock Bridge High School Sophomore
            </h4>
            <h4 className="text-2xl font-bold max-md:text-xl">
              Aces Fastpitch Club,22
            </h4>
            <div className="flex items-center gap-4 max-sm:justify-center">
              <h4 className="text-2xl max-md:text-xl font-bold border-r-4 border-[#FF6262] pr-6 ">
                RHP, 2B, 1B
              </h4>
              <div>
                <p className="flex items-center gap-2 max-md:text-sm">
                  <BiSolidPhoneCall /> abc@gmail.com
                </p>
                <p className="flex items-center gap-2 mt-1">
                  <IoMail /> 0123-456-789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-6 max-w-screen-2xl mx-auto gap-10 px-10 max-md:px-4 relative text-white -top-36 max-xl:top-0">
        <div className="bg-[#012555] border-[6px] max-sm:border-4 justify-center text-center border-[#A2CFFE] p-8 max-sm:p-4 w-[250px] max-2xl:w-full flex flex-col items-center rounded-[30px] max-sm:rounded-[25px]">
          <HiAcademicCap className="text-7xl max-sm:text-4xl" />
          <h3 className="text-2xl font-bold max-md:text-xl my-2">GPA</h3>
          <p className="">4.10 GPA</p>
        </div>
        <div className="bg-[#012555] border-[6px] max-sm:border-4 justify-center text-center border-[#A2CFFE] p-8 max-sm:p-4 w-[250px] max-2xl:w-full flex flex-col items-center rounded-[30px] max-sm:rounded-[25px]">
          <FaBaseballBatBall className="text-5xl max-sm:text-2xl" />
          <h3 className="text-2xl font-bold max-md:text-xl my-2">
            Batting Exit Velo
          </h3>
          <p className="">77 MPH</p>
        </div>
        <div className="bg-[#012555] border-[6px] max-sm:border-4 justify-center text-center border-[#A2CFFE] p-8 max-sm:p-4 w-[250px] max-2xl:w-full flex flex-col items-center rounded-[30px] max-sm:rounded-[25px]">
          <IoIosBaseball className="text-7xl max-sm:text-4xl" />
          <h3 className="text-2xl font-bold max-md:text-xl my-2">
            Throwing Velo
          </h3>
          <p className="">62 MPH</p>
        </div>
        <div className="bg-[#012555] border-[6px] max-sm:border-4 justify-center text-center border-[#A2CFFE] p-8 max-sm:p-4 w-[250px] max-2xl:w-full flex flex-col items-center rounded-[30px] max-sm:rounded-[25px]">
          <FaTachometerAlt className="text-7xl max-sm:text-4xl" />
          <h3 className="text-2xl font-bold max-md:text-xl my-2">
            Pitching Velo
          </h3>
          <p className="">60 MPH</p>
        </div>
        <div className="bg-[#012555] border-[6px] max-sm:border-4 justify-center text-center border-[#A2CFFE] p-8 max-sm:p-4 w-[250px] max-2xl:w-full flex flex-col items-center rounded-[30px] max-sm:rounded-[25px]">
          <FaRunning className="text-7xl max-sm:text-4xl" />
          <h3 className="text-2xl font-bold max-md:text-xl my-2">
            Home To First
          </h3>
          <p className="">2.77 SEC</p>
        </div>
      </div>

      <div className="flex justify-center -mt-28 max-xl:mt-2">
        <div>
          <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
            Videos
          </h2>
          <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[30%]" />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 mt-8 grid grid-cols-4 gap-6 max-[1400px]:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 mb-20 max-md:mb-10">
        {cardArr.map((item, index) => {
          return (
            <div key={index}>
              <CardComp
                image={item.image}
                head={item.head}
                views={item.views}
                date={item.date}
              />
            </div>
          );
        })}
      </div>

      <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-10 flex items-center gap-20 max-xl:flex-wrap-reverse max-xl:justify-center max-xl:gap-0 max-xl:mt-10">
        <div>
          <div>
            <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
              Player Profile
            </h2>
            <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[3%] max-sm:w-[15%]" />
          </div>
          <p className="mt-4 max-sm:text-sm">
            Hello! My name is [Your Name], and I am an aspiring college softball
            outfielder from [Your City, State]. My love for softball began at a
            young age, and over the years, I have honed my skills to become a
            versatile and strategic player. I take pride in my speed and agility
            in the outfield, my strong batting average, and my ability to read
            the game and anticipate plays. As a team player, I value
            collaboration and always strive to uplift my teammates, both on and
            off the field.
          </p>
          <p className="mt-4 max-sm:text-sm">
            Academically, I maintain a 4.11 weighted GPA and am a proud member
            of the National Honor Society. I believe in the importance of
            balancing sports with academics, and my dedication to both has
            helped me develop strong time management and leadership skills.
            Additionally, I have completed over 100 hours of volunteer work in
            the past year, which has been incredibly rewarding and has taught me
            the value of giving back to my community.
          </p>
          <p className="mt-4 max-sm:text-sm">
            Off the field, I enjoy mentoring younger players, participating in
            school clubs, and staying active through various sports and fitness
            activities. My goal is to bring my passion for softball and my
            commitment to excellence to a college team where I can continue to
            grow as an athlete and a student. I am excited about the opportunity
            to contribute to a collegiate softball program and to learn from
            experienced coaches and teammates.
          </p>
          <p className="mt-4 max-sm:text-sm">
            Thank you for taking the time to get to know me. I look forward to
            connecting and exploring how I can be a valuable addition to your
            team!
          </p>
        </div>
        <Image
          className="w-[45%] max-lg:w-[800px]"
          src={player}
          alt="img"
          width={845}
          height={600}
        />
      </div>

 {/* table section  */}

<div>
<div className="flex justify-center mt-6">
        <div>
          <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
            Athletics
          </h2>
          <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[30%]" />
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold mt-4">Positions</h2>
      <p className="text-center mt-4">[Positions listed in order]</p>

      <div className="mt-8 max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-8">
        <div className="border-[3px] border-[#D2D2D2] p-6  max-w-screen-xl mx-auto rounded-[40px] shadow-[0_4px_30px_2px_rgba(0,0,0,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr>
                  <th className="text-left ">
                    <h2 className="text-3xl font-semibold mt-4">Additional Athletic Info</h2>
                  </th>
                  <th className="w-[35%] text-left">
                    <h2 className="text-3xl font-semibold mt-4">Athletic Honors</h2>
                  </th>
                  <th className="text-left">
                    <h2 className="text-3xl font-semibold mt-4">Other Sports</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-4">5-10-5 Shuttle : 4.68 sec</td>
                  <td>
                    <ul className="mt-4 list-disc list-inside">
                      <li className="mt-2">Jan 2023 - Ranked #24 in class of 2025 by Showtime Sports</li>
                    </ul>
                  </td>
                  <td>5-10-5 Shuttle : 4.68 sec</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul className="mt-4 list-disc list-inside">
                      <li className="mt-2">2022 Colorado Sparkler - Qualified in top 10% of hitters based on CSE sensor data.</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul className="mt-4 list-disc list-inside">
                      <li className="mt-2">Awarded 2022 BVSW Varsity Softball Defensive Player of the Year as a Freshman</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul className="mt-4 list-disc list-inside">
                      <li className="mt-2">2022 Kansas Region 5A Champions</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul className="mt-4 list-disc list-inside">
                      <li className="mt-2">2022 BVSW Varsity Softball - Eastern Kansas League Champions (EKL).</li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</div>


{/* table section 2 */}

      <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4">
        <h2 className="text-center text-3xl font-semibold mt-4">Upcoming Tournament Schedule</h2>

        <div className="border-[10px] border-[#012555] bg-[#012555] text-white my-6  max-w-screen-xl mx-auto rounded-[40px]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr>
                  <th className="text-3xl font-semibold text-start p-4">Name Of Event</th>
                  <th className="text-3xl font-semibold text-start p-4">Date</th>
                  <th className="text-3xl font-semibold text-start p-4">Location</th>
                  <th className="text-3xl font-semibold text-start p-4"><select className="bg-[#012555] text-white outline-none cursor-pointer" name="" id=""><option value="">All</option></select></th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#012555]">
                <tr className="border-2 border-[#E2E2E2]">
                  <td className="p-4">USSSA World Fastpitch Championship</td>
                  <td className="p-4">
                    <p>07/14/24</p>
                    <p>07/19/24</p>
                  </td>
                  <td className="p-4">Kansas City</td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-2 border-[#E2E2E2]">
                  <td className="p-4">Top Gun Elite Championship</td>
                  <td className="p-4">
                    <p>07/14/24</p>
                    <p>07/19/24</p>
                  </td>
                  <td className="p-4">Kansas City</td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-2 border-[#E2E2E2]">
                  <td className="p-4">Colorado Sparkler (16U Power Pool)</td>
                  <td className="p-4">
                    <p>07/14/24</p>
                    <p>07/19/24</p>
                  </td>
                  <td className="p-4">Kansas City</td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-2 border-[#E2E2E2]">
                  <td className="p-4">Scenic City (top 25 Division)</td>
                  <td className="p-4">
                    <p>07/14/24</p>
                    <p>07/19/24</p>
                  </td>
                  <td className="p-4">Kansas City</td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-2 border-[#E2E2E2]">
                  <td className="p-4">Top Gun Invite</td>
                  <td className="p-4">
                    <p>07/14/24</p>
                    <p>07/19/24</p>
                  </td>
                  <td className="p-4">Kansas City</td>
                  <td className="p-4"></td>
                </tr>
              </tbody>

            </table>
          </div>
              <button className="p-2 px-4">Show More</button>

        </div>
      </div>


      {/* table section 3 */}

      <div>
      <div div className="flex justify-center mt-6">
        <div>
          <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
          Academics
          </h2>
          <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[30%]" />
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold mt-4">High School</h2>
      <p className="text-center mt-4">Rock Bridge High School Sophomore</p>

      <div className="mt-8 max-w-screen-2xl mx-auto px-10 max-md:px-4 mb-8">
        <div className="border-[3px] border-[#D2D2D2] p-6  max-w-screen-xl mx-auto rounded-[40px] shadow-[0_4px_30px_2px_rgba(0,0,0,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-start ">
                    <h2 className="text-3xl font-semibold mt-4">4.11/4.00</h2>
                  </th>
                  <th className=" text-start">
                    <h2 className="text-3xl font-semibold mt-4">2025</h2>
                  </th>
                  <th className="text-start">
                    <h2 className="text-3xl font-semibold mt-4">2105165208</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-4">GPA (weighted)</td>
                  <td className="pt-4">Class Year</td>
                  <td className="pt-4">NCAA Eligibility #</td>
                </tr>
              </tbody>
            </table>

          </div>
            <h4 className="text-[#012555] text-xl mt-8">Sport Management/Marketing or Business</h4>
            <p className="text-lg">Intended Major / Area of Study</p>
        </div>
      </div>
      </div>


      <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 mt-16">
        <div>
            <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
            Academics Honors
            </h2>
            <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[3%] max-sm:w-[15%]" />
          </div>

          <p className="mt-3">Principal’s Honor Rol 4.0 GPA (for students with 4.0 or higher GPA)</p>
          <ul className="list-disc list-inside ">
            <li className="mt-2">2024 Springs Semester (1 AP Class)</li>
            <li className="mt-2">2023 Fall Semester (1 AP Class)</li>
            <li className="mt-2">2023 Springs Semester (4 honors Class)</li>
            <li className="mt-2">2022 Fall Semester (4 honors Classes)</li>
            <li className="mt-2">2022 Springs Semester (1 honors Class)</li>
            <li className="mt-2">2021 Fall Semester (1 honors Classes)</li>
          </ul>
      </div>
      

    <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 my-10">
      <div className=" border-[16px] border-[#012555] rounded-[20px] p-4 grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
          <button className="flex items-center gap-2 bg-[#012555] text-white p-2 px-4 text-lg rounded-xl group transition-all justify-between"> <span className="flex items-center gap-2"><IoDocumentTextOutline className="text-4xl"/> June 2024 Transcript</span> <FaArrowRight className="text-2xl transition-all group-hover:translate-x-2"/></button>
          <button className="flex items-center gap-2 bg-[#012555] text-white p-2 px-4 text-lg rounded-xl group transition-all justify-between"> <span className="flex items-center gap-2"><IoDocumentTextOutline className="text-4xl"/> Fall 2021 principals Honor Roll</span> <FaArrowRight className="text-2xl transition-all group-hover:translate-x-2"/></button>
          <button className="flex items-center gap-2 bg-[#012555] text-white p-2 px-4 text-lg rounded-xl group transition-all justify-between"> <span className="flex items-center gap-2"><IoDocumentTextOutline className="text-4xl"/> Blue Valley Southwest Hight</span> <FaArrowRight className="text-2xl transition-all group-hover:translate-x-2"/></button>
        </div>
    </div>


    <div>
      <div div className="flex justify-center mt-6">
          <div>
            <h2 className="text-4xl font-bold max-lg:text-2xl max-md:text-xl mt-10">
            Academics
            </h2>
            <hr className="border-4 max-sm:border-2 border-[#E51A1A] w-[30%]" />
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-10 max-md:px-4 my-10 grid grid-cols-3 max-xl:grid-cols-2 gap-4 max-md:grid-cols-1">
          
          {playerCardArr.map((item)=>{
            return <PlayerCard image={item.image} head={item.head} contact={item.contact} mail={item.mail} twitter={item.twitter} insta={item.insta} youtube={item.youtube}/>
          })}
        </div>
    </div>
    </>
  );
};

export default page;

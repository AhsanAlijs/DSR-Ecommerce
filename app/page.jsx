import Image from "next/image";
import sec2 from '@/assets/sec2.png'
import sec2Image2 from '@/assets/sec2(2).png'
import process1 from '@/assets/process1.png'
import process2 from '@/assets/process2.png'
import process3 from '@/assets/process3.png'
import IntroBanner from "@/components/IntroBanner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="w-full">
        <IntroBanner/>
      </div>



      {/* section 2 */}

     <div>
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-40 pb-20 px-10 max-sm:px-4 max-xl:gap-20 max-md:flex-wrap-reverse max-md:gap-8 max-md:pb-14">
          <div className="w-[50%] transition-all max-lg:w-full">
            <h2 className="text-2xl font-semibold text-[#012555]">Elevate your recruiting game 
            with a custom player profile</h2>
            <p className="my-4">Our custom profiles are crafted to highlight each athlete's unique talents, academic dedication, and readiness to excel at the collegiate level, ensuring coaches have all the information they need to make informed recruiting decisions.</p>
            <Link href="/pricing" className='bg-[#012555] hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium mt-4'>Join Today</Link>
          </div>

          <div className="max-md:flex max-md:justify-center max-md:w-full ">
            <Image className="transition-all max-md:w-[350px] max-md:mx-auto text-center max-[500px]:w-full" src={sec2} alt="img" width={875} height={550}/>
          </div>
        </div>


        <div className="max-w-screen-2xl mx-auto flex flex-row-reverse items-center justify-between gap-40 pb-20 px-10 max-sm:px-4 max-xl:gap-20 max-md:flex-wrap-reverse max-md:gap-8">
          <div className="w-[50%] transition-all max-lg:w-full">
            <h2 className="text-2xl font-semibold text-[#012555]">The smart way to find your
            perfect school fit</h2>
            <p className="my-4">Diamond Sports Recruiting uses predicitive analytics to help find the best fit for you based on what the schools athletic needs are for your recruiting class and what your needs are academically.</p>
            <Link href="/pricing" className='bg-[#012555] hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium mt-10'>Join Today</Link>
          </div>

          <div className="max-md:flex max-md:justify-center max-md:w-full ">
            <Image className="transition-all max-md:w-[350px] max-md:mx-auto text-center max-[500px]:w-full" src={sec2Image2} alt="img" width={875} height={550}/>
          </div>
        </div>
      </div>


      {/* section 3 */}

    <div className=" max-w-screen-2xl mx-auto px-10 max-md:px-4">
      <h2 className="text-2xl font-semibold text-center text-[#012555]">A smarter approach to the college recruiting process</h2>

      <div className="flex items-start justify-center gap-20 max-lg:gap-10  mt-8 max-lg:flex-wrap">
        <div className="flex flex-col justify-center items-center max-lg:w-[60%] max-sm:w-full">
          <Image className="w-32 max-lg:w-20" src={process1} alt="img" width={140} height={140}/>
          <h3 className="text-xl font-semibold text-[#012555] mt-2 text-center">Build your brand</h3>
          <p className="mt-2 text-center">Create a custom player profile that outlines your goals, aspirations, and what sets you apart as an athlete and student</p>
        </div>

        <div className="flex flex-col justify-center items-center  max-lg:w-[60%] max-sm:w-full">
          <Image className="w-32 max-lg:w-20" src={process2} alt="img" width={140} height={140}/>
          <h3 className="text-xl font-semibold text-[#012555] mt-2 text-center">Proactive Communication & Networking</h3>
          <p className="mt-2 text-center">Leverage our comprehensive, always up to date, database of college coaches contact information to connect with coaches, share updates, and increase your visibility!</p>
        </div>

        <div className="flex flex-col justify-center items-center  max-lg:w-[60%] max-sm:w-full">
          <Image className="w-32 max-lg:w-20" src={process3} alt="img" width={140} height={140}/>
          <h3 className="text-xl font-semibold text-[#012555] mt-2 text-center">Expert Guidance & Technology</h3>
          <p className="mt-2 text-center">Leverage expert guidance and predictive technology to streamline your recruiting process, find your best college fit</p>
        </div>
      </div>
    </div>


    {/* section 4 */}

    <div className="bg-[#012555] flex items-center justify-center mt-10 p-14 max-sm:p-8 max-sm:text-center gap-14 max-sm:flex-wrap">
      <h2 className="text-2xl font-semibold text-white w-[30%] max-xl:w-[60%] max-sm:w-full">Are you ready to join Diamond Sports Recruiting?</h2>
      <Link href="/pricing" className='bg-white hover:bg-[#ffffffad] transition-all text-[#012555]  p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Join Today</Link>
    </div>

    </div>
  );
}

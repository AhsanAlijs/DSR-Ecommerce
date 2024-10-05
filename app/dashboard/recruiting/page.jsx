import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <div className='flex items-center gap-8 flex-wrap'>
          <div className='flex flex-col '>
            <label className='text-2xl font-semibold max-lg:text-lg' htmlFor="">Select Your Grade/Year</label>
            <select className='bg-[#FAFBFC] w-[400px] max-xl:w-full p-2 px-4 rounded-lg border border-[#012555] outline-none mt-2' name="" id="">
              <option value="">Sophomore (10th)</option>
              <option value="">Sophomore (9th)</option>
              <option value="">Sophomore (8th)</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl font-semibold max-lg:text-lg' htmlFor="">Select Month</label>
            <select className='bg-[#FAFBFC] w-[400px] max-xl:w-full p-2 px-4 rounded-lg border border-[#012555] outline-none mt-2' name="" id="">
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </div>
        </div>


        <p className='text-sm max-md:text-xs mt-6'>Overall, a monthly recruiting plan is a strategic approach that helps you navigate the complex recruiting process with confidence, ensuring you make the most of your high school years and position yourself effectively for college softball opportunities. Select your grade/year and the month above and we will provide you all the details needed by month to navigate the recruiting process.</p>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>1. Keeps You Organized and Focused</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>A monthly plan helps you break down the recruiting process into manageable steps, ensuring that you stay on top of important tasks such as communicating with coaches, attending camps, and keeping your academics strong.</li>
          <li className='text-sm max-md:text-xs'>By following a plan, you reduce the risk of missing deadlines, overlooking opportunities, or feeling overwhelmed by the process.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>2. Maximizes Exposure to College Coaches</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>A structured plan ensures you consistently engage in activities that increase your visibility, such as attending showcases, updating your recruiting profile, and reaching out to coaches.</li>
          <li className='text-sm max-md:text-xs'>Regularly updating coaches on your progress keeps you on their radar and shows your commitment and interest in their program</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>3. Helps You Stay Ahead of the Competition</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>The recruiting process is highly competitive, and starting early with a clear plan gives you a head start. By following a timeline, you can take advantage of early recruiting opportunities and avoid scrambling to catch up later.</li>
          <li className='text-sm max-md:text-xs'>Consistent effort over time builds a stronger profile and allows you to be more selective with your college choices.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>4. Balances Athletic and Academic Priorities</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>A monthly plan helps you maintain a balance between your athletic commitments and academic responsibilities. Both are crucial for college admission and eligibility, and a plan ensures neither is neglected</li>
          <li className='text-sm max-md:text-xs'>By keeping academics at the forefront, you’re more likely to meet the eligibility requirements for the schools and programs you’re interested in.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>5. Reduces Stress and Anxiety</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>The college recruiting process can be stressful, especially if you’re unsure of what to do next. A monthly plan provides clarity and direction, reducing uncertainty and helping you feel more in control of your journey.</li>
          <li className='text-sm max-md:text-xs'>Knowing you’re making steady progress each month can boost your confidence and keep you motivated.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>6. Enhances Decision-Making</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>By following a structured plan, you have time to research and evaluate your options carefully. This ensures that when it comes time to make important decisions, such as selecting a college or committing to a program, you’re well-informed and confident in your choice.</li>
          <li className='text-sm max-md:text-xs'>Regular reflection and assessment built into the plan help you adjust your goals and strategies as needed, ensuring you stay aligned with your ultimate objectives.</li>
        </ul>

        <h2 className='text-xl font-semibold mt-6 max-md:text-lg'>7. Encourages Long-Term Development</h2>
        <ul className='pl-6 list-disc mt-2'>
          <li className='text-sm max-md:text-xs'>A monthly recruiting plan isn’t just about getting noticed; it’s also about continuous improvement. The plan encourages you to develop your skills, fitness, and mental game consistently over time, making you a better athlete and a more attractive recruit.</li>
          <li className='text-sm max-md:text-xs'>By setting and achieving monthly goals, you build a track record of success that demonstrates your growth and commitment to potential college coaches.</li>
        </ul>
      </div>
    </>
  )
}

export default page
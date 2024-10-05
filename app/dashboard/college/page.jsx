'use client'
import HomeCard from '@/components/dashboard/HomeCard';
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import companyLogo from '@/assets/dashboard/company-logo.png'
const page = () => {
  const cardArr = [
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "4540",
      acceptanceRate : "44%",
      collegeType:"Private",
      Speciality:"HBCU",
      graduationYear:"2002",
      id: 5342
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "1000",
      acceptanceRate : "44%",
      collegeType:"Private",
      id: 3648
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "6540",
      acceptanceRate : "44%",
      studentBodySize:"Medium",
      collegeType:"Public",
      id: 9802
    },
  ]
  const [showMore, setShowMore] = useState(false);
  const [graduationYearState, setGraduationYearState] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
    // State for filters
    const [filters, setFilters] = useState({
      studyDuration: [],
      major: [],
      collegeType: [],
      studentBodySize: [],
      minAcceptanceRate: '',
      maxAcceptanceRate: '',
      Cost:'',
      SportsDivision:'',
      YourPositions:'',
      Speciality:'',
      graduationYear:'',

    });
  
    // Handle filter changes
    const handleFilterChange = (filterCategory, value) => {
      setFilters(prevFilters => {
        const updatedCategory = prevFilters[filterCategory].includes(value)
          ? prevFilters[filterCategory].filter(item => item !== value)
          : [...prevFilters[filterCategory], value];
  
        return { ...prevFilters, [filterCategory]: updatedCategory };
      });
    };
    const handleInputChange = (e) => {
      const value = e.target.value;
      setFilters(prevFilters => ({
        ...prevFilters,
        graduationYear: value // Update filters state directly
      }));
    };
  
    const handleAcceptanceRateChange = (e, type) => {
      const value = e.target.value;
      setFilters(prevFilters => ({
        ...prevFilters,
        [type]: value
      }));
    };

      // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convert search query to lowercase
  };
  
    // Filtering logic
    const filteredCards = cardArr.filter(item => {
      const matchesStudyDuration = filters.studyDuration.length === 0 || filters.studyDuration.includes(item.studyDuration);
      const matchesMajor = filters.major.length === 0 || filters.major.includes(item.major);
      const matchesCollegeType = filters.collegeType.length === 0 || filters.collegeType.includes(item.collegeType);
      const matchesStudentBodySize = filters.studentBodySize.length === 0 || filters.studentBodySize.includes(item.studentBodySize);
      const matchesCost = filters.Cost.length === 0 || filters.Cost.includes(item.tuitionCost);
      const matchesSpeciality = filters.Speciality.length === 0 || filters.Speciality.includes(item.Speciality);
      const matchesGraduationYear = filters.graduationYear === '' || item.graduationYear === filters.graduationYear;
      const matchesAcceptanceRate =
        (filters.minAcceptanceRate === '' || item.acceptanceRate >= Number(filters.minAcceptanceRate)) &&
        (filters.maxAcceptanceRate === '' || item.acceptanceRate <= Number(filters.maxAcceptanceRate));
        const matchesSearchQuery = item.head.toLowerCase().includes(searchQuery);
      return matchesSearchQuery && matchesGraduationYear && matchesSpeciality && matchesStudyDuration && matchesMajor && matchesCollegeType && matchesStudentBodySize && matchesAcceptanceRate && matchesCost;
    });
  

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    
    <div className='grid grid-cols-[30%_auto] gap-6 max-xl:grid-cols-1 '>
      {/* filter  */}
      <div className='bg-white p-4 w-full rounded-xl'>
        <h1 className='text-3xl font-semibold'>Filters</h1>
        <form className='flex flex-col max-xl:flex-row max-xl:flex-wrap max-xl:gap-10'> 
          <div>

        
      <h1 className='text-xl font-medium my-5'>Study Duration</h1>
      <input type="checkbox" id="duration-4year" onChange={() => handleFilterChange('studyDuration', '4 Year')}/>
      <label htmlFor="duration-4year" className='pl-2'>4 Year</label>
      <br />
      <input type="checkbox" id="duration-2year" onChange={() => handleFilterChange('studyDuration', '2 Year')}/>
      <label htmlFor="duration-2year" className='pl-2'>2 Year</label>
      <br />
      </div>

      <div>
      <h1 className='text-xl font-medium my-5'>Majors</h1>
      <input type="checkbox" id="major-english" onChange={() => handleFilterChange('major', 'English')}/>
      <label htmlFor="major-english" className='pl-2'>English</label>
      <br />

      <input type="checkbox" id="major-education" onChange={() => handleFilterChange('major', 'Education')}/>
      <label htmlFor="major-education" className='pl-2'>Education</label>
      <br />

      <input type="checkbox" id="major-engineering" onChange={() => handleFilterChange('major', 'Engineering Technology')}/>
      <label htmlFor="major-engineering" className='pl-2'>Engineering Technology</label>
      <br />
      <input type="checkbox" id="major-business" onChange={() => handleFilterChange('major', 'Business Marketing')}/>
          <label htmlFor="major-business" className='pl-2'>Business Marketing</label>
          <br />

          <input type="checkbox" id="major-social" onChange={() => handleFilterChange('major', 'Social Technology')}/>
          <label htmlFor="major-social" className='pl-2'>Social Technology</label>
          <br />

      {showMore && (
        <>
          <input type="checkbox" id="major-business" onChange={() => handleFilterChange('major', 'Business Marketing')}/>
          <label htmlFor="major-business"className='pl-2'>Business Marketing</label>
          <br />

          <input type="checkbox" id="major-social" onChange={() => handleFilterChange('major', 'Social Technology')}/>
          <label htmlFor="major-social" className='pl-2'>Social Technology</label>
          <br />
        </>
      )}

      <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleToggle}>
        {showMore ? 'See Less' : 'See More (40)'}
      </p>

      </div>

      <div>

      

      <h1 className='text-xl font-medium my-5'>College Type</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('collegeType', 'Public')}/>
      <label htmlFor="" className='pl-2'>Public</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('collegeType', 'Private')}/>
      <label htmlFor="" className='pl-2'>Private</label>
        <br />

      <h1 className='text-xl font-medium my-5'>Cost</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('Cost', '10')}/>
      <label htmlFor="" className='pl-2'>$10</label>
      <br />
      <input type="checkbox" name="" id=""  onChange={() => handleFilterChange('Cost', '100')}/>
      <label htmlFor="" className='pl-2'>$100</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('Cost', '1000')}/>
      <label htmlFor="" className='pl-2'>$1000</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('Cost', '10000')}/>
      <label htmlFor="" className='pl-2'>$10000</label>
      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Student Body Size</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('studentBodySize', 'Small')}/>
      <label htmlFor="" className='pl-2'>Small</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('studentBodySize', 'Medium')}/>
      <label htmlFor="" className='pl-2'>Medium</label>

      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('studentBodySize', 'Large')}/>
      <label htmlFor="" className='pl-2'>Large</label>
      
      <br />
      <h1 className='text-xl font-medium my-5'>Speciality</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('Speciality', 'HBCU')}/>
      <label htmlFor="" className='pl-2'>HBCU</label>

      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Acceptance Rate</h1>
      <div className='flex items-center'>
      <input type="number" name="" id="" className='bg-white rounded-2xl border-2 border-gray-300 px-5 text-center py-2 w-20' value={filters.minAcceptanceRate} onChange={(e) => handleAcceptanceRateChange(e, 'minAcceptanceRate')}/>
      <p className='font-semibold px-5'>-</p>
      <input type="number" name="" id="" className='bg-white rounded-2xl border-2 border-gray-300 px-5 text-center py-2 w-20' value={filters.maxAcceptanceRate} onChange={(e) => handleAcceptanceRateChange(e, 'maxAcceptanceRate')}/>
      </div>
      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Sports Division</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('SportsDivision', 'NCAA D1')}/>
      <label htmlFor="" className='pl-2'>NCAA D1</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('SportsDivision', 'NCAA D2')}/>
      <label htmlFor="" className='pl-2'>NCAA D2</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('SportsDivision', 'NCAA D3')}/>
      <label htmlFor="" className='pl-2'>NCAA D3</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('SportsDivision', 'NAIA')}/>
      <label htmlFor="" className='pl-2'>NAIA</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('SportsDivision', 'JUCO')}/>
      <label htmlFor="" className='pl-2'>JUCO</label>
      </div>
      <div>

      

      <h1 className='text-xl font-medium my-5'>Graduation Year</h1>
      <input
              type="number"
              name="graduationYear"
              id="graduationYear"
              className="rounded-2xl bg-white border-2 border-gray-300 px-5 text-center py-2"
              value={filters.graduationYear} // Use filters state
              onChange={handleInputChange}
            /></div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Your Positions</h1>
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'P')}/>
      <label htmlFor="" className='pl-2'>P</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'C')}/>
      <label htmlFor="" className='pl-2'>C</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', '1B')}/>
      <label htmlFor="" className='pl-2'>1B</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', '2B')}/>
      <label htmlFor="" className='pl-2'>2B</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', '3B')}/>
      <label htmlFor="" className='pl-2'>3B</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'SS')}/>
      <label htmlFor="" className='pl-2'>SS</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'LF')}/>
      <label htmlFor="" className='pl-2'>LF</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'CF')}/>
      <label htmlFor="" className='pl-2'>CF</label>
      <br />
      <input type="checkbox" name="" id="" onChange={() => handleFilterChange('YourPositions', 'RF')}/>
      <label htmlFor="" className='pl-2'>RF</label>
      </div>
    </form>
      </div>

      <div className='w-full'>
        <div className='flex bg-white border py-1 w-full border-[#012555] rounded-2xl items-center '>
        <IoSearchOutline className='pl-4 text-4xl'/>
        <input
            type="text"
            name="search"
            id="search"
            className='pl-4 outline-none'
            placeholder='Search here...'
            value={searchQuery} // Bind search query to input field
            onChange={handleSearchChange} // Update search query on change
          />
        </div>
        <div className='flex flex-col gap-6 mt-6'>
        {filteredCards.length > 0 ? (
            filteredCards.map((item, index) => (
              <HomeCard
                key={index}
                image={item.image}
                head={item.head}
                description={item.description}
                web={item.web}
                location={item.location}
                tuitionCost={item.tuitionCost}
                acceptanceRate={item.acceptanceRate}
                index={index}
                id={item.id}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
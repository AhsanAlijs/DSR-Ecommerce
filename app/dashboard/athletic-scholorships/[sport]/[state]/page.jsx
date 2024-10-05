'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [selectedConference, setSelectedConference] = useState('all');
  const itemsPerPage = 10;
  const params = useParams();
  
  const [cityOption , setCityOption] = useState([])
  const [divisionOption , setDivisionOption] = useState([])
  const [conferenceOption , setConferenceOption] = useState([])
  
  const tableArr = [
    {
      schoolName: "Abelene Christian University",
      city: "Abilene",
      conference: "WAC",
      division: "NCAA Division 1",
      slug: "abelene-christian-university"
    },
    {
      schoolName: "Alvin Community College",
      city: "Alvin",
      conference: "SWJCC",
      division: "Junior College",
      slug: "alvin-community-college"
    },
    {
      schoolName: "Amarillo College",
      city: "Amarillo",
      conference: "WJCAC",
      division: "Junior College",
      slug: "amarillo-college"
    },
    {
      schoolName: "Angelina College",
      city: "Lufkin",
      conference: "SWJCC",
      division: "Junior College",
      slug: "angelina-college"
    },
    {
      schoolName: "Angelo State University",
      city: "San Angelo",
      conference: "Lone Star",
      division: "NCAA Division 2",
      slug: "angelo-state-university"
    },
    {
      schoolName: "Austin College",
      city: "Sherman",
      conference: "Southern (SCAC)",
      division: "NCAA Division 3",
      slug: "austin-college"
    },
    {
      schoolName: "Baylor University",
      city: "Waco",
      conference: "Big 12",
      division: "NCAA Division 1",
      slug: "baylor-university"
    },
    {
      schoolName: "Blinn College District",
      city: "Brenham",
      conference: "SWJCC",
      division: "Junior College",
      slug: "blinn-college-district"
    },
  ];



  const filteredItems = tableArr.filter(item => {
    const matchesSearch = item.schoolName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || item.city === selectedCity;
    const matchesDivision = selectedDivision === 'all' || item.division === selectedDivision;
    const matchesConference = selectedConference === 'all' || item.conference === selectedConference;
    return matchesSearch && matchesCity && matchesDivision && matchesConference;
  });

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the indices of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('all');
    setSelectedDivision('all');
    setSelectedConference('all');
    setCurrentPage(1);
  };


  const areFiltersApplied = () => {
    return searchTerm || selectedCity !== 'all' || selectedDivision !== 'all' || selectedConference !== 'all';
  };

  return (
    <>
      <div>
        <div className='bg-white p-4 rounded-lg mb-6 w-full flex gap-4 max-sm:flex-wrap'>
          <input
            className='border border-[#012555] p-2 px-4 rounded-md outline-none w-full'
            type="text"
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className='border border-[#012555] p-2 rounded-md outline-none cursor-pointer w-full'
            value={selectedCity}
            onChange={handleFilterChange(setSelectedCity)}
          >
            <option value="all">All Cities</option>
            {[...new Set(tableArr.map(a => (a.city)))].map((o, index) => <option key={index} value={o}>{o}</option>)}
            {/* <option value="all">All Cities</option>
            <option value="Abilene">Abilene</option>
            <option value="Alvin">Alvin</option>
            <option value="Amarillo">Amarillo</option>
            <option value="Lufkin">Lufkin</option>
            <option value="San Angelo">San Angelo</option>
            <option value="Sherman">Sherman</option>
            <option value="Waco">Waco</option>
            <option value="Brenham">Brenham</option> */}
          </select>
          <select
            className='border border-[#012555] p-2 rounded-md outline-none cursor-pointer w-full'
            value={selectedDivision}
            onChange={handleFilterChange(setSelectedDivision)}
          >
            <option value="all">All Divisions</option>
            {[...new Set(tableArr.map(a => (a.division)))].map((o, index) => <option key={index} value={o}>{o}</option>)}
            {/* <option value="NCAA Division 1">NCAA Division 1</option>
            <option value="NCAA Division 2">NCAA Division 2</option>
            <option value="NCAA Division 3">NCAA Division 3</option>
            <option value="Junior College">Junior College</option> */}
          </select>
          <select
            className='border border-[#012555] p-2 rounded-md outline-none cursor-pointer w-full'
            value={selectedConference}
            onChange={handleFilterChange(setSelectedConference)}
          >
            <option value="all">All Conferences</option>
            {[...new Set(tableArr.map(a => (a.conference)))].map((o, index) => <option key={index} value={o}>{o}</option>)}
            {/* <option value="WAC">WAC</option>
            <option value="SWJCC">SWJCC</option>
            <option value="WJCAC">WJCAC</option>
            <option value="Lone Star">Lone Star</option>
            <option value="Southern (SCAC)">Southern (SCAC)</option>
            <option value="Big 12">Big 12</option> */}
          </select>
          <button
            className={`border-l border-[#DCDEE6] ml-2 px-4 transition-all w-[600px] ${areFiltersApplied() ? "text-black" : "text-[#DCDEE6]"}`}
            onClick={clearFilters}
          >
            <span className='flex items-center gap-2'>Clear All <IoClose className={`border text-[#1F64AD] transition-all border-[#1F64AD]  rounded-full ${areFiltersApplied() ? "text-xl " : "bg-[#D4E5F7]"}`} /></span>
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full overflow-x-auto border border-[#E9ECFC]'>
            <thead>
              <tr className='bg-[#F6F7F9] border border-[#E9ECFC]'>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>School Name</th>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>City</th>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>Conference</th>
                <th className='text-start p-4 px-6 max-sm:text-sm max-sm:p-2 max-sm:px-4'>Division</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={index}>
                    <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC] text-blue-700'>
                      <Link href={params.state + "/" + item.slug}>{item.schoolName}</Link>
                    </td>
                    <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC]'>{item.city}</td>
                    <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC]'>{item.conference}</td>
                    <td className='p-4 px-6 max-sm:p-2 max-sm:px-4 max-sm:text-sm bg-white border-y border-[#E9ECFC]'>{item.division}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className='p-4 text-center'>
                    No results found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          <div aria-label="Page navigation example" className='py-4'>
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500'} bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100`}
                  aria-disabled={currentPage === 1}
                >
                  Previous
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <a
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100`}
                    aria-current={currentPage === index + 1 ? 'page' : undefined}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500'} bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100`}
                  aria-disabled={currentPage === totalPages}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

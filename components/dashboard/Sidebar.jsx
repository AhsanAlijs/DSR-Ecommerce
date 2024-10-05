'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import sideIcon from '@/assets/dashboard/sidebar/dashboard-btn-icon.svg';
import logoD from '@/assets/navbar/logoD.png'
import logo from '@/assets/navbar/logo.png'
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdMenu } from 'react-icons/io';
import profileImg from '@/assets/dashboard/profile.png'
import { TbLogout2 } from "react-icons/tb";
import { FaRegBell } from 'react-icons/fa6';

const Sidebar = (props) => {
    const params = useParams()

    console.log(`${params.sport}/${params.state}`);
    
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };
    const toggleClose = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('[data-drawer-toggle]')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    pathname.includes('dashboard/player-profile') ? console.log(true) : console.log(false);
    
    


    return (
        <>
        <div className='hidden max-sm:block z-50'>
          <div className='flex justify-between p-4 items-center text-[#012555]'>
          <TbLogout2 className='text-2xl hover:text-[#01255598] cursor-pointer transition-all'/>
            <Link href={'/dashboard'}><Image src={logo} alt='img' width={100} height={60}/></Link>
            <FaRegBell className='text-4xl text-[#FFA412] bg-[#FFFAF1] rounded-xl p-2 transition-all cursor-pointer hover:bg-[#f0ebe2]'/>
          </div>
          </div>
        
          <div className='flex items-center justify-between gap-2 p-4 w-full bg-white sm:fixed sticky top-0 z-20'>
            <div className='flex items-center gap-2 '>
              <button
                  onClick={toggleSidebar}
                  data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar"
                  type="button"
                  className="inline-flex items-center text-sm text-[#012555] rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
                  >
                  {/* <span className="sr-only">Open sidebar</span> */}
                  <IoMdMenu className='text-5xl p-2 max-sm:text-2xl max-sm:p-0'/>
              </button>
             
              <h2 className='text-xl text-[#012555] max-sm:font-normal font-semibold max-md:text-sm max-sm:text-xs sm:ml-64'>{pathname === "/dashboard" ? "Dashboard" : pathname.includes('dashboard/player-profile') ? "Player Profile" : pathname === "/dashboard/college" ? "College Fit Finder" :  pathname === "/dashboard/athletic-scholorships" || pathname === `/dashboard/athletic-scholorships/${params.sport}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}/${params.collage}` ? "Scholorship by State" : pathname === "/dashboard/favorites" ? "Favorites" : pathname === "/dashboard/coaches" ? "Coaches Contact" : pathname === "/dashboard/recruiting" ? "Recruiting Plan" : pathname === "/dashboard/tools" ? "Tools & Resources" : pathname === "/dashboard/tutorials" ? "Tutorials" : pathname === "/dashboard/help" ? "Help" : "" }</h2>
            </div>
            <div className='flex items-center gap-2'>
             <FaRegBell className='text-4xl text-[#FFA412] bg-[#FFFAF1] rounded-xl p-2 transition-all cursor-pointer hover:bg-[#f0ebe2] max-sm:hidden'/>
              <h2 className=' text-[#012555] font-semibold max-sm:font-normal text-sm max-sm:text-xs'>Musfiq Arham</h2>
              <Image className='max-sm:rounded-full rounded-[16px] max-sm:w-[30px]' src={profileImg} alt='img' width={50} height={50}/>

            </div>
          </div>
          
            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-2 pt-8 overflow-y-auto bg-gray-50 dark:bg-[#012555] flex flex-col justify-between pb-4 gap-2">
                    <ul className="flex flex-col  gap-y-1 font-medium">
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard"
                                className={`flex items-center p-2 transition-all group`}
                            >
                                <span className="ms-3 mb-6"><Image src={logoD} alt='img' width={150} height={50}/></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard" ? "text-[#012555]" : "text-white"}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/player-profile"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname.includes('dashboard/player-profile') ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname.includes('dashboard/player-profile') ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname.includes('dashboard/player-profile') ? "text-[#012555]" : "text-white"}`}>Player Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/college"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/college" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/college" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/college" ? "text-[#012555]" : "text-white"}`}>College Fit Finder</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/athletic-scholorships"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/athletic-scholorships" || pathname === `/dashboard/athletic-scholorships/${params.sport}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}/${params.collage}`  ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/athletic-scholorships" || pathname === `/dashboard/athletic-scholorships/${params.sport}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}/${params.collage}`  ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/athletic-scholorships" || pathname === `/dashboard/athletic-scholorships/${params.sport}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}` || pathname === `/dashboard/athletic-scholorships/${params.sport}/${params.state}/${params.collage}`  ? "text-[#012555]" : "text-white"}`}>Scholorship by State</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/favorites"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/favorites" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/favorites" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/favorites" ? "text-[#012555]" : "text-white"}`}>Favorites</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/coaches"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/coaches" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/coaches" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/coaches" ? "text-[#012555]" : "text-white"}`}>Coaches Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/recruiting"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/recruiting" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/recruiting" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/recruiting" ? "text-[#012555]" : "text-white"}`}>Recruiting Plan</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/tools"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/tools" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/tools" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/tools" ? "text-[#012555]" : "text-white"}`}>Tools & Resources</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/tutorials"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/tutorials" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/tutorials" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/tutorials" ? "text-[#012555]" : "text-white"}`}>Tutorials</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleClose}
                                href="/dashboard/help"
                                className={`flex items-center p-2 text-white rounded-lg ${pathname === "/dashboard/help" ? "bg-gray-100 text-[#012555] font-semibold hover:bg-gray-200" : "hover:bg-gray-700"} dark:text-white  transition-all  group`}
                            >
                                <Image className={pathname === "/dashboard/help" ? "" : "invert"} src={sideIcon} width={25} height={25} alt='Dashboard Icon'/>
                                <span className={`ms-3 ${pathname === "/dashboard/help" ? "text-[#012555]" : "text-white"}`}>Help</span>
                            </Link>
                        </li>
                       
                        
                    </ul>
                    <Link
                        onClick={toggleClose}
                        href="/"
                        className={`flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 transition-all dark:hover:bg-gray-700 group`}>
                        <TbLogout2 className='text-2xl transition-all rotate-180'/>
                        <span className="ms-3">Sign out</span>
                    </Link>
                </div>
            </aside>

            {/* Background Tint */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={toggleSidebar}
                />
            )}

            <div className={` sm:ml-64 ${pathname.includes('dashboard/player-profile') ? "p-0 pt-[82px] max-sm:p-0" : "p-10 max-sm:p-4 pt-28 max-sm:pt-8"}  bg-[#FAFBFC] min-h-screen `}>
                {props.children}
            </div>
        </>
    );
};

export default Sidebar;

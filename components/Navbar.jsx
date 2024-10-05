'use client'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/navbar/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const router = usePathname();
    
    const isActive = (path) => router === path ? 'font-semibold pb-2 text-[#012555]' : 'text-gray-700';

    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    // Handle the body scroll when mobile navigation is toggled
    useEffect(() => {
        if (mobileNav) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = ''; // Re-enable scroll
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [mobileNav]);

    const handleLinkClick = () => {
        setMobileNav(false);
    };

    return (
        <>
            {/* dekstop navigation */}
            <nav className='p-4 flex items-center justify-between max-w-screen-2xl mx-auto px-10 max-md:px-4 w-full max-sm:sticky max-sm:top-0 bg-white shadow-sm'>
                <div className='flex items-center gap-6 '>
                    <button className='hidden max-lg:block' onClick={toggleMobileNav}>
                        <HiOutlineMenu className='text-3xl'/>
                    </button>
                    <Link href={'/'}>
                        <Image src={logo} alt='img' width={180} height={50} className='max-xl:w-40 max-sm:w-20'/>
                    </Link>
                </div>

                <ul className='flex items-center gap-14 text-xl font-medium max-2xl:gap-8 max-xl:text-[95%] max-lg:hidden'>
                    {/* Add active link highlighting */}
                    {router === '/' ? <Link href={'/'}><li className={`cursor-pointer hover:text-[#000000af] transition-all ${isActive('/')}`}>Home</li>  {router === '/' && <hr className='border-2 border-[#E51A1A]' />}</Link> : <Link href={'/diamond-sports'}><li className={`cursor-pointer hover:text-[#000000af] transition-all ${isActive('/diamond-sports')}`}>Why Diamond Sports Recruiting</li>  {router === '/diamond-sports' && <hr className='border-2 border-[#E51A1A] w-40' />}</Link>}
                    <Link href={'/free-recruiting'}><li className={`cursor-pointer hover:text-[#000000af]  transition-all ${isActive('/free-recruiting')}`}>Free Recruiting Tips</li> {router === '/free-recruiting' && <hr className='border-2 border-[#E51A1A] w-40' />}</Link> 
                    <Link href={'/pricing'}><li className={`cursor-pointer hover:text-[#000000af] transition-all ${isActive('/pricing')}`}>Pricing</li>  {router === '/pricing' && <hr className='border-2 border-[#E51A1A]' />}</Link>
                    <Link href={'/customer-support'}><li className={`cursor-pointer hover:text-[#000000af] transition-all ${isActive('/customer-support')}`}>Customer Support</li> {router === '/customer-support' && <hr className='border-2 border-[#E51A1A]' />}</Link>
                </ul>

                <Link href={'/login'} className='bg-[#012555] hover:bg-[#012555ad] transition-all text-white p-2 px-6 text-2xl font-medium rounded-lg max-xl:text-lg max-sm:text-sm max-sm:font-medium'>Login</Link>
            </nav>

            {/* mobile navigation */}
            <div 
                className={`fixed top-24 max-lg:top-[75px] max-sm:top-16 left-0 w-full bg-gray-100 p-4 py-8 transition-all duration-300 ease-in-out ${mobileNav ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-40 overflow-hidden'}`}
                style={{ maxHeight: mobileNav ? '100vh' : '0' }}
            >
                <button className='text-3xl absolute top-4 right-4' onClick={toggleMobileNav}>
                    <HiOutlineX />
                </button>
                <ul className='flex flex-col items-start gap-4 text-lg font-medium w-full mt-12'>
                {router === '/' ? <Link href={'/'} onClick={handleLinkClick} className='w-full'>
                        <li className={`cursor-pointer hover:text-[#000000af] transition-all w-full p-2 px-3 rounded-xl ${router === '/' ? "bg-gray-300" : "bg-gray-100"}`}>
                            Home
                        </li>
                    </Link> : <Link href={'/diamond-sports'} onClick={handleLinkClick} className='w-full'>
                        <li className={`cursor-pointer hover:text-[#000000af] transition-all w-full p-2 px-3 rounded-xl ${router === '/diamond-sports' ? "bg-gray-300" : "bg-gray-100"}`}>
                        Why Diamond Sports Recruiting
                        </li>
                    </Link>}
                    
                    <Link href={'/free-recruiting'} onClick={handleLinkClick} className='w-full'>
                        <li className={`cursor-pointer hover:text-[#000000af] transition-all w-full p-2 px-3 rounded-xl ${router === '/free-recruiting' ? "bg-gray-300" : "bg-gray-100"}`}>
                            Free Recruiting Tips
                        </li>
                    </Link> 
                    <Link href={'/pricing'} onClick={handleLinkClick} className='w-full'>
                        <li className={`cursor-pointer hover:text-[#000000af] transition-all w-full p-2 px-3 rounded-xl ${router === '/pricing' ? "bg-gray-300" : "bg-gray-100"}`}>
                            Pricing
                        </li>
                    </Link>
                    <Link href={'/customer-support'} onClick={handleLinkClick} className='w-full'>
                        <li className={`cursor-pointer hover:text-[#000000af] transition-all w-full p-2 px-3 rounded-xl ${router === '/customer-support' ? "bg-gray-300" : "bg-gray-100"}`}>
                            Customer Support
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar
import React from 'react'
import player1 from "@/assets/profile/player1.png";
import player2 from "@/assets/profile/player2.png";
import player3 from "@/assets/profile/player3.png";
import Image from 'next/image';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoLogoYoutube, IoMail } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";

const PlayerCard = (props) => {
  return (
    <>
        <div className='bg-[#012555] text-white w-full rounded-[10px]'>
            <Image className='w-full object-cover h-[250px] max-sm:h-[150px]' src={props.image} width={553} height={250}/>

            <div className='p-6 border-[6px] border-[#EFEFEF] rounded-b-[10px]'>
                <h2 className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl '>{props.name}</h2>

                <p className='flex items-center gap-2 mt-6 max-sm:text-xs'><BiSolidPhoneCall className='text-2xl max-sm:text-lg' /> {props.contact}</p>
                <p className='flex items-center gap-2 mt-4 max-sm:text-xs'><IoMail className='text-2xl max-sm:text-lg' /> {props.mail}</p>
                <p className='flex items-center gap-2 mt-4 max-sm:text-xs'><FaXTwitter className='text-2xl max-sm:text-lg' /> {props.twitter}</p>
                <p className='flex items-center gap-2 mt-4 max-sm:text-xs'><AiFillInstagram className='text-2xl max-sm:text-lg' /> {props.insta}</p>
                <p className='flex items-center gap-2 mt-4 max-sm:text-xs'><IoLogoYoutube className='text-2xl max-sm:text-lg' /> {props.youtube}</p>
            </div>
        </div>
    </>
  )
}

export default PlayerCard
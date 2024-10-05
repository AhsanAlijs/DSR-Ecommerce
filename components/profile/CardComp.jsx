import React from "react";
import playBtn from '@/assets/profile/playBtn.svg'
import Image from "next/image";

const CardComp = (props) => {
  return (
    <div className="rounded-[10px] shadow-[0_0px_30px_rgba(0,0,0,0.25)] max-md:w-full">
      <div className="relative">
        <Image className="w-full h-[250px] object-cover" src={props.image} alt="img" width={408} height={250} />
        <div className="flex justify-center ">
          <Image
            className="absolute top-[35%] cursor-pointer max-lg:w-[60px]"
            src={playBtn}
            alt="img"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold max-md:text-lg ">{props.head}</h3>
        <div className="flex items-center mt-4 gap-2">
          <p className="border-r-4 pr-2 border-[#FF6262] text-[#7C7C7C] max-sm:text-sm">
            {props.views}
          </p>
          <p className="text-[#7C7C7C] max-sm:text-sm">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComp;

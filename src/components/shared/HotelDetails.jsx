import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HotelDetails = () => {

  return (
    <div className="h-[60px] bg-gray-800 flex flex items-center justify-end text-white bg-black/50 w-full md:absolute md:bottom-0 md:opacity-0 md:rounded-none md:duration-500 md:group-hover:bottom-0 md:group-hover:opacity-100 ">
      <MdKeyboardArrowRight className="text-6xl" />
    </div>
  );
};

export default HotelDetails;

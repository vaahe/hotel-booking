import React from "react";
import HotelDetails from "./HotelDetails";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router";

const HotelCard = ({ hotel, show, setIsModalOpen, setId }) => {
  const navigate = useNavigate();
  const navigateToEdit = (e) => {
    e.preventDefault();
    navigate("/hotels/edit", { state: { id: hotel._id } });
  };
  const openDeleteModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setId(hotel._id);
  };
  
  return (
    <>
      <img
        className="h-80 md:h-full w-full relative"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
        alt={hotel.title}
      />

      <div className="absolute px-3 py-1 bottom-0 text-2xl h-[60px] w-full flex items-center bg-black/50">
        <h1 className=" w-4/5 truncate text-white">{hotel.title}</h1>
        {show && (
          <div className="flex">
            <button onClick={navigateToEdit}>
              <FiEdit2 className="text-[#d0bd6e] hover:bg-[#d0bd6e] rounded hover:text-black mr-3 ml-5" />
            </button>
            <button onClick={openDeleteModal}>
              <AiOutlineDelete className="text-[#d0bd6e] hover:bg-[#d0bd6e] rounded hover:text-black" />
            </button>
          </div>
        )}
      </div>

      <HotelDetails />
    </>
  );
};

export default HotelCard;

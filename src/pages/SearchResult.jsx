import React, { useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { searchListings } from "../api/datas/allHotels";
import SearchForm from "../components/home/hero/SearchForm";
import HotelCard from "../components/shared/HotelCard";
import NotFound from "../components/shared/NotFound";

const SearchResult = () => {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState();

  const location = searchParams.get("location");
  const date = searchParams.get("date");
  const bed = searchParams.get("bed");

  useEffect(() => {
    searchListings({ location, date, bed }).then((res) => {
      setHotels(res.data);
    });
  }, [window.location.search]);

  return (
    <div ref={myRef} className="mt-32">
      <div className="mb-10">
        <SearchForm locationProps={location} dateProps={date} bedProps={bed} />
      </div>
      <div className="md:grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto">
        {hotels && hotels.length ? (
          hotels.map((hotel) => (
            <div
              className="col-span-4 shadow-lg shadow-neutral-900/90 rounded-2xl relative md:h-72 mb-5 group md:overflow-hidden"
              key={hotel._id}
              md={3}
            >
              <Link to={`/hotels/${hotel._id}`} className="">
                <HotelCard hotel={hotel} />
              </Link>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default SearchResult;

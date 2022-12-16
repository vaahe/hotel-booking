import React from "react";

const WelcomeText = () => {
  return (
    <div className="px-4 md:px-0 mt-10 flex flex-col text-center items-center md:absolute md:mt-0">
      <h2 className="text-black text-6xl md:text-white md:text-7xl font-caveat lg:text-8xl font-semibold">
        Your guide to luxury travel
      </h2>
      <hr className="w-96 mt-8" />
      <p className="text-xl mt-10 font-black md:text-white md:text-3xl lg:text-3xl">
        Find out more now with Hotellux
      </p>
    </div>
  );
};

export default WelcomeText;

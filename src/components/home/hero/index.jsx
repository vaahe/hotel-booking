import React from "react";
import BackgroundEffect from "./BackgroundEffect";
import SearchForm from "./SearchForm";
import WelcomeText from "./WelcomeText";

const Hero = () => {
  return (
    <div className="relative md:flex justify-center items-center">
      <BackgroundEffect />
      <WelcomeText />
      <div className="flex justify-between md:p-10 md:absolute t-0 md:bottom-0 w-2/3 bg-black/50 h-32">
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;

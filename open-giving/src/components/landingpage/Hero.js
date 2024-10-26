import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import { HeroContent } from '../constants';

export const Hero = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const target = document.getElementById('orgs');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-bg h-[50vh] md:h-[70vh] w-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-[40px] md:text-[80px] 2xl:text-[100px] font-bold font-sans w-4/5 md:w-2/3 xl:w-1/2 text-center text-[#301d41] leading-[40px] md:leading-[75px] 2xl:leading-[100px]">
        {HeroContent.header}
      </h1>
      <p className="text-[#3a3043] font-sans font-normal text-xl md:text-2xl text-center w-[70%] md:w-[36%] 2xl:w-1/3">
        {HeroContent.subheader}
      </p>
      <a
        href="#orgs"
        onClick={handleScroll}
        className="bg-[#9131eb] md:bg-primary hover:bg-[#9131eb] font-medium font-sans rounded-lg px-6  py-3 lg:py-4 text-white flex flex-row items-center justify-center gap-3 text-2xl md:text-[30px] group"
      >
        Donate Now
        <FaHeart className="group-hover:opacity-100 opacity-100 md:opacity-50" />
      </a>
    </div>
  );
};

export default Hero;

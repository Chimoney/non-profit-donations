import { FaHeart } from 'react-icons/fa6';
import { HeroContent } from '../constants';
export const Hero = () => {
  return (
    <div className="hero-bg h-[50vh] md:h-[70vh] w-full flex flex-col items-center justify-center gap-6 ">
      <h1 className=" text-[40px] md:text-[75px] 2xl:text-[100px] font-bold font-sans w-4/5 md:w-2/3 xl:w-1/2 text-center text-[#1A1A1A] leading-[40px] md:leading-[75px] 2xl:leading-[100px]">
        {HeroContent.header}
      </h1>
      <p className="text-[#1A1A1A90] font-sans text-xl md:text-2xl text-center w-4/5 md:w-1/2 2xl:1/3">
        {HeroContent.subheader}
      </p>
      <a
        href={`/`}
        className="bg-primary font-medium font-sans rounded-lg px-6 py-4 text-white flex flex-row items-center justify-center gap-3 text-xl md:text-[30px]"
      >
        Donate Now <FaHeart className="hover:opacity-50" />
      </a>
    </div>
  );
};

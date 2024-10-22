import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { FaGithub } from 'react-icons/fa';

const Header = () => (
  <div className="py-8 px-6 md:px-12 2xl:px-[20%] h-20 w-full border-b border-[#AE6DEA45] flex flex-row items-center justify-between">
    <Image
      src={'/logo.svg'}
      alt="Open Giving Logo"
      width={isMobile ? 180 : 220}
      height={isMobile ? 35 : 50}
    />
    <Link
      href="https://github.com/Chimoney/non-profit-donations"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="github repository"
    >
      <FaGithub className="size-[25px] md:size-[35px]" />
    </Link>
  </div>
);

export default Header;

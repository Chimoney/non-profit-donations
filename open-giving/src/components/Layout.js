import React from 'react';
import TestModeSwitcher from './TestModeSwitcher';
import Header from './Header';
import { FaHeart } from 'react-icons/fa6';
import Image from 'next/image';
const Layout = ({ children, plain = false }) => {
  return (
    <div className="min-h-screen  bg-gray-50 w-full">
      {!plain && <Header />}
      {children}
      {!plain && (
        <div className="fixed bg-white md:left-0 bottom-0 w-full  py-4 border-t border-[#AE6DEA45] justify-center z-50 text-center flex flex-row items-center">
          <span className="font-sans text-[#1A1A1A] text-[12px] md:text-xs flex flex-row items-center justify-center gap-1">
            Built with <FaHeart className="text-primary" /> by{' '}
            <Image
              src="/new/chimoney.svg"
              alt="chimoney logo"
              width={90}
              height={23}
            />
          </span>
        </div>
      )}
      <TestModeSwitcher />
    </div>
  );
};

export default Layout;

import { CircularProgress } from '@mui/material';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';

const DonateButton = ({
  onClick,
  children,
  otherClass,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`text-lg font-sans flex flex-row items-center justify-center font-medium gap-2 px-2 py-1 border border-[#8A2BE2]  rounded-[5px] ${
        otherClass ? otherClass : 'bg-[#8A2BE210] text-primary'
      }`}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
      <FaHeart className="opacity-50 hover:opacity-100" />
    </button>
  );
};

export default DonateButton;

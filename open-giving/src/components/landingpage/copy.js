import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

const CopyWithTooltip = ({ paymentID, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentID);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="relative max-w-[150px] my-3">
      <span
        className={`text-lg cursor-pointer font-sans flex flex-row items-center justify-center font-medium gap-2 px-2 py-1   rounded-[5px] text-white bg-primary`}
        onClick={handleCopy}
      >
        {text}
        <FaHeart className="opacity-50 hover:opacity-100" />
      </span>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyWithTooltip;

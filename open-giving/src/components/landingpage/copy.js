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
    <div className="relative max-w-[155px] mb-3">
      <span
        onClick={handleCopy}
        className="bg-[#9131eb] cursor-pointer md:bg-primary hover:bg-[#9131eb] font-medium font-sans rounded-[5px] p-[8px] text-white flex flex-row items-center justify-center gap-3 text-[18px] group"
      >
        {text}
        <FaHeart  className="size-[13px] group-hover:opacity-100 opacity-100 md:opacity-50" />
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

import { useRouter } from 'next/router';
import React from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const TestModeSwitcher = () => {
  const router = useRouter();
  const isTestMode = router.query.useTestPaymentID === '1';

  const handleToggle = () => {
    const query = { ...router.query };
    if (isTestMode) {
      delete query.useTestPaymentID;
    } else {
      query.useTestPaymentID = '1';
    }
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="fixed hidden md:flex bg-white right-6 2xl:right-[20%] bottom-0 pb-4 justify-center z-50 text-center flex-row items-center">
      <div className="cursor-pointer text-3xl" onClick={handleToggle}>
        {isTestMode ? (
          <FaToggleOn className="text-primary" />
        ) : (
          <FaToggleOff className="text-gray-400" />
        )}
      </div>
      <p
        className={`ml-2 font-sans text-[11px] md:text-xs ${
          isTestMode ? 'text-primary' : 'text-gray-400'
        }`}
      >
        Test Mode
      </p>
    </div>
  );
};

export default TestModeSwitcher;

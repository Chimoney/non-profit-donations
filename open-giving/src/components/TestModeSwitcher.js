import { Switch } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';


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
    <div className="fixed bg-white right-6 2xl:right-[20%] bottom-0 py-4 justify-center z-50 text-center flex flex-row items-center">
      <Switch
            checked={isTestMode}
            onChange={handleToggle}
            color={isTestMode ? 'primary' : 'default'}
            size="small"
          />
          <p className={`font-sans text-[11px] md:text-xs ${isTestMode ?  'text-primary':'text-gray-400'}`}>Test Mode</p>
      
    </div>
  );
};

export default TestModeSwitcher;

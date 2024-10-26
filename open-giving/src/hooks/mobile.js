import { useState, useEffect } from 'react';

const useIsMobileScreen = (mobileBreakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileScreen = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= mobileBreakpoint);
      }
    };

    checkMobileScreen();

    window.addEventListener('resize', checkMobileScreen);

    return () => window.removeEventListener('resize', checkMobileScreen);
  }, [mobileBreakpoint]);

  return isMobile;
};

export default useIsMobileScreen;

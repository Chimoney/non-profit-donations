import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

export const SelectDonationMethod = ({
  paymentMethods,
  handleToggle,
  selectedPaymentMethods,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="font-sans py-12 md:py-28 px-6 md:px-12 2xl:px-[20%] w-full flex flex-col items-center justify-center gap-6">
      <p className="text-[#1A1A1A] text-3xl text-center font-medium">
        Choose donation method
      </p>
      <div className="flex flex-row md:max-w-[80%] flex-wrap md:p-6 gap-2 md:gap-3 items-center justify-center">
        {paymentMethods.map((i) => {
          const isActive = selectedPaymentMethods.includes(i.type);
          return (
            <div
              className={`p-2 md:p-3 border ${
                isActive ? 'border-primary' : 'border-[#C4C4C450]'
              } gap-1 md:gap-3 rounded-[10px] text-base flex flex-row items-center cursor-pointer`}
              key={i.method}
              onClick={() => handleToggle(i.type)}
            >
              <div className={`relative`}>
                <input
                  type="checkbox"
                  checked={isActive}
                  readOnly
                  className="opacity-0 absolute h-0 w-0"
                />
                <div
                  className={`w-4 md:w-6 h-4 md:h-6 border md:border-[1.3px] ${
                    isActive ? 'border-primary' : 'border-gray-400'
                  } rounded flex items-center justify-center`}
                >
                  {isActive && (
                    <svg
                      className="w-2 md:w-4 h-2 md:h-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 md:gap-2">
                <Image
                  src={i.icon}
                  alt={`${i.method} logo`}
                  width={isMobile ? 14 : 24}
                  height={isMobile ? 14 : 24}
                />
                <span
                  className={`text-[12px] md:text-xs font-sans text-[#1A1A1A] ${
                    isActive ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {i.method}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import useIsMobileScreen from '@/hooks/mobile';
import Image from 'next/image';

export const SelectDonationMethod = ({
  paymentMethods,
  handleToggle,
  selectedPaymentMethods,
}) => {
  const isMobile = useIsMobileScreen();
  return (
    <div
      id="orgs"
      className={`font-sans pt-[35px] pb-[20px] md:py-[30px] lg:pt-[68px] px-6 md:px-12 2xl:px-[20%] w-full flex flex-col items-center justify-center gap-[18px] md:gap-[20px] ${
        selectedPaymentMethods && selectedPaymentMethods.length > 0
          ? ''
          : 'mb-12'
      }`}
    >
      <p className="text-[#301d41] text-2xl md:text-3xl text-center font-medium">
        Choose donation method
      </p>
      <div className="flex flex-row md:max-w-[80%] flex-wrap gap-2 md:gap-[20px] items-center justify-center">
        {paymentMethods.map((i) => {
          const isActive = selectedPaymentMethods.includes(i.type);
          return (
            <div
              className={`px-3 py-2 md:p-3 border ${
                isActive
                  ? 'border-primary'
                  : 'border-[#C4C4C450] bg-[#f1a7f205]'
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
                  className={`md:w-6 size-[14px] md:h-6 border-[1.2px] ${
                    isActive ? 'border-primary' : 'border-[#323232] opacity-80'
                  } rounded flex items-center justify-center`}
                >
                  {isActive && (
                    <svg
                      className="size-[12px] md:w-4 md:h-4 text-primary"
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
                  width={isMobile ? 19 : 24}
                  height={isMobile ? 19 : 24}
                />
                <span
                  className={`text-[12px] md:text-[15px] font-sans text-[#301d41] ${
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

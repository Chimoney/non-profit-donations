import React, { useState } from 'react';
import { MdClose, MdLocationOn } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DonationForm from './DonationForm';
import Image from 'next/image';
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa6';
import {
  filterDonationMethods,
  formatPaymentMethodName,
  getIconByMethod,
} from '@/utils/paymentMethods';
import useIsMobileScreen from '@/hooks/mobile';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-3xl mx-auto rounded-md shadow-lg">
        
        {children}
      </div>
    </div>
  );
};

const ModalContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

const NonProfitDialog = ({
  nonProfit,
  open,
  onClose,
  setSnackbarMessage,
  setSnackbarOpen,
  defaultLogo,
  useTestPaymentID,
}) => {
  const [dialogImgSrc, setDialogImgSrc] = useState(
    nonProfit?.logo || defaultLogo
  );
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);

  const handleDialogImageError = () => {
    setDialogImgSrc(defaultLogo);
  };

  if (!nonProfit) return null;

  const isMobile = useIsMobileScreen()
  const getPaymentID = (method) => {
    if (!method.paymentID) {
      return true;
    }
    if (typeof method.paymentID !== 'string' || method.paymentID.length > 0) {
      return true;
    }
    if (typeof method.paymentID === 'object') {
      return method.paymentID[useTestPaymentID ? 'test' : 'production'];
    }
    return method.paymentID;
  };

  const options = filterDonationMethods(nonProfit);

  const handleSelect = (paymentType) => {
    const s = nonProfit.paymentMethods.find((i) => i.type === paymentType);
    const paymentId = getPaymentID(s);
    setSelectedPaymentType(s);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
      <div className="w-full mb-[28px] flex flex-row items-center justify-between">
          <p className="font-sans font-medium text-[23px] text-[#453454]">
            {nonProfit.name}
          </p>
          <MdClose
            className="text-[#1A1A1A] text-xl cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-between">
          {selectedPaymentType && isMobile ? null : (
            <div className="md:w-1/2 ">
              <div className="md:w-[90%] md:mr-auto h-[115px] bg-[#FEFCFC] rounded-[10px] border border-[#8A2BE225] flex flex-row items-center justify-center">
                <img
                  src={dialogImgSrc}
                  alt={nonProfit.name}
                  width={100}
                  height={100}
                  onError={handleDialogImageError}
                  className="w-auto h-[100px] object-contain"
                />
              </div>
              <div className="flex flex-row items-center gap-3 mt-[10px] mb-[15px] md:mb-[20px]">
                {[
                  { icon: <MdLocationOn size={14} />, name: nonProfit.country },
                  {
                    icon: <FaRegCalendarAlt size={14} />,
                    name: `Founded: ${nonProfit.foundedYear}`,
                  },
                ].map((i) => {
                  return (
                    <span className="bg-[#EDEAEC] font-sans flex flex-row items-center px-[11px] py-[6px] text-[#4A4152] font-medium text-[11px] md:text-[12px] rounded-full gap-1">
                      {i.icon} {i.name}
                    </span>
                  );
                })}
              </div>
              <p className="text-[#4E4556] md:w-[90%] font-normal text-xs mb-[20px] md:mb-[25px] line-clamp-3 overflow-hidden font-sans">
                {nonProfit.description ? nonProfit.description : nonProfit.name}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-[11px] mb-[18px]">
                {[
                  {
                    icon: '/new/websiteIcon.svg',
                    name: 'Website',
                    link: nonProfit.website,
                  },
                  {
                    icon: '/new/at.svg',
                    name: nonProfit.email,
                    link: null,
                  },
                ]
                  .map((i) => {
                    return (
                      <span
                        key={i.name}
                        className="font-sans flex flex-row items-center text-primary underline font-medium text-xs rounded-full gap-1"
                      >
                        <Image
                          src={i.icon}
                          alt={i.name}
                          width={12}
                          height={12}
                        />
                        {i.link ? (
                          <a
                            href={i.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {i.name}
                          </a>
                        ) : (
                          <span>{i.name}</span>
                        )}
                      </span>
                    );
                  })}
              </div>
            </div>
          )}

          {/* donation options side */}
          {selectedPaymentType ? (
            <div className="md:w-1/2 border-t md:border-t-0 pt-4 md:pt-0 md:border-l border-[#8A2BE225]">
              <div className="md:w-[90%] md:ml-auto bg-[#FEFCFC] flex flex-col justify-center">
                <button
                  onClick={() => setSelectedPaymentType(null)}
                  className="flex flex-row mb-[30px] md:mb-[35px] items-center text-[14px] font-medium font-sans text-primary gap-2"
                >
                  <FaArrowLeft />
                  Back
                </button>
                <p className="font-sans font-medium  text-[23px] text-[#453454] flex flex-row gap-2 items-center">
                  Donate via {formatPaymentMethodName(selectedPaymentType.type)}
                  <img
                    src={getIconByMethod(selectedPaymentType.type)}
                    alt={`${selectedPaymentType.type}`}
                    width={18}
                    height={18}
                  />
                </p>
                <DonationForm
                  method={selectedPaymentType}
                  setSnackbarMessage={setSnackbarMessage}
                  setSnackbarOpen={setSnackbarOpen}
                  useTestPaymentID={useTestPaymentID}
                />
              </div>
            </div>
          ) : (
            <div className="md:w-1/2 pt-[20px] md:pt-0 border-t md:border-t-0  md:border-l border-[#8A2BE225]">
              <div className="md:w-[90%] md:ml-auto bg-[#FEFCFC] flex flex-col justify-center">
                <p className="font-sans font-medium text-[23px] text-[#453454] mb-[17px] md:mb-[15px]">
                  Donate via
                </p>
                {options.map((i) => {
                  return (
                    <button
                      onClick={() => handleSelect(i.type)}
                      className="border w-full px-[12px] py-[13px] md:py-[11px] mb-[10px]  border-[#C4C4C470] bg-[#F1E7F208] rounded-[8px] flex flex-row items-center justify-between"
                    >
                      <span className="flex flex-row items-center gap-2 text-sm text-[#453454] font-sans">
                        <img
                          src={i.icon}
                          alt={i.method}
                          className="size-[15px]"
                        />
                        {i.method}
                      </span>
                      <FaAngleRight size={15} color="#453454"/>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default NonProfitDialog;


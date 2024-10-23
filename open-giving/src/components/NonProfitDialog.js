import {
  Dialog,
  DialogContent,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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

const NonProfitDialog = ({
  nonProfit,
  open,
  onClose,
  setSnackbarMessage,
  setSnackbarOpen,
  defaultLogo,
  useTestPaymentID,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [dialogImgSrc, setDialogImgSrc] = useState(
    nonProfit?.logo || defaultLogo
  );
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);

  const handleDialogImageError = () => {
    setDialogImgSrc(defaultLogo);
  };

  if (!nonProfit) return null;
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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <div className="w-full mb-6 flex flex-row items-center justify-between">
          <p className="font-sans font-medium text-[23px] text-[#1A1A1A]">
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
              <div className="flex flex-row items-center gap-3 my-3">
                {[
                  { icon: <MdLocationOn size={18} />, name: nonProfit.country },
                  {
                    icon: <FaRegCalendarAlt size={18} />,
                    name: `Founded: ${nonProfit.foundedYear}`,
                  },
                ].map((i) => {
                  return (
                    <span className="bg-[#4E455610] font-sans flex flex-row items-center px-3 py-2 text-[#1A1A1A] font-medium text-xs rounded-full gap-1">
                      {i.icon} {i.name}
                    </span>
                  );
                })}
              </div>
              <p className="text-[#1A1A1A90] md:w-[90%] text-xs my-6 line-clamp-3 overflow-hidden">
                {nonProfit.description ? nonProfit.description : nonProfit.name}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-3 my-3">
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
                  .filter((i) => i.link && i.name)
                  .map((i) => {
                    return (
                      <span
                        key={i.name}
                        className="font-sans flex flex-row items-center text-[#1A1A1A] font-medium text-xs rounded-full gap-1"
                      >
                        <Image
                          src={i.icon}
                          alt={i.name}
                          width={12}
                          height={12}
                        />
                        {i.link ? (
                          <Link
                            href={i.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {i.name}
                          </Link>
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
            <div className="md:w-1/2 border-t md:border-t-0 pt-4 md:pt-0 md:border-l border-[#8A2BE2]">
              <div className="md:w-[90%] md:ml-auto bg-[#FEFCFC] flex flex-col justify-center">
                <button
                  onClick={() => setSelectedPaymentType(null)}
                  className="flex flex-row mb-3 items-center text-xs text-primary gap-2"
                >
                  <FaArrowLeft />
                  Back
                </button>
                <p className="font-sans font-medium text-[20px] md:text-[23px] text-[#1A1A1A] flex flex-row gap-2 items-center">
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
            <div className="md:w-1/2 border-t md:border-t-0  md:border-l border-[#8A2BE2]">
              <div className="md:w-[90%] md:ml-auto bg-[#FEFCFC] flex flex-col justify-center">
                <p className="font-sans font-medium text-[23px] text-[#1A1A1A]">
                  Donate via
                </p>
                {options.map((i) => {
                  return (
                    <button
                      onClick={() => handleSelect(i.type)}
                      className="border w-full p-2 my-2  border-[#C4C4C470] rounded-[8px] flex flex-row items-center justify-between"
                    >
                      <span className="flex flex-row items-center gap-2 text-sm text-[#1A1A1A] font-sans">
                        <img
                          src={i.icon}
                          alt={i.method}
                          className="size-[15px]"
                        />
                        {i.method}
                      </span>
                      <FaAngleRight size={15} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NonProfitDialog;

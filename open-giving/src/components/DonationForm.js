import React, { useEffect } from 'react';

import useDonation from '../hooks/useDonation';
import DonateButton from './landingpage/donateButton';
import CopyWithTooltip from './landingpage/copy';

const dev = process.env.NODE_ENV == 'development';
const DonationForm = React.memo(
  ({ method, index, setSnackbarMessage, setSnackbarOpen, NPOName }) => {
    useEffect(() => {
      const handleMessage = (event) => {
        const isApprovedOrigin = dev
          ? event.origin === 'http://localhost:4000' ||
            event.origin?.includes('sandbox')
          : event.origin?.includes('chimoney');

        if (event.data.type === 'openUrl' && isApprovedOrigin) {
          const newWindow =
            event.data.url && window.open(event.data.url, '_blank');
          if (newWindow) {
            newWindow.focus();
          }
        }
      };

      window.addEventListener('message', handleMessage);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, []);
    const {
      donationAmount,
      setDonationAmount,
      payerEmail,
      setPayerEmail,
      isLoading,
      paymentLink,
      paymentAmount,
      paymentCurrency,
      handleDonateClick,
      openPaymentWidget,
      resetPayment,
    } = useDonation(method, setSnackbarMessage, setSnackbarOpen, NPOName);

    const getTitle = (methodType) => {
      switch (methodType) {
        case 'interledger':
          return 'Interledger Wallet Address';
        case 'paypal':
          return 'Paypal Email Address';
        case 'stripe':
        case 'venmo':
        case 'cashapp':
        case 'airtime':
        case 'mobile-money':
        case 'stablecoin':
          return 'Wallet Address';

        default:
          return 'Address';
      }
    };

    if (method.type === 'donation-link') {
      return (
        <div className="w-full pb-3 mt-[25px]">
          <p className="font-sans text-sm text-[#453454]">Donation Link:</p>
          <a
            href={method.paymentID}
            target="_blank"
            className="font-sans text-[17px] mb-[20px] font-semibold line-clamp-2 overflow-hidden text-primary"
            rel="noopener noreferrer"
          >
            {method.paymentID}
          </a>
          <DonateButton
            otherClass="bg-primary text-white disabled:opacity-50"
            onClick={() => window.open(method.paymentID, '_blank')}
          >
            Visit link
          </DonateButton>
        </div>
      );
    }

    if (method.type === 'chimoney') {
      return (
        <div className="mt-[20px] md:mt-[15px]">
          {[
            {
              label: 'Amount',
              type: 'number',
              name: 'amount',
              value: donationAmount,
              onChange: setDonationAmount,
            },
            {
              label: 'Email Address',
              type: 'email',
              name: 'email',
              value: payerEmail,
              onChange: setPayerEmail,
            },
          ].map((i) => {
            return (
              <div key={i.name} className="relative mb-[10px] w-full">
                {i.name === 'amount' && (
                  <span
                    className={`absolute inset-y-0 left-0 pl-3 flex text-xs font-sans items-center ${
                      donationAmount === ''
                        ? 'text-[#92889a]'
                        : 'text-[#453454]'
                    }`}
                  >
                    $
                  </span>
                )}
                <input
                  type={i.type}
                  value={i.value}
                  disabled={
                    paymentLink && parseFloat(donationAmount) === paymentAmount
                  }
                  onChange={(e) => i.onChange(e.target.value)}
                  placeholder={i.label}
                  name={i.name}
                  className={`border w-full text-sm border-[#C4C4C490] placeholder:text-[#92889a] placeholder:font-normal font-medium text-[#453454] rounded-[8px] px-[12px] py-[14px] focus:outline focus:outline-primary bg-[#F1E7F207]focus:bg-[#F1E7F207] font-sans ${
                    i.name === 'amount' ? 'pl-5' : ''
                  }`}
                />
              </div>
            );
          })}
          {paymentLink && parseFloat(donationAmount) === paymentAmount ? (
            <div className="flex flex-row items-center gap-6 mt-[15px]">
              <button
                onClick={() => openPaymentWidget(paymentLink)}
                type="button"
                className={`text-xs font-sans flex flex-row items-center justify-center font-medium gap-2 p-[12px] border border-[#8A2BE2]  rounded-[5px] text-white bg-primary`}
              >
                Complete Payment for {paymentCurrency} {paymentAmount}
              </button>
              <button
                onClick={resetPayment}
                type="button"
                className={`text-xs font-sans flex flex-row items-center justify-center font-medium gap-2 p-[12px] border border-[#8A2BE2]  rounded-[5px] bg-[#8A2BE210] text-primary`}
              >
                Restart Donation
              </button>
            </div>
          ) : (
            <DonateButton
              otherClass="bg-primary text-white disabled:opacity-50 mt-[15px]"
              disabled={donationAmount === '' || payerEmail === '' || isLoading}
              loading={isLoading}
              onClick={handleDonateClick}
            >
              Donate Now
            </DonateButton>
          )}
        </div>
      );
    }

    return (
      <div className="w-full pb-3 mt-[25px]">
        <p className="font-sans text-sm text-[#453454] flex flex-row gap-2 items-center">
          {getTitle(method.type)}:{' '}
        </p>
        <a
          href={method.paymentID}
          target="_blank"
          className="font-sans text-[17px] mb-[20px] font-semibold line-clamp-2 overflow-hidden text-primary"
          rel="noopener noreferrer"
        >
          {method.paymentID}
        </a>
        <CopyWithTooltip paymentID={method.paymentID} text={`Copy Address`} />
      </div>
    );
  }
);
DonationForm.displayName = 'DonationForm';

export default DonationForm;

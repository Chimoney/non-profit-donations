import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkIcon from '@mui/icons-material/Link';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from '@mui/material';
import React, { useEffect } from 'react';

import useDonation from '../hooks/useDonation';
import DonateButton from './landingpage/donateButton';
import CopyWithTooltip from './landingpage/copy';

const dev = process.env.NODE_ENV == 'development';
const DonationForm = React.memo(
  ({ method, index, setSnackbarMessage, setSnackbarOpen }) => {
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
    } = useDonation(method, setSnackbarMessage, setSnackbarOpen);

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
        <div className="w-full py-3">
          <p className="font-sans text-xs text-[#1A1A1A]">Donation Link:</p>
          <Link
            href={method.paymentID}
            target="_blank"
            className="font-sans text-[17px] font-semibold"
            rel="noopener noreferrer"
          >
            {method.paymentID}
          </Link>
          <DonateButton
            otherClass="bg-primary text-white disabled:opacity-50 mt-6"
            onClick={() => window.open(method.paymentID, '_blank')}
          >
            Visit link
          </DonateButton>
        </div>
      );
    }

    if (method.type === 'chimoney') {
      return (
        <div>
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
              <div key={i.name} className="relative my-3 w-full">
                {i.name === 'amount' && (
                  <span
                    className={`absolute inset-y-0 left-0 pl-3 flex text-xs font-sans items-center ${
                      donationAmount === ''
                        ? 'text-[#1A1A1A30]'
                        : 'text-[#1A1A1A]'
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
                  className={`border w-full text-xs border-[#C4C4C490] placeholder:text-[#1A1A1A30] text-[#1A1A1A] rounded-[8px] p-3 focus:outline focus:outline-primary ${
                    i.name === 'amount' ? 'pl-5' : ''
                  }`}
                />
              </div>
            );
          })}
          {paymentLink && parseFloat(donationAmount) === paymentAmount ? (
            <div className="flex flex-row items-center gap-6">
              <button
                onClick={() => openPaymentWidget(paymentLink)}
                type="button"
                className={`text-xs font-sans flex flex-row items-center justify-center font-medium gap-2 px-3 py-2 border border-[#8A2BE2]  rounded-[5px] text-white bg-primary`}
              >
                Complete Payment for {paymentCurrency} {paymentAmount}
              </button>
              <button
                onClick={resetPayment}
                type="button"
                className={`text-xs font-sans flex flex-row items-center justify-center font-medium gap-2 px-3 py-2 border border-[#8A2BE2]  rounded-[5px] bg-[#8A2BE210] text-primary`}
              >
                Restart Donation
              </button>
            </div>
          ) : (
            <DonateButton
              otherClass="bg-primary text-white disabled:opacity-50"
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
      <div className="w-full py-3">
        <p className="font-sans text-xs text-[#1A1A1A] flex flex-row gap-2 items-center">
          {getTitle(method.type)}:{' '}
        </p>
        <Link
          href={method.paymentID}
          target="_blank"
          className="font-sans text-[17px] font-semibold line-clamp-2 overflow-hidden"
          rel="noopener noreferrer"
        >
          {method.paymentID}
        </Link>
        <CopyWithTooltip paymentID={method.paymentID} text={`Copy Address`} />
      </div>
    );
  }
);
DonationForm.displayName = 'DonationForm';

export default DonationForm;

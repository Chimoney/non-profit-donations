import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';

const DonationSuccess = () => {
  const router = useRouter();
  const [donationDetails, setDonationDetails] = useState({
    amount: '',
    currency: '',
    email: '',
  });

  useEffect(() => {
    const { amount, currency, email } = router.query;
    if (amount && currency && email) {
      setDonationDetails({ amount, currency, email });
    }
  }, [router.query]);

  const handleReturnHome = () => {
    const isInIframe = window.self !== window.top;

    if (isInIframe) {
      window.top.location.href = '/';
    } else {
      router.push('/');
    }
  };

  return (
    <Layout plain={true}>
      <div className="hero-bg h-screen w-full flex flex-col items-center justify-center gap-6 p-3 font-sans">
        <div className="border border-[#8A2BE2] w-full md:w-1/2 xl:w-1/3 px-6 py-12 gap-6 rounded-[10px] flex flex-col items-center justify-center-">
          <img src="/new/success.svg" alt="succcess logo" className="size-24" />
          <p className="font-semibold font-sans text-2xl text-[#a1a1a1] text-center">
            Thank You for Your Donation!
          </p>

          {donationDetails.amount && donationDetails.currency && (
            <p className="font-medium font-sans text-lg text-center">
              You have donated {donationDetails.amount}{' '}
              {donationDetails.currency}
            </p>
          )}
          {donationDetails.email && (
            <p className="font-medium font-sans text-lg text-center">
              A receipt will be sent to: {donationDetails.email}
            </p>
          )}

          <button
            onClick={handleReturnHome}
            className="text-lg flex flex-row items-center justify-center font-medium gap-2 px-3 py-1 bg-[#8A2BE2] text-white rounded-[5px]"
          >
            Return back to Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DonationSuccess;

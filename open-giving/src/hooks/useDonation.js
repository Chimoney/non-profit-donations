import { useTheme } from '@mui/material/styles';
import PaymentWidget from 'chimoney-payment-widget';
import { useRouter } from 'next/router';
import { handlers } from 'non-profit-donations';
import { useState } from 'react';

const useDonation = (method, setSnackbarMessage, setSnackbarOpen) => {
  const router = useRouter();
  const [donationAmount, setDonationAmount] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [paymentCurrency, setPaymentCurrency] = useState(null);
  const theme = useTheme();
  const useTestPaymentID = router.query.useTestPaymentID;

  const handleDonateClick = async (paymentID) => {
    paymentID =
      typeof paymentID === 'string' && paymentID.length > 0
        ? paymentID
        : method?.paymentID;
    console.log('paymentID', paymentID);
    const walletID =
      paymentID && paymentID.test
        ? useTestPaymentID
          ? paymentID.test
          : paymentID.production
        : paymentID;

    if (method.type !== 'chimoney') {
      try {
        await navigator.clipboard.writeText(paymentID);
        setSnackbarMessage(
          `${method.type} payment information copied to clipboard`
        );
        setSnackbarOpen(true);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        setSnackbarMessage(
          'Failed to copy payment information. Please try again.'
        );
        setSnackbarOpen(true);
      }
      return;
    }

    if (method.type === 'chimoney' && !payerEmail) {
      setSnackbarMessage('Please enter your email');
      setSnackbarOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      if (method.type === 'chimoney') {
        if (paymentLink && parseFloat(donationAmount) === paymentAmount) {
          openPaymentWidget(paymentLink);
          return;
        }

        const response = await fetch('/api/chimoney-donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: parseFloat(donationAmount),
            currency: 'USD',
            payerEmail,
            redirect_url: `${window.location.origin}/donation-success`,
            useTestPaymentID,
            walletID,
          }),
        });

        const result = await response.json();
        if (!response.ok) {
          setSnackbarMessage(
            'Error processing donation: ' + result.error ||
              'Failed to initiate Chimoney donation'
          );
          setSnackbarOpen(true);
          return;
        }

        console.log('Chimoney donation initiated:', result);

        setPaymentLink(result.data.paymentLink);
        setPaymentAmount(parseFloat(donationAmount));
        setPaymentCurrency(result.data.currency || 'USD');

        openPaymentWidget(result.data.paymentLink);
      } else {
        const handler = handlers[method.donationHandler || 'copyToClipboard'];
        if (handler) {
          const result = await handler(method, {
            amount: donationAmount,
            currency: 'USD',
          });
          setSnackbarMessage(`${method.type} payment information processed`);
          setSnackbarOpen(true);
          console.log(`Donation result:`, result);
        } else {
          setSnackbarMessage(
            'Error processing donation: ' +
              `No handler found for ${method.type}`
          );
          setSnackbarOpen(true);
          return;
        }
      }
    } catch (error) {
      console.error('Error processing donation:', error);
      setSnackbarMessage('Failed to process donation. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openPaymentWidget = (link) => {
    const paymentWidget = new PaymentWidget({
      paymentLink: link,
      brandColor: theme.palette.primary.main,
      brandName: 'Open Giving',
      onPaymentSuccess: (event) => {
        console.log('Payment successful:', event);

        const isInIframe = window.self !== window.top;

        if (isInIframe) {
          window.top.location.href = '/';
        } else {
          router.push({
            pathname: '/donation-success',
            query: {
              amount: paymentAmount,
              currency: paymentCurrency,
              email: payerEmail,
            },
          });
        }
      },
      onWidgetClosed: (event) => {
        console.log('Widget closed:', event);
        setIsLoading(false);
        setSnackbarMessage('Payment Widget closed. Please try again.');
        setSnackbarOpen(true);
      },
    });

    paymentWidget.open();
  };

  const resetPayment = () => {
    setPaymentLink(null);
    setPaymentAmount(null);
    setPaymentCurrency(null);
    setDonationAmount('');
    setPayerEmail('');
  };

  return {
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
  };
};

export default useDonation;

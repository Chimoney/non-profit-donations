import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <CheckCircleOutlineIcon
              color="success"
              sx={{ fontSize: 60, mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
              Thank You for Your Donation!
            </Typography>
            {donationDetails.amount && donationDetails.currency && (
              <Typography variant="h6" gutterBottom>
                You have donated {donationDetails.amount}{' '}
                {donationDetails.currency}
              </Typography>
            )}
            {donationDetails.email && (
              <Typography variant="body1" gutterBottom>
                A receipt will be sent to: {donationDetails.email}
              </Typography>
            )}

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleReturnHome}
              >
                Return to Home
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default DonationSuccess;

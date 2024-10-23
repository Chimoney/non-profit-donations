import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkIcon from '@mui/icons-material/Link';
import PaymentIcon from '@mui/icons-material/Payment';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Link,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import React, { useEffect } from 'react';

import useDonation from '../hooks/useDonation';
import { formatPaymentMethodName } from '../utils/paymentMethods';

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

    const getIcon = (methodType) => {
      switch (methodType) {
        case 'interledger':
        case 'paypal':
        case 'stripe':
        case 'venmo':
        case 'cashapp':
        case 'airtime':
        case 'mobile-money':
        case 'stablecoin':
          return <ContentCopyIcon fontSize="small" />;
        case 'chimoney':
          return <PaymentIcon fontSize="small" />;
        case 'donation-link':
          return <LinkIcon fontSize="small" />;
        default:
          return <CardGiftcardIcon fontSize="small" />;
      }
    };

    const formattedMethodName = formatPaymentMethodName(method.type);

    if (method.type === 'donation-link') {
      return (
        <ListItem key={method.type}>
          <ListItemText
            primary={
              <Typography
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '5px',
                  }}
                >
                  {index + 1}. {formattedMethodName}{' '}
                  <a
                    href={method.paymentID}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: '5px',
                      color: 'inherit',
                    }}
                  >
                    {getIcon(method.type)}
                  </a>
                </span>
              </Typography>
            }
            secondary={
              <Link
                href={method.paymentID}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
              >
                {method.paymentID}
              </Link>
            }
          />
        </ListItem>
      );
    }

    if (method.type === 'chimoney') {
      return (
        <Accordion key={method.type} elevation={0}>
          <AccordionSummary>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '5px',
                  fontWeight: '600',
                }}
              >
                {index + 1}. {formattedMethodName}
              </span>
              {getIcon(method.type)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleDonateClick();
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Amount"
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    label="Email"
                    type="email"
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>

              {paymentLink && parseFloat(donationAmount) === paymentAmount ? (
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => openPaymentWidget(paymentLink)}
                    type="button"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Complete Payment for {paymentCurrency} {paymentAmount}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={resetPayment}
                    type="button"
                    sx={{ mt: 1 }}
                  >
                    Restart Donation
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  disabled={isLoading}
                  type="submit"
                  sx={{ mt: 1 }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    `Donate via ${formattedMethodName}`
                  )}
                </Button>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    }

    if (method.type !== 'chimoney' && method.type !== 'donation-link') {
      return (
        <ListItem key={method.type}>
          <ListItemText
            primary={
              <Typography
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleDonateClick(method.paymentID)}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '5px',
                    fontWeight: '600',
                  }}
                >
                  {index + 1}. {formattedMethodName}
                </span>
                {getIcon(method.type)}
              </Typography>
            }
            secondary={
              <Typography display="flex" alignItems="center">
                {method.paymentID}
              </Typography>
            }
          />
        </ListItem>
      );
    }

    return (
      <ListItem key={method.type}>
        <ListItemText
          primary={
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleDonateClick(method.paymentID)}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '5px',
                  fontWeight: '600',
                }}
              >
                {index + 1}. {formattedMethodName}
              </span>
              {getIcon(method.type)}
            </Typography>
          }
          secondary={
            <Typography display="flex" alignItems="center">
              {method.paymentID}
            </Typography>
          }
        />
      </ListItem>
    );
  }
);
DonationForm.displayName = 'DonationForm';

export default DonationForm;

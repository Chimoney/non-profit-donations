import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentIcon from '@mui/icons-material/Payment';
import LinkIcon from '@mui/icons-material/Link';
import { formatPaymentMethodName } from '../utils/paymentMethods';
import useDonation from '../hooks/useDonation';

const DonationForm = ({
  method,
  index,
  setSnackbarMessage,
  setSnackbarOpen,
}) => {
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
                {index + 1}. {formattedMethodName}
              </span>
              {getIcon(method.type)}
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
            <TextField
              label="Amount"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              type="email"
              value={payerEmail}
              onChange={(e) => setPayerEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
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
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
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
};

export default DonationForm;

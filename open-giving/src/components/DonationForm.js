import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkIcon from '@mui/icons-material/Link';
import PaymentIcon from '@mui/icons-material/Payment';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
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
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

import useDonation from '../hooks/useDonation';
import { formatPaymentMethodName } from '../utils/paymentMethods';

const DonationForm = React.memo(
  ({ method, index, setSnackbarMessage, setSnackbarOpen }) => {
    const [account, setAccount] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

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
        case 'wallet-connect':
          return <WalletIcon fontSize="small" />; // Icon for WalletConnect
        default:
          return <CardGiftcardIcon fontSize="small" />;
      }
    };

    const formattedMethodName = formatPaymentMethodName(method.type);


    const connectWalletConnect = async () => {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://cloudflare-eth.com/",
          137: "https://polygon-rpc.com/",
        },
      });
      await provider.enable();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      setIsConnected(true);
    };

    if (method.type === 'wallet-connect') {
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
            <Box>
              {!isConnected ? (
                <Button
                  variant="contained"
                  onClick={connectWalletConnect}
                  fullWidth
                >
                  Connect Wallet
                </Button>
              ) : (
                <Typography>
                  Wallet Connected: {account}
                </Typography>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    }

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

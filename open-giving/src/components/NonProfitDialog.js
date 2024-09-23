import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Link,
  List,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import DonationForm from './DonationForm';

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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pb: 0 }}>{nonProfit.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              component="img"
              src={dialogImgSrc}
              alt={nonProfit.name}
              onError={handleDialogImageError}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                mb: 2,
              }}
            />
            <Typography variant="body2" paragraph>
              <Chip
                icon={<LocationOnIcon />}
                label={nonProfit.country}
                size="small"
                sx={{ mr: 1 }}
              />
              {nonProfit.foundedYear && (
                <Chip
                  icon={<CalendarTodayIcon />}
                  label={`Founded: ${nonProfit.foundedYear}`}
                  size="small"
                />
              )}
            </Typography>
            <Typography variant="body2" paragraph>
              <Link
                href={nonProfit.website}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
              >
                <LanguageIcon fontSize="small" sx={{ mr: 1 }} />
                Website
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href={`mailto:${nonProfit.email}`}
                display="flex"
                alignItems="center"
              >
                <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                {nonProfit.email}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" paragraph>
              {nonProfit.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            {nonProfit.paymentMethods.length > 0 && (
              <Box>
                <Typography variant="h6">Donation Methods</Typography>
                <List>
                  {nonProfit.paymentMethods
                    .filter(
                      (method) => method.paymentID && getPaymentID(method)
                    )
                    .map((method, index) => (
                      <DonationForm
                        key={method.type}
                        method={method}
                        index={index}
                        setSnackbarMessage={setSnackbarMessage}
                        setSnackbarOpen={setSnackbarOpen}
                        useTestPaymentID={useTestPaymentID}
                      />
                    ))}
                </List>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NonProfitDialog;

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box,
  Chip,
  Link,
  Divider,
  List,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import DonationForm from './DonationForm';

const NonProfitDialog = ({
  nonProfit,
  open,
  onClose,
  setSnackbarMessage,
  setSnackbarOpen,
  defaultLogo,
}) => {
  const [dialogImgSrc, setDialogImgSrc] = useState(
    nonProfit?.logo || defaultLogo
  );

  const handleDialogImageError = () => {
    setDialogImgSrc(defaultLogo);
  };

  if (!nonProfit) return null;

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
                      (method) =>
                        method.paymentID &&
                        (typeof method.paymentID !== 'string' ||
                          method.paymentID.length > 0)
                    )
                    .map((method, index) => (
                      <DonationForm
                        key={method.type}
                        method={method}
                        index={index}
                        setSnackbarMessage={setSnackbarMessage}
                        setSnackbarOpen={setSnackbarOpen}
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

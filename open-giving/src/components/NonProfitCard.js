import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

import QRCodeComponent from './QRCodeComponent';

export default function NonProfitCard({ nonProfit, onLearnMore, showQRCode }) {
  const defaultLogo = `https://placehold.co/300x200/?text=${nonProfit.name}`;
  const [imgSrc, setImgSrc] = React.useState(nonProfit.logo || defaultLogo);

  const handleImageError = () => {
    setImgSrc(`${defaultLogo}${nonProfit.name}`);
  };

  const hasValidPaymentMethods = nonProfit.paymentMethods.some(
    (method) =>
      method.paymentID &&
      (typeof method.paymentID !== 'string' || method.paymentID.length > 0)
  );

  const generateQRCodeLink = (npCode) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return `${baseUrl}/?paymentMethod=${showQRCode || ''}&npCode=${npCode}`;
  };

  return (
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }}}
    elevation={2}
    >
      <CardMedia
        component="div"
        sx={{
          height: 140,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          margin: 'auto',
          padding: '10px',
        }}
      >
        <img
          src={imgSrc}
          alt={nonProfit.name}
          onError={handleImageError}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {nonProfit.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '3em', // Approximately two lines of text
          }}
        >
          {nonProfit.description}
        </Typography>
      </CardContent>

      {showQRCode ? (
        <Box mt={2}>
          <QRCodeComponent
            link={generateQRCodeLink(nonProfit.npCode)}
            cta={'Scan to Donate'}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            mb: '20px',
            mr: '30px',
          }}
        >
          {hasValidPaymentMethods && (
            <Button
              size="small"
              variant="contained"
              onClick={() => onLearnMore(nonProfit)}
            >
              Donate
            </Button>
          )}
        </Box>
      )}
    </Card>
  );
}

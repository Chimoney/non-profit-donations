import { Typography } from '@mui/material';
import React from 'react';

import { QRCodeSVG } from 'qrcode.react';

import { Box } from '@mui/material';

const QRCodeComponent = ({ link, cta }) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle2" color="textSecondary" textAlign="center">
        {cta || 'Scan me'}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <QRCodeSVG
          value={'https://www.google.com'}
          bgColor="inherit"
          fgColor="white"
        />
      </Box>
    </Box>
  );
};

export default QRCodeComponent;

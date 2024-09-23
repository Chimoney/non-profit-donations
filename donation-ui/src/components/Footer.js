import LockIcon from '@mui/icons-material/Lock';
import { Button, Container, Divider, Typography } from '@mui/material/';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const dev = process.env.NODE_ENV == 'development';

const UPA = () => {
  const theme = useTheme();
  return (
    <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
      <Container>
        <Button
          variant="text"
          disabled
          startIcon={<LockIcon sx={{ width: '0.7em' }} color="inherit" />}
          style={{
            color: 'inherit',
            margin: 'auto',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            background: theme.palette.background.paper,
            zIndex: '1000000',
          }}
          fullWidth
        >
          Secured with Cryptography
        </Button>
      </Container>

      <Divider />
      <Container>
        <Typography align="center">
          <br />
          <Image
            style={{ width: 'auto', height: 'auto', paddingTop: '20px' }}
            src="/chimoney-logo-light-purple.svg"
            alt="Chimoney Logo"
            width={170}
            height={45}
            priority
          />
          {/* <br />© {currentYear} Chi Technologies Inc. */}
        </Typography>
      </Container>
    </div>
  );
};

export default UPA;

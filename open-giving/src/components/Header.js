import { Typography } from '@mui/material';
import React from 'react';

const Header = () => (
  <>
    <Typography variant="h3" component="h1" align="center" color="text.primary">
      Open Giving
    </Typography>
    <Typography
      variant="subtitle1"
      component="h2"
      gutterBottom
      align="center"
      color="text.primary"
    >
      Donate to Verified Non-Profits
    </Typography>
  </>
);

export default Header;

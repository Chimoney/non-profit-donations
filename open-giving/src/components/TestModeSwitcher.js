import { Box, FormControlLabel, Switch } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const TestModeSwitcher = () => {
  const router = useRouter();
  const isTestMode = router.query.useTestPaymentID === '1';

  const handleToggle = () => {
    const query = { ...router.query };
    if (isTestMode) {
      delete query.useTestPaymentID;
    } else {
      query.useTestPaymentID = '1';
    }
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 26,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        paddingBottom: '8px',
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={isTestMode}
            onChange={handleToggle}
            color={isTestMode ? 'primary' : 'default'}
            size="small"
          />
        }
        label="Test Mode"
        style={{ color: isTestMode ? 'inherit' : 'grey' }}
      />
    </Box>
  );
};

export default TestModeSwitcher;

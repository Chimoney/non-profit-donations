import { Grid, Grow } from '@mui/material';
import React from 'react';

import NonProfitCard from './NonProfitCard';

const NonProfitGrid = ({
  nonProfits,
  onOpenDialog,
  showQRCode,
  useTestPaymentID,
}) => (
  <Grid container spacing={3}>
    {nonProfits.map((nonProfit, index) => (
      <Grow
        in={true}
        key={nonProfit.npCode}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          id={`nonprofit-${nonProfit.npCode}`}
        >
          <NonProfitCard
            nonProfit={nonProfit}
            onLearnMore={() => onOpenDialog(nonProfit)}
            showQRCode={showQRCode}
            useTestPaymentID={useTestPaymentID}
          />
        </Grid>
      </Grow>
    ))}
  </Grid>
);

export default NonProfitGrid;

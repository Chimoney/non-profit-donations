import { Grid } from '@mui/material';
import React from 'react';

import NonProfitCard from './NonProfitCard';

const NonProfitGrid = ({
  nonProfits,
  onOpenDialog,
  showQRCode,
  useTestPaymentID,
}) => (
  <Grid container spacing={3}>
    {nonProfits.map((nonProfit) => (
      <Grid
        item
        xs={6}
        sm={6}
        md={4}
        key={nonProfit.npCode}
        id={`nonprofit-${nonProfit.npCode}`}
      >
        <NonProfitCard
          nonProfit={nonProfit}
          onLearnMore={() => onOpenDialog(nonProfit)}
          showQRCode={showQRCode}
          useTestPaymentID={useTestPaymentID}
        />
      </Grid>
    ))}
  </Grid>
);

export default NonProfitGrid;

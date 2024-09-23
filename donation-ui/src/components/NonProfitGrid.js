import React from 'react';
import { Grid } from '@mui/material';
import NonProfitCard from './NonProfitCard';

const NonProfitGrid = ({ nonProfits, onOpenDialog, showQRCode }) => (
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
        />
      </Grid>
    ))}
  </Grid>
);

export default NonProfitGrid;

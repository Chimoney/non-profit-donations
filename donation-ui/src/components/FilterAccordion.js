import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterAccordion = ({
  isExpanded,
  setIsExpanded,
  selectedMethods,
  onMethodToggle,
  paymentMethods,
}) => (
  <Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="filter-content"
      id="filter-header"
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FilterListIcon sx={{ mr: 1 }} />
        <Typography variant="body1" component="h2">
          Filter
        </Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="subtitle1" gutterBottom>
        Donate With
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {paymentMethods.map((method) => (
          <Button
            key={method}
            variant={
              selectedMethods.includes(method) ? 'contained' : 'outlined'
            }
            onClick={() => onMethodToggle(method)}
            sx={{ borderRadius: '20px', textTransform: 'capitalize' }}
            size="small"
          >
            {method}
          </Button>
        ))}
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        More filter options coming soon!
      </Typography>
    </AccordionDetails>
  </Accordion>
);

export default FilterAccordion;

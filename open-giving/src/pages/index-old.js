import { Box, Container, Pagination, Snackbar } from '@mui/material';
import { useRouter } from 'next/router';
import { verifiedNonprofits } from 'non-profit-donations';
import React, { useEffect, useState } from 'react';

import FilterAccordion from '../components/FilterAccordion';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NonProfitDialog from '../components/NonProfitDialog';
import NonProfitGrid from '../components/NonProfitGrid';
import { PAYMENT_METHODS } from '../utils/paymentMethods';

const ITEMS_PER_PAGE = 9;

export default function Home() {
  const router = useRouter();
  const [nonProfits, setNonProfits] = useState([]);
  const [filteredNonProfits, setFilteredNonProfits] = useState([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedNonProfit, setSelectedNonProfit] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const allNonProfits = verifiedNonprofits();
    setNonProfits(allNonProfits);

    const { paymentMethod, npCode } = router.query;
    if (paymentMethod) {
      const methods = paymentMethod.split(',');
      setSelectedPaymentMethods(methods);
      setIsFilterExpanded(true);
    }
    if (npCode) {
      const nonProfit = allNonProfits.find((np) => np.npCode === npCode);
      if (nonProfit) {
        setSelectedNonProfit(nonProfit);
      }
    }
  }, [router.query]);

  useEffect(() => {
    const filtered = nonProfits.filter(
      (nonProfit) =>
        selectedPaymentMethods.length === 0 ||
        nonProfit.paymentMethods.some((method) =>
          selectedPaymentMethods.includes(method.type)
        )
    );
    setFilteredNonProfits(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [nonProfits, selectedPaymentMethods]);

  const handlePaymentMethodToggle = (method) => {
    const newSelectedMethods = selectedPaymentMethods.includes(method)
      ? selectedPaymentMethods.filter((m) => m !== method)
      : [...selectedPaymentMethods, method];
    setSelectedPaymentMethods(newSelectedMethods);
    updateUrl({ newPage: 1, methods: newSelectedMethods });
  };

  const updateUrl = ({ newPage, methods, npCode } = {}) => {
    const query = { ...router.query };
    if (methods !== undefined) {
      if (methods.length > 0) {
        query.paymentMethod = methods.join(',');
      } else {
        delete query.paymentMethod;
      }
    }
    if (newPage !== undefined) {
      if (newPage > 1) {
        query.page = newPage.toString();
      } else {
        delete query.page;
      }
    }
    if (npCode !== undefined) {
      if (npCode) {
        query.npCode = npCode;
      } else {
        delete query.npCode;
      }
    }

    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  };

  const handleOpenDialog = (nonProfit) => {
    setSelectedNonProfit(nonProfit);
    updateUrl({ npCode: nonProfit.npCode });
  };

  const handleCloseDialog = () => {
    setSelectedNonProfit(null);
    updateUrl({ npCode: null });
  };

  const handleChangePage = (event, newPage) => {
    updateUrl({ newPage });
  };

  const currentPage = parseInt(router.query.page, 10) || 1;
  const paginatedNonProfits = filteredNonProfits.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const defaultLogo = `https://placehold.co/300x200/?text=${selectedNonProfit?.name}`;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Header />
        <FilterAccordion
          isExpanded={isFilterExpanded}
          setIsExpanded={setIsFilterExpanded}
          selectedMethods={selectedPaymentMethods}
          onMethodToggle={handlePaymentMethodToggle}
          paymentMethods={PAYMENT_METHODS}
        />
        <NonProfitGrid
          nonProfits={paginatedNonProfits}
          onOpenDialog={handleOpenDialog}
          showQRCode={router.query.showQRCode}
          useTestPaymentID={router.query.useTestPaymentID}
        />
        {filteredNonProfits.length > ITEMS_PER_PAGE && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
              size="large"
            />
          </Box>
        )}
        {selectedNonProfit?.name && (
          <NonProfitDialog
            nonProfit={selectedNonProfit}
            open={Boolean(selectedNonProfit)}
            onClose={handleCloseDialog}
            setSnackbarMessage={setSnackbarMessage}
            setSnackbarOpen={setSnackbarOpen}
            defaultLogo={defaultLogo}
            useTestPaymentID={router.query.useTestPaymentID}
          />
        )}
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Layout>
  );
}

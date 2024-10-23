import { Hero } from '@/components/landingpage/Hero';
import { DonationOrganizations } from '@/components/landingpage/Orgs';
import { SelectDonationMethod } from '@/components/landingpage/SelectDonationMethod';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { verifiedNonprofits } from 'non-profit-donations';
import { donationMethods } from '@/components/constants';
import Pagination from '@/components/landingpage/pagination';
import NonProfitDialog from '@/components/NonProfitDialog';

const ITEMS_PER_PAGE = 9;
export default function Home() {
  const router = useRouter();
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [selectedNonProfit, setSelectedNonProfit] = useState(null);
  const [filteredNonProfits, setFilteredNonProfits] = useState([]);
  const [nonProfits, setNonProfits] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const allNonProfits = verifiedNonprofits();
    setNonProfits(allNonProfits);

    const { paymentMethod, npCode } = router.query;
    if (paymentMethod) {
      const methods = paymentMethod.split(',');
      setSelectedPaymentMethods(methods);
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

  const handleToggle = (method) => {
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
      <Hero />
      <SelectDonationMethod
        paymentMethods={donationMethods}
        handleToggle={handleToggle}
        selectedPaymentMethods={selectedPaymentMethods}
      />
      <div className="md:px-12 2xl:px-[20%] pb-28 w-full">
        <DonationOrganizations 
        data={paginatedNonProfits} 
        onOpenDialog={handleOpenDialog}
        showQRCode={router.query.showQRCode}
        useTestPaymentID={router.query.useTestPaymentID}
        />
        {filteredNonProfits.length > ITEMS_PER_PAGE && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
        )}
      </div>
      {selectedNonProfit?.name && (
          <NonProfitDialog
            nonProfit={selectedNonProfit}
            open={Boolean(selectedNonProfit)}
            onClose={handleCloseDialog}
            defaultLogo={defaultLogo}
            useTestPaymentID={router.query.useTestPaymentID}
          />
        )}
    </Layout>
  );
}

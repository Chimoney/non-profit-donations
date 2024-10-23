import { donationMethods } from "@/components/constants";

export const PAYMENT_METHODS = [
  'chimoney',
  'interledger',
  'paypal',
  'stripe',
  'venmo',
  'cashapp',
  'patreon',
  'donorbox',
  'donation-link',
  'stablecoin',
  'airtime',
  'mobile-money',
];

export const formatPaymentMethodName = (methodName) => {
  return methodName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const filterDonationMethods = (org) => {
  const { paymentMethods } = org;
  const filteredMethods = donationMethods.filter((method) =>
    paymentMethods.some((payment) => payment.type === method.type)
  );
  return filteredMethods;
};

export const getIconByMethod = (method) => {
  const foundMethod = donationMethods.find(item => item.type === method);
  return foundMethod ? foundMethod.icon : null;
};
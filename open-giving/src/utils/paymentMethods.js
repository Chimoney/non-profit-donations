import { donationMethods } from '@/components/constants';

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
  const foundMethod = donationMethods.find((item) => item.type === method);
  return foundMethod ? foundMethod.icon : null;
};

export const sanitizeNumericInput = (value) => {
  const sanitized = value.replace(/[^\d.]/g, '');
  const decimalCount = (sanitized.match(/\./g) || []).length;
  if (decimalCount <= 1) {
    const parts = sanitized.split('.');
    if (parts.length === 2) {
      return `${parts[0]}.${parts[1].slice(0, 2)}`;
    }
    return sanitized;
  }
  return sanitized.slice(0, sanitized.lastIndexOf('.'));
};

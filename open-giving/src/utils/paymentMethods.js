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

import { PaymentMethod } from '../types/non-profit';

export type DonationHandlerContext = {
  readonly amount: number;
  readonly currency: string;
  // Add any other relevant context data
};

export type DonationHandler = (
  paymentMethod: PaymentMethod,
  context: DonationHandlerContext
) => Promise<void>;

const donationHandlers: Record<string, DonationHandler> = {
  copyToClipboard: async (paymentMethod, context) => {
    console.log('copyToClipboard', paymentMethod, context);
    if (typeof paymentMethod.paymentID === 'string') {
      await navigator.clipboard.writeText(paymentMethod.paymentID);
      console.log(`Copied ${paymentMethod.type} address to clipboard`);
    }
  },
};

export default donationHandlers;

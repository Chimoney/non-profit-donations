import {
  DonationHandler,
  DonationHandlerResult,
} from '../types/donation-handler';

const defaultDonationHandlers: Record<string, DonationHandler> = {
  copyToClipboard: async (
    paymentMethod,
    context
  ): Promise<DonationHandlerResult> => {
    console.log('copyToClipboard', paymentMethod, context);
    if (typeof paymentMethod.paymentID === 'string') {
      await navigator.clipboard.writeText(paymentMethod.paymentID);
      return {
        success: true,
        message: `Copied ${paymentMethod.type} address to clipboard`,
      };
    }
    return { success: false, message: 'Invalid payment ID' };
  },
};

export default defaultDonationHandlers;

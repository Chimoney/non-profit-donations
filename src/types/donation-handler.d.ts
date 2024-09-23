import { PaymentMethod } from './non-profit';

export type DonationHandlerContext = {
  readonly amount: number;
  readonly currency: string;
  readonly donorInfo?: {
    readonly name?: string;
    readonly email?: string;
    // Add other relevant donor information fields
  };
  readonly customData?: Record<string, unknown>;
};

export type DonationHandlerResult = {
  readonly success: boolean;
  readonly transactionId?: string;
  readonly message?: string;
};

export type DonationHandler = (
  paymentMethod: PaymentMethod,
  context: DonationHandlerContext
) => Promise<DonationHandlerResult>;

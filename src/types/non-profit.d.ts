type Verification = {
  readonly date: Date;
  readonly verifier: string;
};

type PaymentMethodType =
  | 'chimoney'
  | 'paypal'
  | 'stripe'
  | 'venmo'
  | 'cashapp'
  | 'patreon'
  | 'donorbox'
  | 'givebutter'
  | 'donation-link'
  | 'interledger'
  | 'stablecoin'
  | 'airtime'
  | 'mobile-money';

type BasePaymentMethod = {
  readonly type: PaymentMethodType;
  readonly country?: string;
  readonly donationHandler?: string; // Name of the function to handle donation
};

type StringPaymentMethod = BasePaymentMethod & {
  readonly paymentID: string;
};

type PhoneNumberPaymentMethod = BasePaymentMethod & {
  readonly type: 'airtime' | 'mobile-money';
  readonly paymentID: string; // Phone number
};

type StablecoinPaymentMethod = BasePaymentMethod & {
  readonly type: 'stablecoin';
  readonly paymentID: {
    readonly address: string;
    readonly chains: readonly string[]; // List of supported blockchain networks
  };
};

type ChimoneyPaymentMethod = BasePaymentMethod & {
  readonly type: 'chimoney';
  readonly paymentID: {
    readonly test: string;
    readonly production: string;
  };
};

type PaymentMethod =
  | StringPaymentMethod
  | PhoneNumberPaymentMethod
  | StablecoinPaymentMethod
  | ChimoneyPaymentMethod;

export type NonProfit = {
  readonly npCode?: string;
  readonly name: string;
  readonly website: string;
  readonly logo: string;
  readonly foundedYear?: string;
  readonly country: string;
  readonly description: string;
  readonly email: string;
  readonly twitter?: string;
  readonly linkedin?: string;
  readonly isVerified: boolean;
  readonly verifications?: readonly Verification[];
  readonly paymentMethods: readonly PaymentMethod[];
};

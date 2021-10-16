type Verification = {
  readonly date: Date;
  readonly verifier: string;
};

type PaymentMethod = {
  readonly type: string;
  readonly paymentID?: string;
  readonly country?: string;
};

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

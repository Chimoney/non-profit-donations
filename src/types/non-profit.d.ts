type Verification = {
  readonly date: Date;
  readonly verifier: string;
};

type PaymentMethod = {
  readonly type: string;
  readonly paymentID?: string;
};

export type NonProfit = {
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
  readonly verification?: Verification;
  readonly paymentMethods: readonly PaymentMethod[];
};

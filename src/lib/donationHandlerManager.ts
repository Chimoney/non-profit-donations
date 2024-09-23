import { DonationHandler } from '../types/donation-handler';

import defaultDonationHandlers from './defaultDonationHandlers';

export const handlers: Record<string, DonationHandler> = {
  ...defaultDonationHandlers,
};

export function registerHandler(type: string, handler: DonationHandler) {
  // eslint-disable-next-line functional/immutable-data
  handlers[type] = handler;
}

export function getHandler(type: string): DonationHandler | undefined {
  return handlers[type];
}

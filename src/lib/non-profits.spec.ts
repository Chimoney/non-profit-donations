import test from 'ava';

import nonProfits from '../non-profits-data';

import {
  getNonProfit,
  nonProfitList,
  nonProfitsAcceptingPaymentType,
  randomNonProfit,
  randomWithPaymentType,
} from './non-profits';

test('list', async (t) => {
  t.deepEqual(nonProfitList(), nonProfits);
});

test('randomNonProfit', async (t) => {
  const randomItem = randomNonProfit();
  t.not(typeof randomItem.name, 'undefined');
  t.not(typeof randomItem.email, 'undefined');
  t.not(randomItem.paymentMethods.length, 0);
});

test('nonProfitsAcceptingPaymentType', async (t) => {
  const paymentType = 'interledger';
  const list = nonProfitsAcceptingPaymentType(paymentType);
  list.map((nonProfit) => {
    t.is(
      nonProfit.paymentMethods.find((method) => method.type === paymentType)
        .type,
      paymentType
    );
  });
});

test('randomWithPaymentType', async (t) => {
  const paymentType = 'chimoney';
  const nonProfit = randomWithPaymentType(paymentType);
  t.not(typeof nonProfit, 'undefined');
  t.is(
    nonProfit.paymentMethods.find((method) => method.type === paymentType).type,
    paymentType
  );
});

test('getNonProfit', async (t) => {
  const npCode = 'newstorycharity';
  const nonProfit = getNonProfit(npCode);
  t.not(typeof nonProfit, 'undefined');
  t.not(typeof nonProfit.name, 'undefined');
  t.is(nonProfit.npCode, npCode);
});

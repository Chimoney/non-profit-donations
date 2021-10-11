import test from 'ava';

import nonProfits from '../non-profits-data';

import {
  allWithPaymentType,
  list,
  random,
  randomWithPaymentType,
} from './non-profits';

test('list', async (t) => {
  t.deepEqual(list(), nonProfits);
});

test('random', async (t) => {
  const randomItem = random();
  t.not(typeof randomItem?.name, 'undefined');
  t.not(typeof randomItem?.email, 'undefined');
  t.not(randomItem?.paymentMethods.length, 0);
});

test('allWithPaymentType', async (t) => {
  const paymentType = 'interledger';
  const list = allWithPaymentType(paymentType);
  list.map((nonProfit) => {
    t.is(
      nonProfit.paymentMethods.find((method) => method.type === paymentType)
        .type,
      paymentType
    );
  });
});

test('randomWithPaymentType', async (t) => {
  const paymentType = 'xrp';
  const nonProfit = randomWithPaymentType(paymentType);
  t.not(typeof list, 'undefined');
  t.is(
    nonProfit.paymentMethods.find((method) => method.type === paymentType).type,
    paymentType
  );
});

import test from 'ava';

import nonProfits from '../non-profits-data';

import { list, random } from './non-profits';

test('list', async (t) => {
  t.deepEqual(list(), nonProfits);
});

test('random', async (t) => {
  const randomItem = random();
  t.not(typeof randomItem?.name, 'undefined');
  t.not(typeof randomItem?.email, 'undefined');
  t.not(randomItem?.paymentMethods.length, 0);
});

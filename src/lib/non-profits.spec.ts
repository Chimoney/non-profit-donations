import test from 'ava';

import nonProfits from '../non-profits-data';

import { list, random } from './non-profits';

test('list', async (t) => {
  t.deepEqual(list(), nonProfits);
});

test('random', async (t) => {
  const rrr = random();
  t.like(rrr, nonProfits[0]);
});

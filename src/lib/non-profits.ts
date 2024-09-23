import nonProfits from '../non-profits-data';
import { NonProfit } from '../types/non-profit';

/**
 * Gets all approved non-profits
 *
 * ### Example (es module)
 * ```js
 * import { nonProfitList } from 'non-profit-donations'
 * console.log(nonProfitList())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var nonProfitList = require('non-profit-donations').nonProfitList;
 * console.log(nonProfitList())
 * // => [{}]
 * ```
 *
 * @returns Returns all the non-profits.
 */

export const nonProfitList = () => {
  return nonProfits;
};

/**
 * Gets a randomNonProfit non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { randomNonProfit } from 'non-profit-donations'
 * console.log(randomNonProfit())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var randomNonProfit = require('non-profit-donations').randomNonProfit;
 * console.log(randomNonProfit())
 * // => [{}]
 * ```
 *
 * @returns A random non-profit from the database or a sub list.
 */
export const randomNonProfit = (subList?: readonly NonProfit[]) => {
  const list = subList || nonProfits;
  return list[Math.floor(Math.random() * list.length)];
};

/**
 * Gets a random non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { nonprofitsFromCountry } from 'non-profit-donations'
 * console.log(nonprofitsFromCountry('Nigeria'))
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var nonprofitsFromCountry = require('non-profit-donations').nonprofitsFromCountry;
 * console.log(nonprofitsFromCountry('Nigeria'))
 * // => [{}]
 * ```
 *
 * @param country - The name of the country to get non profits for.
 * @returns A list of non-profits for the given country.
 */
export const nonprofitsFromCountry = (country: string) => {
  return nonProfits.filter(
    (org) => org.country.toLocaleLowerCase() === country.toLocaleLowerCase()
  );
};

/**
 * Gets a random non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { verifiedNonprofits } from 'non-profit-donations'
 * console.log(verifiedNonprofits())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var verifiedNonprofits = require('non-profit-donations').verifiedNonprofits;
 * console.log(verifiedNonprofits())
 * // => [{}]
 * ```
 *
 * @returns A list of all verified non-profits.
 */
export const verifiedNonprofits = () => {
  return nonProfits.filter((org) => org.isVerified);
};

/**
 * Gets a list of non-profit with specified payment type
 *
 * ### Example (es module)
 * ```js
 * import { nonProfitsAcceptingPaymentType } from 'non-profit-donations'
 * console.log(nonProfitsAcceptingPaymentType('interledger'))
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var nonProfitsAcceptingPaymentType = require('non-profit-donations').nonProfitsAcceptingPaymentType;
 * console.log(nonProfitsAcceptingPaymentType('interledger'))
 * // => {}
 * ```
 *
 * @returns A list of non-profit with specified payment type.
 */
export const nonProfitsAcceptingPaymentType = (paymentType: string) => {
  return nonProfits.filter((n) =>
    n.paymentMethods.find(
      (org) => org.type === paymentType && typeof org.paymentID !== 'undefined'
    )
  );
};

/**
 * Gets a random non-profit from the list of non-profits  with specified payment type
 *
 * ### Example (es module)
 * ```js
 * import { randomWithPaymentType } from 'non-profit-donations'
 * console.log(randomWithPaymentType('interledger'))
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var randomWithPaymentType = require('non-profit-donations').randomWithPaymentType;
 * console.log(randomWithPaymentType('interledger'))
 * // => {}
 * ```
 *
 * @returns A random non-profit from a sub list with specified payment type.
 */
export const randomWithPaymentType = (paymentType: string) => {
  const list = nonProfitsAcceptingPaymentType(paymentType);
  return randomNonProfit(list);
};

/**
 * Gets a random non-profit from the list of non-profits with mobile money
 *
 * ### Example (es module)
 * ```js
 * import { randomWithMobileMoney } from 'non-profit-donations'
 * console.log(randomWithMobileMoney())
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var randomWithMobileMoney = require('non-profit-donations').randomWithMobileMoney;
 * console.log(randomWithMobileMoney())
 * // => {}
 * ```
 *
 * @returns A random non-profit from a sub list with mobile money support.
 */
export const randomWithMobileMoney = () => {
  return randomWithPaymentType('mobile-money');
};

/**
 * Gets a random non-profit from the list of non-profits with interledger payment pointer
 *
 * ### Example (es module)
 * ```js
 * import { randomWithInterledgerPaymentPointer } from 'non-profit-donations'
 * console.log(randomWithInterledgerPaymentPointer())
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var randomWithInterledgerPaymentPointer = require('non-profit-donations').randomWithInterledgerPaymentPointer;
 * console.log(randomWithInterledgerPaymentPointer())
 * // => {}
 * ```
 *
 * @returns A random non-profit from a sub list with ILP support.
 */
export const randomWithInterledgerPaymentPointer = () => {
  return randomWithPaymentType('interledger');
};

/**
 * Gets non-profit using the npCode
 *
 * ### Example (es module)
 * ```js
 * import { getNonProfit } from 'non-profit-donations'
 * console.log(getNonProfit("newstorycharity"))
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var getNonProfit = require('non-profit-donations').getNonProfit;
 * console.log(getNonProfit("newstorycharity"))
 * // =>   {
    npCode: 'newstorycharity',
    name: 'New Story',
    email: 'team@newstorycharity.org',
    country: 'United States',
    website: 'https://newstorycharity.org/',
    logo: 'https://newstorycharity.org/wp-content/themes/newstory/src/img/mark.png',
    foundedYear: '2013',
    description: 'New Story pioneers solutions to end global homelessness.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 11, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'xrp',
        paymentID: 'rUKvxJHsSbQXzvfQzwrmELdwnQ2kAsH7Ge',
      },
    ],
  }
 * ```
 *
 * @returns A non-profit.
 */
export const getNonProfit = (npCode) => {
  return nonProfits.find((np) => np.npCode === npCode);
};

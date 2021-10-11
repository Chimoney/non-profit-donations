import nonProfits from '../non-profits-data';
import { NonProfit } from '../types/non-profit';

/**
 * Gets all approved non-profits
 *
 * ### Example (es module)
 * ```js
 * import { list } from 'non-profit-donations'
 * console.log(list())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var list = require('non-profit-donations').list;
 * console.log(list())
 * // => [{}]
 * ```
 *
 * @returns Returns all the non-profits.
 */

export const list = () => {
  return nonProfits;
};

/**
 * Gets a random non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { random } from 'non-profit-donations'
 * console.log(random())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var random = require('non-profit-donations').random;
 * console.log(random())
 * // => [{}]
 * ```
 *
 * @returns A random non-profit from the database or a sub list.
 */
export const random = (subList?: readonly NonProfit[]) => {
  const list = subList || nonProfits;
  return list[Math.floor(Math.random() * list.length)];
};

/**
 * Gets a random non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { getCountryNonprofits } from 'non-profit-donations'
 * console.log(getCountryNonprofits('Nigeria'))
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var getCountryNonprofits = require('non-profit-donations').getCountryNonprofits;
 * console.log(getCountryNonprofits('Nigeria'))
 * // => [{}]
 * ```
 *
 * @param country - The name of the country to get non profits for.
 * @returns A list of non-profits for the given country.
 */
export const getCountryNonprofits = (country: string) => {
  return nonProfits.filter(
    (org) => org.country?.toLocaleLowerCase() === country?.toLocaleLowerCase()
  );
};

/**
 * Gets a random non-profit from the list of non-profits
 *
 * ### Example (es module)
 * ```js
 * import { getVerifiedNonprofits } from 'non-profit-donations'
 * console.log(getVerifiedNonprofits())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var getVerifiedNonprofits = require('non-profit-donations').getVerifiedNonprofits;
 * console.log(getVerifiedNonprofits())
 * // => [{}]
 * ```
 *
 * @returns A list of all verified non-profits.
 */
export const getVerifiedNonprofits = () => {
  return nonProfits.filter((org) => org.isVerified);
};

/**
 * Gets a list of non-profit with specified payment type
 *
 * ### Example (es module)
 * ```js
 * import { allWithPaymentType } from 'non-profit-donations'
 * console.log(allWithPaymentType('interledger'))
 * // => {}
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var allWithPaymentType = require('non-profit-donations').allWithPaymentType;
 * console.log(allWithPaymentType('interledger'))
 * // => {}
 * ```
 *
 * @returns A list of non-profit with specified payment type.
 */
export const allWithPaymentType = (paymentType: string) => {
  return nonProfits.filter((n) =>
    n.paymentMethods.find(
      (org) => org.type === paymentType && org.paymentID?.length > 0
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
  const list = allWithPaymentType(paymentType);
  return random(list);
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

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
 * console.log(getCountryNonprofits())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var getCountryNonprofits = require('non-profit-donations').getCountryNonprofits;
 * console.log(getCountryNonprofits())
 * // => [{}]
 * ```
 *
 * @param country - The name of the country to get non profits for.
 * @returns A list of non-profits for the given country.
 */
export const getCountryNonprofits = (country: string) => {
  return nonProfits.filter(
    (n) => n.country?.toLocaleLowerCase() === country?.toLocaleLowerCase()
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
  return nonProfits.filter((n) => n.isVerified);
};

/**
 * Gets a random non-profit from the list of non-profits with mobile money
 *
 * ### Example (es module)
 * ```js
 * import { randomWithMobileMoney } from 'non-profit-donations'
 * console.log(randomWithMobileMoney())
 * // => [{}]
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var randomWithMobileMoney = require('non-profit-donations').randomWithMobileMoney;
 * console.log(randomWithMobileMoney())
 * // => [{}]
 * ```
 *
 * @returns A random non-profit from a sub list with mobile money support.
 */
export const randomWithMobileMoney = () => {
  const list = nonProfits.filter((n) =>
    n.paymentMethod.find(
      (p) => p.type === 'mobile-money' && p.paymentID?.length > 0
    )
  );
  return random(list);
};

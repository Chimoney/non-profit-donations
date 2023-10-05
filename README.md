<div align="center">
  <a href="#">
  	<img src="https://media.giphy.com/media/ONPuqEOr8BHr3AfHDE/giphy.gif" alt="Logo project" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>non-profit-donations</b>
  </p>
  <p>
     <i>Get and manage verified non-profits and send donations to them using their verified Interledger payment pointer, ENS name, Paystring, Mobile money number, Airtime phone number and other crypto or payment addresses.</i>
  </p>
  <p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/twitter/follow/chimoney_io.svg?label=Follow&style=social)](https://twitter.com/chimoney_io)

  </p>
</div>

---

**Content**

- [Features](#features)
- [Payment Types](#payment types)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [API](#api)
- [Contributing](#contributing)
- [Maintainers](#maintainers)

## Features ✨

- Get a list of verified Non-profits
- Filter by location, verification status, accepted donation method and many more
- Get a random non-profit to make an instant donation
- Get non-profits that accept your preferred donation medium
- And more. Please, contribute.

## Payment Types
These are the existing payment types that support.
- Airtime
- Bank Transfer
- bitcoin
- ens
- eth
- Filecoin
- flutterwave
- Gofundme
- Gpay
- interledger
- mobile-money
- paypal
- pay-string
- wire Transfer
- xrp
- Zcash
- new-type 1
- new-type 2
- new-type3

## Installation 🐙

Yarn:

```bash
yarn add non-profit-donations
```

npm:

```bash
npm install --save non-profit-donations
```

## Usage 💡

### Example (es module)

```js
import { verifiedNonprofits } from 'non-profit-donations';
console.log(verifiedNonprofits());
```

### Example (commonjs)

```js
var verifiedNonprofits = require('non-profit-donations').verifiedNonprofits;
console.log(verifiedNonprofits());
```

### Result

```js
[
  {
    name: 'SheCodeAfrica',
    email: 'info@shecodeafrica.org',
    country: 'Nigeria',
    website: 'shecodeafrica.org',
    logo: 'https://www.shecodeafrica.org/images/she-code-africa-logo.svg',
    foundedYear: '2016',
    description:
      'A non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'interledger',
        paymentID: '$ilp.uphold.com/kkd4KdPQwqJM',
      },
  },
  {
    name: 'Internet Archive',
    email: 'info@archive.org',
    country: 'United States',
    website: 'https://archive.org/',
    logo: 'https://anniversary.archive.org/wp-content/themes/anniversary/images/logo-white.svg',
    foundedYear: '1996',
    description:
      'Internet Archive is a non-profit digital library offering millions of free books, movies, & audio files, plus billions of saved web pages in the Wayback Machine',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 11, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'interledger',
        paymentID: '$ilp.uphold.com/D7BwPKMQzBiD',
      },
      {
        type: 'xrp',
        paymentID: 'rGeyCsqc6vKXuyTGF39WJxmTRemoV3c97h',
      },
    ],
  },
  .
  .
  .
]
```

## Documentation 📄

Documentation is at [chimoney.github.io/non-profit-donations](https://chimoney.github.io/non-profit-donations/index.html)

## API 👩‍💻

API is at [chimoney.github.io/non-profit-donations](https://chimoney.github.io/non-profit-donations/index.html)

## Contributing 🍰

Please make sure to read the [Contributing Guide](https://github.com/Chimoney/non-profit-donations/blob/main/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to this project!

## Maintainers 👷

<table>
  <tr>
    <td align="center"><a href="https://github.com/uchibeke"><img src="https://avatars.githubusercontent.com/u/5677552?v=4" width="50px;" alt="Uchi Uchibeke"/><br /><sub><b>Uchi Uchibeke</b></sub></a><br /><a href="#" title="Code">💻</a></td>
  </tr>
</table>

## License ⚖️

MIT ©

---

[<img align="left" height="100" src="https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg" />](https://chimoney.io)

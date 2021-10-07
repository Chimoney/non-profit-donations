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
     <i>Get and manage verified non-profits and send donations to them.</i>
  </p>
  <p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/twitter/follow/chimoney_io.svg?label=Follow&style=social)](https://twitter.com/chimoney_io)

  </p>
</div>

---

**Content**

- [Features](##features)
- [Install](##install)
- [Usage](##usage)
- [Documentation](##documentation)
- [API](##Api)
- [Contributing](##contributing)
- [Maintainers](##maintainers)

## Features ✨

- Get a list of verified Non-profits
- Filter by location, verification status, accepted donation method and many more
- Get a random non-profit to make an instant donation

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
import { getVerifiedNonprofits } from 'non-profit-donations';
console.log(getVerifiedNonprofits());
```

### Example (commonjs)

```js
var getVerifiedNonprofits =
  require('non-profit-donations').getVerifiedNonprofits;
console.log(getVerifiedNonprofits());
```

### Result

```js
{
  name: 'SheCodeAfrica',
  email: 'info@shecodeafrica.org',
  country: 'Nigeria',
  website: 'shecodeafrica.org',
  logo: 'https://www.shecodeafrica.org/images/she-code-africa-logo.svg',
  foundedYear: '2016',
  description: 'A non-profit organisation focused on celebrating and empowering young girls and women in tech across Africa.',
  isVerified: true,
  verification: { date: 2021-10-04T04:00:00.000Z, verifier: 'Uchi Uchibeke' },
  paymentMethods: [ [Object], [Object], [Object], [Object], [Object] ]
}
```

## Documentation 📄

Coming soon

## API 👩‍💻

Coming soon

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

MIT © [chimoney.io](https://chimoney.io)

<img align="left" height="100" src="https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg" />

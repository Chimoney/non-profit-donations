# Open Giving

Open Giving is a platform that allows users to donate to various non-profits using different payment methods. This README provides information on how to set up the project, use the application, and contribute to its development.

## Table of Contents

- [Open Giving](#open-giving)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Query Parameters](#query-parameters)
  - [For Developers](#for-developers)
    - [Project Structure](#project-structure)
    - [Scripts](#scripts)
    - [Linting and Formatting](#linting-and-formatting)
    - [Environment Variables](#environment-variables)
  - [For Users](#for-users)
    - [Making a Donation](#making-a-donation)
    - [Supported Payment Methods](#supported-payment-methods)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/open-giving.git
    cd open-giving
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

    The application will be available at `http://localhost:3000`.

## Query Parameters

The application supports various query parameters to customize the user experience. Here are some of the key parameters:

- `paymentMethod`: Specifies the payment method(s) to filter the non-profits by. Multiple methods can be separated by commas (e.g., `paypal,stripe`).
- `npCode`: Specifies the code of a specific non-profit to display its details.
- `page`: Specifies the page number for pagination.
- `showQRCode`: If set, displays a QR code for the non-profit.
- `useTestPaymentID`: If set, uses test payment IDs for the transactions.

Example URL with query parameters:

```sh
http://localhost:3000?paymentMethod=paypal,stripe&npCode=123&page=2&showQRCode=true&useTestPaymentIDs=true
```

## For Developers

### Project Structure

The project is structured as follows:

```
open-giving/
├── src/
│   ├── components/
│   │   ├── DonationForm.js
│   │   ├── NonProfitCard.js
│   │   └── QRCodeComponent.js
│   ├── hooks/
│   ├── pages/
│   │   └── index.js
│   ├── utils/
│   └── ...
├── .circleci/
│   └── config.yml
├── .editorconfig
├── .eslintrc.json
├── .cspell.json
├── package.json
├── tsconfig.json
├── tsconfig.module.json
└── README.md
```

### Scripts

- `npm start` or `yarn start`: Starts the development server.
- `npm run build` or `yarn build`: Builds the application for production.
- `npm test` or `yarn test`: Runs the test suite.
- `npm run lint` or `yarn lint`: Lints the codebase.

### Linting and Formatting

The project uses ESLint for linting and Prettier for code formatting. Ensure your code adheres to the defined rules before committing.

### Environment Variables

Create a `.env` file in the root directory to define environment variables. Example:

```
REACT_APP_API_URL=https://api.example.com
```

## For Users

### Making a Donation

1. Visit the application URL.
2. Select a non-profit organization from the list.
3. Choose a payment method.
4. Enter the donation amount and your email address.
5. Click the "Donate" button to proceed with the payment.

### Supported Payment Methods

- PayPal
- Stripe
- Venmo
- CashApp
- Airtime
- Mobile Money
- Stablecoin
- Chimoney
- Donation Link

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Open a pull request with a detailed description of your changes.

Please ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

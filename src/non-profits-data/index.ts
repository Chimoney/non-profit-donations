import { NonProfit } from '../types/non-profit';

const nonProfits: readonly NonProfit[] = [
  {
    npCode: 'SheCodeAfrica',
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
      {
        type: 'mobile-money',
        paymentID: '',
      },
      {
        type: 'airtime',
        paymentID: '',
      },
      {
        type: 'xrp',
        paymentID: '',
      },
      {
        type: 'bitcoin',
        paymentID: '',
      },
      {
        type: 'eth',
        paymentID: '',
      },
      {
        type: 'pay-string',
        paymentID: '',
      },
      {
        type: 'ens',
        paymentID: '',
      },
    ],
  },
  {
    npCode: 'techsoupafrica',
    name: 'techsoupafrica',
    email: 'tsafrica@techsoup.org',
    country: 'Africa',
    website: 'https://www.techsoupafrica.org/',
    logo: 'https://techsoupafrica.org/wp-content/uploads/2018/09/techsoup-africa-logo.png',
    foundedYear: '2016',
    description:
      'TechSoup Africa is a regional hub of the TechSoup Global Network. The four network members that form TechSoup Africa and serve the region are local capacity-building organizations that have won awards for their accomplishments. Together, we help nonprofits in 56 African countries and territories get the resources they need to build their organizational capacity and their technology expertise. We combine the local knowledge of TechSoup Africa members with the capacity of the global network to successfully collaborate with corporations and funders worldwide.',
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
        paymentID: '',
      },
      {
        type: 'mobile-money',
        paymentID: '',
      },
      {
        type: 'airtime',
        paymentID: '',
      },
    ],
  },
  {
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
  },
  {
    npCode: 'InternetArchive',
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
  {
    npCode: 'ArtistRescueTrust',
    name: 'Artist Rescue Trust',
    email: 'info@artistrescue.org',
    country: 'United States',
    website: 'https://artistrescue.org/',
    logo: 'https://artistrescue.org/img/logos/art-horizontal-black.png?_cchid=207f168a651a73314831f842fe9fbfc5',
    foundedYear: '2020',
    description:
      'Artist Rescue Trust (A.R.T.) exists is to provide relief funding to musicians and artists whose ability to perform, tour and earn a living has been negatively affected by COVID-19. A.R.T. will provide $1,500 over three months to artists in need and amplify the stories, performances and creations they had hoped to share with the world before the pandemic limited their ability to do so.',
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
        paymentID: '$ilp.uphold.com/JWP2Um9RFi9a',
      },
    ],
  },
  {
    npCode: 'ContractForTheWeb',
    name: 'Contract for the Web',
    email: 'contract@webfoundation.org',
    country: 'Global',
    website: 'https://contractfortheweb.org/',
    logo: 'https://3ehspg3e85cn1oz25ebdof7c-wpengine.netdna-ssl.com/wp-content/themes/WF/img/logo-wwwfoundation-top.png',
    foundedYear: '2020',
    description:
      'A global plan of action to make our online world safe and empowering for everyone',
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
        paymentID: '$ilp.uphold.com/rKe8mMbUGkBm',
      },
    ],
  },
  {
    npCode: 'webfoundation',
    name: 'The World Wide Web Foundation',
    email: 'contract@webfoundation.org',
    country: 'Global',
    website: 'https://webfoundation.org/',
    logo: 'https://3ehspg3e85cn1oz25ebdof7c-wpengine.netdna-ssl.com/wp-content/themes/WF/img/logo-wwwfoundation-top.png',
    foundedYear: '2009',
    description:
      'The World Wide Web Foundation was established in 2009 by web inventor Sir Tim Berners-Lee and Rosemary Leith to advance the open web as a public good and a basic right. We are an independent, international organisation fighting for digital equality — a world where everyone can access the web and use it to improve their lives.',
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
        paymentID: '$ilp.uphold.com/rKe8mMbUGkBm',
      },
    ],
  },
  {
    npCode: 'CreativeCommons',
    name: 'Creative Commons',
    email: 'info@creativecommons.org',
    country: 'United States',
    website: 'creativecommons.org',
    logo: 'https://creativecommons.org/wp-content/themes/cc/images/cc.logo.white.svg',
    foundedYear: '2001',
    description: 'Creative Commons make it easier for people to share their creative and academic work, as well as to access and build upon the work of others',
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
        paymentID: '$ilp.uphold.com/edR8erBDbRyq',
      },
    ],
  },
  {
    npCode: 'CriticalRead',
    name: 'Critical Read',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/6WaPJ87LUaMB',
      },
    ],
  },
  {
    npCode: 'DefoldFoundation',
    name: 'Defold Foundation',
    email: 'press@defold.se.',
    country: 'Sweden',
    website: 'https://www.defold.com',
    logo: 'https://defold.com/images/logo/defold/logo/logo-ver-classic-white-160.png',
    foundedYear: '2020',
    description: ' The foundation works together with industry partners to provide developer-friendly software and services to game developers across the globe.',
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
        paymentID: '$ilp.uphold.com/QkG86UgXzKq8',
      },
    ],
  },
  {
    npCode: 'DesignClub',
    name: 'Design Club',
    email: 'hello@designclub.org.uk',
    country: 'London',
    website: 'http://www.designclub.org.uk/',
    logo: 'https://assets.website-files.com/5eefa8d10be60432e64b3709/60075ab3b7ed0e18643c81f8_logo-grey.svg',
    foundedYear: '2017',
    description: 'Educate children to learn design thinking as a life skill',
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
        paymentID: '$ilp.uphold.com/nFUPq76UMbHE',
      },
    ],
  },
  {
    npCode: 'freeCodeCamp',
    name: 'freeCodeCamp',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/LJmbPn7WD4JB',
      },
    ],
  },
  {
    npCode: 'DevCareers',
    name: 'DevCareers',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/7xfgbeQheXdJ',
      },
    ],
  },
  {
    npCode: 'LibraryFutures',
    name: 'Library Futures',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/YNmJxZA8NBkL',
      },
    ],
  },
  {
    npCode: 'NewspeakHouse',
    name: 'Newspeak House',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/RamiB9hWx3Uj',
      },
    ],
  },
  {
    npCode: 'SurveillanceTechnologyOversightProject',
    name: 'S.T.O.P. (Surveillance Technology Oversight Project)',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/RHZ6KZx4mWQi',
      },
    ],
  },
  {
    npCode: 'TheTeacherFund',
    name: 'The Teacher Fund',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/aNhkaA3n23Gw',
      },
    ],
  },
  {
    name: 'ToS;DR',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$coil.xrptipbot.com/aazhMbgMTheUPbwj58SqVQ',
      },
    ],
  },
  {
    npCode: 'Ushahidi',
    name: 'Ushahidi',
    email: '',
    country: '',
    website: '',
    logo: '',
    foundedYear: '',
    description: '',
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
        paymentID: '$ilp.uphold.com/kN2KHpqhNFiM',
      },
    ],
  },
];

export default nonProfits;

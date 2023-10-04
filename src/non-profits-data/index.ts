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
        paymentID: '$ilp.uphold.com/QkG86UgXzKq8',
      },
    ],
  },
  {
    npCode: 'DesignClub',
    name: 'Design Club',
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
    npCode: 'High-Tech Center',
    name: 'High-Tech Center for Nigerian Women and Youths',
    email: 'info@hightechwomen.org.ng',
    country: 'Nigeria',
    website: 'https://newstorycharity.org/',
    logo: 'https://newstorycharity.org/wp-content/themes/newstory/src/img/mark.png',
    foundedYear: '2004',
    description: 'To see every Nigerian Woman and Youth become ICT literate',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2023'),
        verifier: '@mynameissaraah',
      },
    ],
    paymentMethods: [
      {
        type: 'Bank tranfer',
        paymentID: 'Account No: 0019052855 - Sterling Bank Plc 0034611000 Diamond Bank Plc Account ',
      },
    ],
  },
  {
    npCode: 'American Red Cross',
    name: 'American Red Cross',
    email: 'publicinformation@aspca.org',
    country: 'United States',
    website: 'https://www.redcross.org/',
    logo: '',
    foundedYear: '1881',
    description: 'The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2023'),
        verifier: '@mynameissaraah',
      },
    ],
    paymentMethods: [
      {
        type: 'Mail',
        paymentID: '',
      },
{
        type: 'Phone',
        paymentID: '1-800-HELP NOW (1-800-435-7669)',
},
{
        type: 'Donor Advised Funds',
        paymentID: 'https://www.redcross.org/donations/ways-to-donate/donor-advised-funds.html',
      },
{
        type: 'Stocks, Wire Transfers and Mutual Funds',
        paymentID: 'https://www.redcross.org/donations/ways-to-donate/stocks-mutual-funds.html',
      },
{
        type: 'Gofundme',
        paymentID: 'https://www.gofundme.com/f/nugck-american-red-cross/donate',
      },

    ],
  },



{
    npCode: 'HerTechTrail',
    name: 'HerTechTrail',
    email: 'hertechtrail@gmail.com',
    country: 'Nigeria',
    website: 'https://www.hertechtrail.org/',
    logo: '',
    foundedYear: '2019',
    description: 'To support and inspire women to outclass and trail in Tech careers and businesses in Africa.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2023'),
        verifier: '@mynameissaraah',
      },
    ],
    paymentMethods: [
      {
        type: 'Flutterwave',
        paymentID: 'https://dashboard.flutterwave.com/donate/quro4ogcnplo',
      },
    ],
  },



{
    npCode: 'ASPCA',
    name: 'The American Society for the Prevention of Cruelty to Animals (ASPCA)',
    email: 'publicinformation@aspca.org',
    country: 'United States',
    website: 'https://www.aspca.org',
    logo: '',
    foundedYear: '1866',
    description: 'To provide effective means for the prevention of cruelty to animals throughout the United States.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2023'),
        verifier: '@mynameissaraah',
      },
    ],
    paymentMethods: [
      {
        type: 'Credit Card',
        paymentID: '',
      },
{
        type: 'Checking or savings account',
        paymentID: '',
      },
{
        type: 'Paypal',
        paymentID: '',
      },
{
        type: 'Gofundme',
        paymentID: 'https://www.gofundme.com/f/ag9t4-aspca/donate',
      },
    ],
  },


];



export default nonProfits;

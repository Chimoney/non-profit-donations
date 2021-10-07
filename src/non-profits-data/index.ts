import { NonProfit } from '../types/non-profit';

const nonProfits: readonly NonProfit[] = [
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
    verification: {
      date: new Date('Oct 4, 2021'),
      verifier: 'Uchi Uchibeke',
    },
    paymentMethods: [
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
    ],
  },
  {
    name: 'techsoupafrica',
    email: 'tsafrica@techsoup.org',
    country: 'Africa',
    website: 'https://www.techsoupafrica.org/',
    logo: 'https://techsoupafrica.org/wp-content/uploads/2018/09/techsoup-africa-logo.png',
    foundedYear: '2016',
    description:
      'TechSoup Africa is a regional hub of the TechSoup Global Network. The four network members that form TechSoup Africa and serve the region are local capacity-building organizations that have won awards for their accomplishments. Together, we help nonprofits in 56 African countries and territories get the resources they need to build their organizational capacity and their technology expertise. We combine the local knowledge of TechSoup Africa members with the capacity of the global network to successfully collaborate with corporations and funders worldwide.',
    isVerified: true,
    verification: {
      date: new Date('Oct 4, 2021'),
      verifier: 'Uchi Uchibeke',
    },
    paymentMethods: [
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
    ],
  },
];

export default nonProfits;

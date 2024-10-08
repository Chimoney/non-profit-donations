import { NonProfit } from '../types/non-profit';

const nonProfits: readonly NonProfit[] = [
  {
    npCode: 'Renbi Women',
    name: 'Renbi Women',
    email: 'info@renbiwomen.org',
    country: 'Nigeria',
    website: 'https://renbiwomen.org/',
    logo: 'https://renbiwomen.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1500.24cb05a5.png&w=3840&q=75',
    foundedYear: '2022',
    description:
      'Renbi Women Empowerment Initiative focuses on the economic empowerment of women in vulnerable communities in Nigeria.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2024'),
        verifier: '@HammedBabatunde',
      },
    ],
    paymentMethods: [
      /*
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: '',
        },
        donationHandler: 'chimoneyDonation',
      },
      */
      {
        type: 'donation-link',
        paymentID: 'https://renbiwomen.org/donate',
      },
    ],
  },
  {
    npCode: 'SheCodeAfrica',
    name: 'She Code Africa',
    email: 'info@shecodeafrica.org',
    country: 'Nigeria',
    website: 'https://shecodeafrica.org/',
    logo: 'https://pbs.twimg.com/profile_images/1268533998403440640/P4x181_g_400x400.jpg',
    foundedYear: '2016',
    description:
      'A non-profit organization focused on celebrating and empowering young girls and women in tech across Africa through mentorship, training, and career development programs.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 4, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: 'PR3tl5CsAhQWW19sQuPH',
        },
        donationHandler: 'chimoneyDonation',
      },
      {
        type: 'paypal',
        paymentID: 'donations@shecodeafrica.org',
      },
      {
        type: 'donation-link',
        paymentID: 'https://shecodeafrica.org/donate',
      },
    ],
  },
  {
    npCode: 'webfoundation',
    name: 'The World Wide Web Foundation',
    email: 'contract@webfoundation.org',
    country: 'Global',
    website: 'https://webfoundation.org/',
    logo: 'https://webfoundation.org/docs/2018/06/WebFoundation_Logo_RGB.jpg',
    foundedYear: '2009',
    description:
      'The World Wide Web Foundation was established by Sir Tim Berners-Lee to fight for digital equality and ensure that the web remains a public good accessible to everyone.',
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
      { type: 'donation-link', paymentID: 'https://webfoundation.org/donate/' },
    ],
  },
  {
    npCode: 'CreativeCommons',
    name: 'Creative Commons',
    email: '',
    country: '',
    website: '',
    logo: 'https://mirrors.creativecommons.org/presskit/icons/cc.xlarge.png',
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
      {
        type: 'donation-link',
        paymentID:
          'https://www.classy.org/give/313412/#!/donation/checkout?c_src=website&c_src2=top-of-page-banner',
      },
    ],
  },
  {
    npCode: 'DevCareers',
    name: 'DevCareers',
    email: 'contact@devcareers.io',
    country: 'Nigeria',
    website: 'https://devcareers.io/',
    logo: 'https://devcareer.io/assets/devcareerhub-824097f3.png',
    foundedYear: '2019',
    description:
      'DevCareers is a non-profit initiative that supports underrepresented individuals in their journey to become software developers through mentorship, training, and resources.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 11, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: 'uEBebfE7ISin8JkilFRq',
        },
        donationHandler: 'chimoneyDonation',
      },
      {
        type: 'donation-link',
        paymentID: 'https://devcareer.io/support',
      },
    ],
  },
  {
    npCode: 'WorldInnovationLeague',
    name: 'World Innovation League',
    email: 'info@worldinnovationleague.com',
    country: 'Canada',
    website: 'https://worldinnovationleague.com/',
    logo: 'https://media.licdn.com/dms/image/D560BAQFc6jQY2zzXyg/company-logo_200_200/0/1703153264580/world_innovation_league_wil_logo',
    foundedYear: '2021',
    description:
      'World Innovation League is a Canadian non-profit organization that provides innovative technology training and opportunities to underrepresented individuals globally. The organization focuses on promoting entrepreneurship, STEM education, and tech development to foster inclusive growth in the digital economy.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 23, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'chimoney',
        paymentID: {
          test: '69b9MVYsDMIWRbj5Oja5',
          production: 'CoEp7GHW62Q2nQ6PbO8i',
        },
        donationHandler: 'chimoneyDonation',
      },
      {
        type: 'donation-link',
        paymentID: 'https://worldinnovationleague.com/donate',
      },
    ],
  },
  {
    npCode: 'Ushahidi',
    name: 'Ushahidi',
    email: 'info@ushahidi.com',
    country: 'Kenya',
    website: 'https://www.ushahidi.com/',
    logo: 'https://data.org/wp-content/uploads/2021/12/ushahidi-stamp.png',
    foundedYear: '2008',
    description:
      'Ushahidi is a non-profit organization that builds open-source software for information collection, visualization, and interactive mapping, particularly for crisis response and civic engagement.',
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
      {
        type: 'paypal',
        paymentID: 'donations@ushahidi.com',
      },
      {
        type: 'donation-link',
        paymentID: 'https://www.ushahidi.com/donate',
      },
    ],
  },
  {
    npCode: 'OSCA',
    name: 'Open Source Community Africa',
    email: 'info@oscafrica.org',
    country: 'Nigeria',
    website: 'https://oscafrica.org/',
    logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1647919861695/X4M157Xqa.png',
    foundedYear: '2018',
    description:
      'Open Source Community Africa (OSCA) is a community of open-source enthusiasts in Africa focused on promoting open-source technologies, innovation, and collaboration.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://opencollective.com/osca/contribute',
      },
    ],
  },
  {
    npCode: 'Umuzi',
    name: 'Umuzi',
    email: 'info@umuzi.org',
    country: 'South Africa',
    website: 'https://www.umuzi.org/',
    logo: 'https://images.squarespace-cdn.com/content/v1/5ab8b930a2772cd50e5d979a/1667383865165-R2NCG6DOSS9NE7FYL158/UMUZI_Logo_Asset+3%402x-100.jpg',
    foundedYear: '2013',
    description:
      'Umuzi is a South African non-profit that develops tech and creative professionals from underserved communities by providing learning programs in coding, data science, and design to enable them to thrive in the 4th Industrial Revolution.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 23, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://www.umuzi.org/contact',
      },
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: 'uFm29ZPvzBKABthw7Gi',
        },
        donationHandler: 'chimoneyDonation',
      },
    ],
  },
  {
    npCode: 'GirlsWhoCode',
    name: 'Girls Who Code',
    email: 'info@girlswhocode.com',
    country: 'United States',
    website: 'https://girlswhocode.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Girls_Who_Code_Logo.svg/1200px-Girls_Who_Code_Logo.svg.png',
    foundedYear: '2012',
    description:
      'Girls Who Code is an international nonprofit organization working to close the gender gap in technology and to change the image of what a programmer looks like.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://girlswhocode.com/donate',
      },
    ],
  },
  {
    npCode: 'techsoupafrica',
    name: 'TechSoup Africa',
    email: 'tsafrica@techsoup.org',
    country: 'Africa',
    website: 'https://techsoupafrica.org/',
    logo: 'https://www.techsoupafrica.org/user/themes/techsoup-regional/images/logos/techsoup-africa.svg',
    foundedYear: '2016',
    description:
      'TechSoup Africa is a regional hub of the TechSoup Global Network, providing technology solutions and resources to nonprofits across 56 African countries.',
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
      {
        type: 'donation-link',
        paymentID: 'https://www.techsoupafrica.org/en/get-involved',
      },
    ],
  },
  {
    npCode: 'newstorycharity',
    name: 'New Story',
    email: 'team@newstorycharity.org',
    country: 'United States',
    website: 'https://newstorycharity.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/New_Story_Charity_Logo.png/800px-New_Story_Charity_Logo.png',
    foundedYear: '2014',
    description:
      'New Story pioneers solutions to end global homelessness through innovative technology and partnerships.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 11, 2021'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [],
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
      'Internet Archive is a non-profit digital library offering free access to millions of books, movies, and audio files, and billions of archived web pages.',
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
      'Artist Rescue Trust (A.R.T.) provides relief funding to musicians and artists affected by COVID-19, helping them sustain their livelihoods through financial assistance.',
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
    foundedYear: '2019',
    description:
      'A global plan of action to make the online world safe, secure, and empowering for all users by promoting digital rights and accessibility.',
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
      {
        type: 'donation-link',
        paymentID: 'https://www.freecodecamp.org/donate/',
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
    npCode: 'BlackGirlsCode',
    name: 'Black Girls Code',
    email: 'info@blackgirlscode.com',
    country: 'United States',
    website: 'https://www.blackgirlscode.com/',
    logo: 'https://blackgirlscode.com/img/logo.svg',
    foundedYear: '2011',
    description:
      'Black Girls Code is a nonprofit organization that introduces girls of color to technology and computer science, empowering them to become innovators and leaders in STEM fields.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://blackgirlscode.com/donate',
      },
    ],
  },
  {
    npCode: 'Kiva',
    name: 'Kiva',
    email: 'support@kiva.org',
    country: 'Global',
    website: 'https://www.kiva.org/',
    logo: 'https://www.kiva.org/images/kiva-logo.svg',
    foundedYear: '2005',
    description:
      'Kiva is a global nonprofit that enables people to lend money to low-income entrepreneurs and students in over 80 countries, helping them to access the capital they need to succeed.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'paypal',
        paymentID: 'donate@kiva.org',
      },
      {
        type: 'donation-link',
        paymentID: 'https://www.kiva.org/donate/supportus',
      },
      {
        type: 'stablecoin',
        paymentID:
          'https://www.cryptoforcharity.io/kiva?utm_source=partner&utm_medium=website&utm_campaign=kiva_waystogivepg',
      },
    ],
  },
  {
    npCode: 'WikimediaFoundation',
    name: 'The Wikimedia Foundation',
    email: 'donate@wikimedia.org',
    country: 'Global',
    website: 'https://wikimediafoundation.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wikimedia_Foundation_logo.svg/800px-Wikimedia_Foundation_logo.svg.png',
    foundedYear: '2003',
    description:
      'The Wikimedia Foundation is the nonprofit that operates Wikipedia and other free knowledge projects, supporting millions of people in accessing free and open content.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://donate.wikimedia.org/',
      },
      {
        type: 'stablecoin',
        paymentID: 'crypto@wikimedia.org',
      },
    ],
  },
  {
    npCode: 'InternetSociety',
    name: 'Internet Society',
    email: 'donate@isoc.org',
    country: 'Global',
    website: 'https://www.internetsociety.org/',
    logo: 'https://www.internetsociety.org/wp-content/themes/isoc/images/logo.svg',
    foundedYear: '1992',
    description:
      'The Internet Society is a global nonprofit organization advocating for an open, globally connected, and secure Internet, empowering people worldwide to shape the Internet’s future.',
    isVerified: true,
    verifications: [
      {
        date: new Date('Sept 19, 2024'),
        verifier: '@uchibeke',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://www.internetsociety.org/donate/',
      },
    ],
  },
   {
    npCode: 'SmileFoundation',
    name: 'Smile Foundation',
    email: 'info@smilefoundationindia.org',
    country: 'India',
    website: 'https://www.smilefoundationindia.org/',
    logo: 'data:image/jpeg;base64,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',
    foundedYear: '2002',
    description:
      'Smile Foundation is a national level development organization currently benefitting more than 300,000 underprivileged children & youth directly through 158 welfare projects through initiatives in education, healthcare, livelihood, women empowerment, and advocacy across 25 states of India.',
    isVerified: true,
    verifications: [
      {
        date: new Date(''),
        verifier: '',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://donate.smilefoundationindia.org/',
      },
    ],
  },
];

export default nonProfits;

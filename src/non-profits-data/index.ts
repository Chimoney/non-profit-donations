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
    npCode: 'Akili Dada',
    name: 'Akili Dada',
    email: 'info@akilidada.org',
    country: 'Kenya',
    website: 'https://akilidada.org',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDuBgEDvEPkpD0u-LTtO0lYKhuyJdsQ3RIg&s',
    foundedYear: '2005',
    description: 'Akili Dada is an international leadership incubator aimed at empowering high-achieving young women from underprivileged backgrounds',
    isVerified: true,
    verifications: [
      {
        date: new Date('2024-10-13'),
        verifier: '@Codegirl254',
      }
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://akilidada.org/how-to-support.html',
      },
      // {
      //   type: 'chimoney',
      //   paymentID: {
      //     test: '',
      //     production: 'uniqueChimoneyID', //if present
      //   },
      //   donationHandler: 'chimoneyDonation',
      // }
    ],
},
{
  npCode: 'Amref Health Africa',
  name: 'Amref Health Africa',
  email: 'info@amref.org',
  country: 'Kenya',
  website: 'https://amref.org',
  logo: 'https://amrefusa.org/wp-content/uploads/2019/09/amref-logo.png',
  foundedYear: '1957',
  description: ' Amref Health Africa provides healthcare and medical services, with a focus on maternal health, HIV/AIDS, and other community health issues in Africa.',
  isVerified: true,
  verifications: [
    {
      date: new Date('Oct 31, 2024'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://amref.org/donate/',
    },
    // {
    //   type: 'chimoney',
    //   paymentID: {
    //     test: '',
    //     production: 'uniqueChimoneyID', //if present
    //   },
    //   donationHandler: 'chimoneyDonation',
    // }
  ],
},
{
  npCode: 'Shining Hope for Communities (SHOFCO)',
  name: 'Amref Health Africa',
  email: 'info@amref.org',
  country: 'Kenya',
  website: 'https://amref.org',
  logo: 'https://amrefusa.org/wp-content/uploads/2019/09/amref-logo.png',
  foundedYear: '1957',
  description: ' Amref Health Africa provides healthcare and medical services, with a focus on maternal health, HIV/AIDS, and other community health issues in Africa.',
  isVerified: true,
  verifications: [
    {
      date: new Date('Oct 31, 2024'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://amref.org/donate/',
    },
    // {
    //   type: 'chimoney',
    //   paymentID: {
    //     test: '',
    //     production: 'uniqueChimoneyID', //if present
    //   },
    //   donationHandler: 'chimoneyDonation',
    // }
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
          production: 'https://ilp.chimoney.com/shecodeafrica',
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
          production: 'https://ilp.chimoney.com/devcareer',
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
          test: 'https://ilp-sandbox.chimoney.com/61365396',
          production: 'https://ilp.chimoney.com/worldinnovationleague',
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
          production: 'https://ilp.chimoney.com/41703163_1729687433664',
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
      {
        type: 'donation-link',
        paymentID: 'https://renbiwomen.org/donate',
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
    npCode: 'ChessInSlumsAfrica',
    name: 'Chess in Slums Africa',
    email: 'hello@chessinslumsafrica.com',
    country: 'Nigeria',
    website: 'https://www.chessinslumsafrica.com/',
    logo: 'https://shorturl.at/fe3Pz',
    foundedYear: '2018',
    description:
      'We are opening doors of opportunities and education for marginalized kids through chess♟. Together, we can do great things from a small place',
    isVerified: true,
    verifications: [
      {
        date: new Date('2024-10-15'),
        verifier: '@DevvEmeka',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://www.chessinslumsafrica.com/donate',
      },
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: '', //if present
        },
        donationHandler: 'chimoneyDonation',
      },
    ],
  },
  {
    npCode: 'FIDANigeria',
    name: 'International Federation of Women Lawyers (FIDA) Nigeria',
    email: 'fidanigeria@yahoo.com',
    country: 'Nigeria',
    website: 'https://fida.org.ng/',
    logo: 'https://shorturl.at/yPEnK',
    foundedYear: '1964',
    description:
      'FIDA Nigeria’s primary role is to protect, promote and preserve the rights of women and children in Nigeria.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2024-10-15'),
        verifier: '@DevvEmeka',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://paystack.com/pay/fida_donate',
      },
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: '', //if present
        },
        donationHandler: 'chimoneyDonation',
      },
    ],
  },
  {
    npCode: 'CeceYara',
    name: 'Cece Yara Child Advocacy Centre',
    email: 'info@ceceyara.org',
    country: 'Nigeria',
    website: 'https://ceceyara.org/',
    logo: 'https://shorturl.at/7F87l',
    foundedYear: '2016',
    description:
      'The Cece Yara Foundation is a child-centered non-profit organization established in 2016 to prevent child sexual abuse and to provide access to care, information, protection and emergency intervention.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2024-10-15'),
        verifier: '@DevvEmeka',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://ceceyara.org/donation/',
      },
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: '', //if present
        },
        donationHandler: 'chimoneyDonation',
      },
    ],
  },
];

export default nonProfits;

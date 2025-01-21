import { NonProfit } from '../types/non-profit';

const nonProfits: readonly NonProfit[] = [
  {
    npCode: 'Gamble Alert',
    name: 'Gamble Alert',
    email: 'info@gamblealert.org',
    country: 'Nigeria',
    website: 'https://gamblealert.org/',
    logo: 'https://gamblealert.org/wp-content/uploads/2023/11/cropped-logo.png',
    foundedYear: '2021',
    description:
      "Awareness on Gambling Risk Initiative (Gamble Alert) is a nonprofit dedicated to the prevention of gambling harm, and the provision of support for persons adversely affected by their gambling or that of their significant others.Gamble Alert also works to sensitize the youths on internet safety and protect them from risks associated with the use of the internet, including in-game bullying, online grooming, and gaming/gambling addiction.",
    isVerified: true,
    verifications: [
      {
        date: new Date('Oct 10, 2024'),
        verifier: '@HammedBabatunde',
      },
    ],
    paymentMethods: [
      {
        type: 'chimoney',
        paymentID: {
          test: '',
          production: '8aGbJOS5GJsXfezsxhHV',
        },
        donationHandler: 'chimoneyDonation',
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
  name: 'Shining Hope for Communities (SHOFCO)',
  email: 'info@shofco.org',
  country: 'Kenya',
  website: 'https://www.shofco.org/',
  logo: 'https://i0.wp.com/philanthropycircuit.org/wp-content/uploads/2021/11/highcompress_PC-Insights-website-3.jpg?fit=900%2C313&ssl=1',
  foundedYear: '2004',
  description: 'SHOFCO works in urban slums to provide essential services such as education, healthcare, and clean water, as well as to empower women and children.',
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
      paymentID: 'https://www.shofco.org/donate',
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
  npCode: 'Green Belt Movement',
  name: 'Green Belt Movement',
  email: 'info@greenbeltmovement.org',
  country: 'Kenya',
  website: 'https://www.greenbeltmovement.org/',
  logo: 'https://yt3.googleusercontent.com/ytc/AIdro_m21UBBBPmqZFRaQmxGiDxL26c-S3BPl5YlqjMWAzNy8Zw=s900-c-k-c0x00ffffff-no-rj',
  foundedYear: '1977',
  description: ' Founded by Wangari Maathai, the Green Belt Movement focuses on environmental conservation, community empowerment, and sustainable development.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://www.greenbeltmovement.org/get-involved/support-our-work',
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
  npCode: 'ChildFund Kenya',
  name: 'ChildFund Kenya',
  email: 'info@childfundkenya.org',
  country: 'Kenya',
  website: 'https://www.childfund.org/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_uIlsWA_OsVnHTZJtUPqIgLiB9Ae1-1EUQ&s',
  foundedYear: '1960',
  description: '  Focuses on supporting vulnerable children and families through education, health, and community development initiatives.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://www.childfund.org/donate',
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
  npCode: 'Kenya Red Cross Society',
  name: 'Kenya Red Cross Society',
  email: 'info@redcross.or.ke',
  country: 'Kenya',
  website: 'https://www.redcross.or.ke/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqO_A0XpQu6D887IlOSOtyWSOEBgyJ-Gl5g&s',
  foundedYear: '1965',
  description: ' Provides emergency relief, healthcare, and disaster response across Kenya.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://www.redcross.or.ke/donate',
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
  npCode: 'St. John Ambulance Kenya',
  name: 'St. John Ambulance Kenya',
  email: 'info@stjohnkenya.org',
  country: 'Kenya',
  website: 'https://stjohnkenya.org',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpZv5CPg-YhWbiNUpFezJKC8GTW7wE6T3lA&s',
  foundedYear: '1923',
  description: ' Provides emergency response, first aid training, and healthcare outreach services.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://stjohnkenya.org/donate',
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
  npCode: 'MYSA (Mathare Youth Sports Association)',
  name: 'MYSA',
  email: 'info@mysakenya.org',
  country: 'Kenya',
  website: 'https://www.mysakenya.org',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ub_ZwaN7gprf_T_0WiORuXmWDBc9DBctMQ&s',
  foundedYear: ' 1987',
  description: 'Uses sports as a tool to educate and empower youth in Mathare.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://www.mysakenya.org/index.php/more/donate',
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
  npCode: 'ActionAid Kenya',
  name: 'ActionAid Kenya',
  email: 'info@actionaid-kenya.org',
  country: 'Kenya',
  website: 'https://actionaid-kenya.org/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgdWOH0TPEbwPxjDel71Ljajpkkn-U_KB_A&s',
  foundedYear: ' 1972',
  description: ' Works to fight poverty and injustice, especially for women and marginalized communities.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://actionaid-kenya.org/donate/actionaid-kenya-donate/',
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
  npCode: 'The Earth Organization Kenya',
  name: 'The Earth Organization Kenya',
  email: 'info@earthorganization.org',
  country: 'Kenya',
  website: 'https://www.earthorganization.org/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKN8vvX0Djkn16L26Ha0mp0URb5lPPaUEwHA&s',
  foundedYear: ' 2000',
  description: 'Works on environmental conservation and sustainable development projects.',
  isVerified: true,
  verifications: [
    {
      date: new Date('2024-10-31'),
      verifier: '@Codegirl254',
    }
  ],
  paymentMethods: [
    {
      type: 'donation-link',
      paymentID: 'https://www.earthorganization.org/donate/',
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
  {
    npCode: 'I4G',
    name: 'Ingressive for Good',
    email: 'hello@ingressive.org',
    country: 'Nigeria',
    website: 'https://ingressive.org',
    logo: 'https://shorturl.at/N7IOp',
    foundedYear: '2020',
    description:
      'We are a 501(c)3 edtech nonprofit making it easier for African youths to access the resources, training, and opportunities they need to change their lives. We make it easy for individuals and companies to give to support African talents, as we provide them with the tools, training, and support they need to increase their earning power.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://ingressive.org/donations',
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
    npCode: 'Tech4Dev',
    name: 'Technology for Social Change and Development Initiative',
    email: 'enquiries@tech4dev.com',
    country: 'Nigeria',
    website: 'https://tech4dev.com',
    logo: 'https://tech4dev.com/assets/images/logo.svg',
    foundedYear: '2016',
    description:
      'Tech4Dev is a non-profit social enterprise that creates access to decent work and opportunities for Africans through digital skills empowerment and advocacy.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://tech4dev.com/get-involved/become-a-partner.html',
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
    npCode: 'FAME',
    name: 'Fashioned and Made for Excellence Foundation',
    email: 'info@thefamefoundation.org.ng',
    country: 'Nigeria',
    website: 'https://thefamefoundation.org.ng',
    logo: 'https://shorturl.at/ra7GO',
    foundedYear: '2017',
    description:
      'FAME addresses the learning crisis by collaborating with young people, schools, and governments to create and implement education solutions. These solutions aim to empower Nigerian youth with the necessary skills and values to lead, overcome gender inequalities, excel in school, prepare for the workplace, drive positive change in their communities, and succeed in life.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://linktr.ee/thefamefoundation',
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
    npCode: 'HEI',
    name: 'Health Emergency Initiative',
    email: 'info@hei.org.ng',
    country: 'Nigeria',
    website: 'https://hei.org.ng',
    logo: 'https://hei.org.ng/wp-content/uploads/2018/04/HEI-Logo.png',
    foundedYear: '2015',
    description:
      'We are a community of passionate, empathetic individuals dedicated to providing basic healthcare to the poorest segments of society through grassroots initiatives. We believe that every life is precious and should be protected at all costs, which is why our mantra is: ” that None should die.”',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://hei.org.ng/get-involved/make-a-donation',
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
    npCode: 'Onelife Initiative',
    name: 'Onelife Initiative',
    email: 'contact@onelifeinitiative.org',
    country: 'Nigeria',
    website: 'https://onelifeinitiative.org',
    logo: 'https://onelifeinitiative.org/wp-content/uploads/2023/09/Logo_pngWebbb.png',
    foundedYear: '2014',
    description:
      'Onelife Initiative is a registered youth serving non-governmental, non-profit organisation/charity in Nigeria with special consultative status with the United Nations Economic and Social Council (ECOSOC). We work in West Africa to improve the well being of young people by providing safe spaces, skills, linkages and vocational trainings including information and resources to enable them make informed decisions.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'http://onelifeinitiative.org/donate-to-support',
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
    npCode: 'SCFN',
    name: 'Sickle Cell Foundation Nigeria',
    email: 'info@sicklecellfoundation.com',
    country: 'Nigeria',
    website: 'https://www.sicklecellfoundation.com',
    logo: 'https://www.sicklecellfoundation.com/frontend/images/logo5.png',
    foundedYear: '1994',
    description:
      'We believe every person living with sickle cell disorder deserves a chance to live a long, pain-free, productive, and fulfilling life! The Sickle Cell Foundation Nigeria (SCFN) is dedicated to the fight against sickle cell disorder.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://www.sicklecellfoundation.com/donation',
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
    npCode: 'LEAP Africa',
    name: 'LEAP Africa',
    email: 'info@leapafrica.org',
    country: 'Nigeria',
    website: 'https://leapafrica.org',
    logo: 'https://leapafrica.org/wp-content/uploads/2023/12/LEAP-Africa-Official-Logo-1.png',
    foundedYear: '2002',
    description:
      'LEAP Africa is a youth-focused leadership development organization committed to raising leaders who will transform Africa; through interventions for young people, that bridges the gap in five areas: Education, Entrepreneurship, Employability, Active Citizenship, and Health and Wellbeing.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://dashboard.flutterwave.com/donate/0dyzwilyoxog',
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
    npCode: 'Africa Agility',
    name: 'Africa Agility',
    email: 'info@africaagility.org',
    country: 'Nigeria',
    website: 'https://africaagility.org',
    logo: 'https://shorturl.at/ru8fH',
    foundedYear: '2020',
    description:
      "Africa Agility is a non-profit SOCIAL IMPACT Organization. We are SUPPORTING the expansion of Africa's digital economy, by creating a more diversified tech and Agile workplace and ADVOCATING for those that have been marginalized through stereotyping.",
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://givebutter.com/c/AfricaAgilityFoundation',
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
    npCode: 'WeTech',
    name: 'WeTech',
    email: 'we@wetechng.com',
    country: 'Nigeria',
    website: 'https://www.wetechng.com',
    logo: 'https://shorturl.at/lXPJE',
    foundedYear: '2018',
    description:
      'At Wetech, we are committed to breaking down barriers and providing access to opportunities for women in the tech industry. Our conferences brings together inspiring female leaders and we offer mentorship, professional development resources, and access to hiring opportunities to accelerate careers.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://www.wetechng.com/donate',
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
    npCode: 'NexaScale',
    name: 'NexaScale',
    email: 'info@nexascale.org',
    country: 'Nigeria',
    website: 'https://nexascale.org',
    logo: 'https://nexascale.org/img/logo-black.24eb56ae.png',
    foundedYear: '2023',
    description:
      'Nexascale is a social enterprise committed to fostering the growth and development of the next generation of tech professionals. We believe that by providing resources and opportunities for learning and skill building, we can help individuals achieve their full potential and contribute to the growth of the tech industry. In addition to providing training and educational resources such as workshops, webinars, and online courses, we aim to create a supportive community where members can connect, collaborate, and grow together.',
    isVerified: true,
    verifications: [
      {
        date: new Date('2025-01-21'),
        verifier: '@oreoluwa212',
      },
    ],
    paymentMethods: [
      {
        type: 'donation-link',
        paymentID: 'https://nexascale.org/donate',
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

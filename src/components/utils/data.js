import cyborg from "../../Assets/cyborg.png";
import coding from "../../Assets/coding.png";
import setting from "../../Assets/setting.png";
import virtualAssistant from "../../Assets/VirtualAssistant.jpg";
import frontEnd from "../../Assets/FrontEnd.jpg";
import backEnd from "../../Assets/BackEnd.jpg";
import startup from "../../Assets/startup.png";
import business from "../../Assets/Business.png";
import enterprise from "../../Assets/enterprise.png";
import bckend from "../../Assets/bckend.jpg";
import fntend from "../../Assets/about bg.jpg";
import virtAsst from "../../Assets/virtAssist.jpg";
import bryan from "../../Assets/akoLang2.png";
import abby from "../../Assets/yunis.png";
import macky from "../../Assets/Macky.png";

export const meetTheTeam = [
  {
    name: "Bryan Mark",
    narrative: "I'm a full-stack developer",
    image: bryan,
    link: "https://fast-harbor-74924.herokuapp.com/",
  },
  {
    name: "Abby Eunice",
    narrative: "I'm a full-stack developer",
    image: abby,
    link: "https://eunice-webpage.herokuapp.com/",
  },
  {
    name: "Mackinley",
    narrative: "I'm a full-stack developer",
    image: macky,
    link: "https://dry-reaches-99921.herokuapp.com/",
  },
];

export const servicesArticle = [
  {
    image: virtAsst,
    header: "Virtual Assistance",
    desc: "A virtual assistant is someone who works from a remote location to provide administrative services to clients. Virtual assistants are typically independent, self-employed contractors, though you can also work with a virtual assistant agency. One of the primary benefits of hiring a virtual assistant is that small businesses can pick and choose which services they require. This level of adaptability can save business owners thousands of dollars each year while also allowing them to expand their contract as their company grows and requires more services.",
    sub: "Activities that the Virtual Assistant will carry out:",
    tasks: [
      " Manage your Business Social Media Account",
      "Manage your Business Website",
      ` Provide for your online customer's needs.`,
      ` Take charge of your product.`,
    ],
  },
  {
    image: fntend,
    header: "Front-end Development Assistance",
    desc: "Front-end web development, also known as client-side development, is the practice of creating HTML, CSS, and JavaScript for a website or Web Application so that a user can directly see and interact with them. The difficulty with front end development is that the tools and techniques used to create the front end of a website change all the time, so the developer must always be aware of how the field is evolving. A front end web developer is also responsible for ensuring that there are no errors or bugs on the front end, as well as that the design appears as it should across various platforms and browsers. All of these tasks are critical for a positive user experience.",
    sub: "Activities that the Front - End Developer will carry out:",
    tasks: [
      "Improving the user experience.",
      "Bringing concepts to life with HTML, JavaScript, and CSS.",
      "Creating and updating the user interface.",
      "Designing and implementing mobile websites",
      "Developing tools that improve site interaction regardless of browser.",
      "Managing software workflow.",
    ],
  },
  {
    image: bckend,
    header: "Back-End Development Assistance",
    desc: "A back-end web developer is in charge of server-side web application logic and integrating the work done by front-end developers. Back-end developers typically create the web services and APIs that front-end developers and mobile application developers rely on.",
    sub: "Activities that the Back - End Developer will carry out:",
    tasks: [
      "Integration of user-facing elements created by front-end developers with server-side logic",
      "Creating reusable code and libraries to be used in the future",
      "Security and data protection implementation",
      "Application optimization for maximum speed and scalability",
      "Data storage solution design and implementation",
    ],
  },
];

export const cardData = [
  {
    motto: "What we do",
    description: [
      "Building a healthy foundation for your business",
      ` Managing and growing your path by upgrading your website that's accessible by many customers`,
    ],
    logo: coding,
  },
  {
    motto: "Why we do",
    description: [
      `As a Phenomenal Innovator we will make sure help your business
     have name and be seen by many people and become your future
     customers`,
      `  As a Phenomenal Innovator we want your dreams to come true`,
    ],
    logo: setting,
  },
  {
    motto: "Who we are",
    description: [
      `  The astounding developer company that will handle your website
    to make sure it will be accessible and up to date`,
      `The company make sure to satisfy you and hired an excellent
    developer that will handle your website`,
    ],
    logo: cyborg,
  },
];

export const servicesData = [
  {
    title: "Virtual Assistance",
    desc: "Hire our top notch virtual assistant to perform various administrative tasks, including answering emails, scheduling meetings and making travel arrangements.",
    img: virtualAssistant,
  },
  {
    title: "Front-end Development Assistance",
    desc: "Our front-end developers offers wide range of client-side  programming  language including HTML , CSS, and JavaScript, and React JS . Design your business the way you want it to be.",
    img: frontEnd,
  },
  {
    title: "Back-End Development Assistance",
    desc: " We create, code, and improve the server, server-side applications, and databases that, when combined with front-end codes, help create a functional, seamless experience for the end-user.",
    img: backEnd,
  },
];

export const pricing = [
  {
    img: startup,
    title: "Startup",
    package: [
      "1 expert of your own choosing.",
      "24/7 support.",
      "30-Day Money-back guarantee.(T&C Applied)",
    ],
    price: "$1,500 / monthly",
    btnTxt: "Choose Plan",
  },
  {
    img: business,
    title: "Business",
    package: [
      "6 expert of your own choosing.",
      "24/7 support.",
      "30-Day Money-back guarantee.(T&C Applied)",
    ],
    price: "$5,500 / monthly",
    btnTxt: "Choose Plan",
  },
  {
    img: enterprise,
    title: "Enterprise",
    package: [
      "9 expert of your own choosing.",
      "24/7 support.",
      "30-Day Money-back guarantee.(T&C Applied)",
    ],
    price: "$9,500 / monthly",
    btnTxt: "Choose Plan",
  },
];

const talents = [
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Miss",
      first: "Amalie",
      last: "Christensen",
    },
    location: {
      street: {
        number: 4739,
        name: "Kildevænget",
      },
      city: "Nørrebro",
      state: "Danmark",
      country: "Denmark",
      postcode: 30205,
      coordinates: {
        latitude: "-29.3126",
        longitude: "102.4169",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "amalie.christensen@example.com",
    login: {
      uuid: "013a7690-331c-468b-b5bd-5680889d9a52",
      username: "ticklishfrog487",
      password: "pilgrim",
      salt: "leXyHRBv",
      md5: "28e10decf491054b9d7008886a85934e",
      sha1: "f09a73723092c750f3a29cce618cb802a289a877",
      sha256:
        "675617f651f69d86d643f0e74ae03af2f6f9b77cee98e07dda07b2feb823adf0",
    },
    dob: {
      date: "1974-01-09T08:04:31.141Z",
      age: 48,
    },
    registered: {
      date: "2003-01-28T11:01:29.109Z",
      age: 19,
    },
    phone: "55866312",
    cell: "05418770",
    id: {
      name: "CPR",
      value: "090174-5934",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
    },
    nat: "DK",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Mrs",
      first: "Alberte",
      last: "Rasmussen",
    },
    location: {
      street: {
        number: 8274,
        name: "Bogfinkevej",
      },
      city: "Brondby",
      state: "Sjælland",
      country: "Denmark",
      postcode: 80866,
      coordinates: {
        latitude: "-37.2288",
        longitude: "-161.4193",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "alberte.rasmussen@example.com",
    login: {
      uuid: "971ebc09-e575-480d-abd1-2cc9bcb44fe9",
      username: "tinyfish525",
      password: "minime",
      salt: "LRWUpq74",
      md5: "0b6f7dc3e9a8c71a22b2946b52e6c5ea",
      sha1: "229237d10e4b7c294b7f5081121b0f5301d7f9f9",
      sha256:
        "62e1fc21d0f7d613e9c6f69f7e8a0afa467c2def9bd591b28be96c72bb76490e",
    },
    dob: {
      date: "1990-10-19T05:28:24.532Z",
      age: 32,
    },
    registered: {
      date: "2010-03-11T06:03:34.457Z",
      age: 12,
    },
    phone: "29796005",
    cell: "89733011",
    id: {
      name: "CPR",
      value: "191090-0393",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
    nat: "DK",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Emil",
      last: "Skevik",
    },
    location: {
      street: {
        number: 3361,
        name: "Utsikten",
      },
      city: "Åsgrenda",
      state: "Rogaland",
      country: "Norway",
      postcode: "5770",
      coordinates: {
        latitude: "72.2890",
        longitude: "-70.4256",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "emil.skevik@example.com",
    login: {
      uuid: "7d743ecf-a108-4ceb-a512-206f5c24c25e",
      username: "bigmouse303",
      password: "elwood",
      salt: "eBo5lMF7",
      md5: "6b1f8b924f7855452f5315e4d3b873ae",
      sha1: "1c853613c98c658025bf5332f440b39bad1b238a",
      sha256:
        "a1455ec97cfa1db7f885ed7a05400abcb8adc649b4355e530cf64afead5e28ea",
    },
    dob: {
      date: "1979-11-01T03:31:57.285Z",
      age: 43,
    },
    registered: {
      date: "2014-08-12T20:52:20.282Z",
      age: 8,
    },
    phone: "53522619",
    cell: "93920593",
    id: {
      name: "FN",
      value: "01117912783",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/86.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
    },
    nat: "NO",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Ueli",
      last: "Guerin",
    },
    location: {
      street: {
        number: 8635,
        name: "Rue de la Gare",
      },
      city: "Champéry",
      state: "Obwalden",
      country: "Switzerland",
      postcode: 5547,
      coordinates: {
        latitude: "89.7769",
        longitude: "53.6035",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "ueli.guerin@example.com",
    login: {
      uuid: "2163e298-f51a-43ab-9759-3492fe6f409f",
      username: "brownwolf359",
      password: "mybaby",
      salt: "TQCA2kGk",
      md5: "3ade1d5865e70bf69538e9f427634a74",
      sha1: "004e83d35e82fb3eb26abba150aed5a6c80e5b3a",
      sha256:
        "d97ac1e18bc567fc02730bc172b3ee965bdc19172d45bbd15955a8396b39c979",
    },
    dob: {
      date: "1955-03-24T23:45:12.616Z",
      age: 67,
    },
    registered: {
      date: "2013-12-31T02:17:40.273Z",
      age: 9,
    },
    phone: "077 589 53 83",
    cell: "075 797 37 89",
    id: {
      name: "AVS",
      value: "756.6710.7020.62",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/97.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/97.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/97.jpg",
    },
    nat: "CH",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Sofia",
      last: "Garcia",
    },
    location: {
      street: {
        number: 1746,
        name: "Calle de La Luna",
      },
      city: "Almería",
      state: "Ceuta",
      country: "Spain",
      postcode: 64443,
      coordinates: {
        latitude: "-29.1140",
        longitude: "87.8314",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "sofia.garcia@example.com",
    login: {
      uuid: "934f6cda-28bb-4a76-9282-a3f43af879ef",
      username: "yellowfrog320",
      password: "1211",
      salt: "vPswKcaO",
      md5: "fca0d31badf920ef67062cbebe7f9155",
      sha1: "e8bb21752f8151711fcf360abc946d2f9118fcaf",
      sha256:
        "43cdaccf4fc20cc93b49f0f50fe6dfc41349ceab53db5571dcdd76ed75f8f1f3",
    },
    dob: {
      date: "1976-05-12T09:57:09.886Z",
      age: 46,
    },
    registered: {
      date: "2006-03-07T12:56:07.664Z",
      age: 16,
    },
    phone: "981-148-662",
    cell: "615-795-312",
    id: {
      name: "DNI",
      value: "97586402-M",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/52.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg",
    },
    nat: "ES",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Louis",
      last: "Oliver",
    },
    location: {
      street: {
        number: 7912,
        name: "South Street",
      },
      city: "Dungarvan",
      state: "Fingal",
      country: "Ireland",
      postcode: 40769,
      coordinates: {
        latitude: "5.7027",
        longitude: "-48.1167",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "louis.oliver@example.com",
    login: {
      uuid: "d40cfc4b-dfab-420b-840a-459e4b928179",
      username: "yellowfish458",
      password: "nuclear",
      salt: "6KyeUh1H",
      md5: "d0df295cfa1ececc0a2a8f70868e11a9",
      sha1: "f3881baf7875901740fee256350158461f8e0a41",
      sha256:
        "014a0f246825fb252caa3da1db9d66c6a72d452a25f8a6711dee6ca45a42976e",
    },
    dob: {
      date: "1961-02-06T21:17:17.062Z",
      age: 61,
    },
    registered: {
      date: "2004-06-22T16:27:33.126Z",
      age: 18,
    },
    phone: "011-322-8187",
    cell: "081-096-1792",
    id: {
      name: "PPS",
      value: "9441696T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
    },
    nat: "IE",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Mrs",
      first: "Victoria",
      last: "Hansen",
    },
    location: {
      street: {
        number: 440,
        name: "South Street",
      },
      city: "Bristol",
      state: "Staffordshire",
      country: "United Kingdom",
      postcode: "K8E 8QP",
      coordinates: {
        latitude: "-27.7809",
        longitude: "60.3418",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "victoria.hansen@example.com",
    login: {
      uuid: "45900a0f-5393-48d1-a7eb-9329cf8514fc",
      username: "yellowostrich908",
      password: "lesbian",
      salt: "QDXmhKGZ",
      md5: "13b5580ac75e192bb12810a5e07a15ae",
      sha1: "ec6470206605dcdf3ec57e83e74a094a1abe4c08",
      sha256:
        "d831abc4c167b7aaaff41b23c4da596f2d4eab441d103d36d3711324201f7615",
    },
    dob: {
      date: "1974-06-25T10:19:39.605Z",
      age: 48,
    },
    registered: {
      date: "2014-10-08T21:24:12.966Z",
      age: 8,
    },
    phone: "017683 42673",
    cell: "0765-014-510",
    id: {
      name: "NINO",
      value: "CP 37 44 44 J",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "GB",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Nela",
      last: "Hjelmeland",
    },
    location: {
      street: {
        number: 4326,
        name: "Skigardveien",
      },
      city: "Arna",
      state: "Hordaland",
      country: "Norway",
      postcode: "6810",
      coordinates: {
        latitude: "12.2178",
        longitude: "138.5111",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "nela.hjelmeland@example.com",
    login: {
      uuid: "a7037a3a-a2cb-4545-a961-b1d8af4642c1",
      username: "lazylion489",
      password: "chemical",
      salt: "FxiJNRc7",
      md5: "025867e2d11455018090201f81964227",
      sha1: "350113e5ca8d20126f554575ffe9018c20c489b0",
      sha256:
        "b6c1bc58572e641aaed751b033257be991918c39e58774563c02f0ea451989fe",
    },
    dob: {
      date: "1954-11-19T12:02:26.944Z",
      age: 68,
    },
    registered: {
      date: "2015-09-30T11:47:55.839Z",
      age: 7,
    },
    phone: "33803712",
    cell: "42919867",
    id: {
      name: "FN",
      value: "19115401001",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    },
    nat: "NO",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "female",
    name: {
      title: "Miss",
      first: "Wanda",
      last: "Turner",
    },
    location: {
      street: {
        number: 8212,
        name: "Shady Ln Dr",
      },
      city: "Albany",
      state: "Arkansas",
      country: "United States",
      postcode: 79603,
      coordinates: {
        latitude: "-20.9569",
        longitude: "-79.8798",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "wanda.turner@example.com",
    login: {
      uuid: "3d2eb1e9-1bf3-4e77-aafa-8af5820b2d0b",
      username: "redzebra530",
      password: "nicola",
      salt: "8DGz0qVP",
      md5: "5ce8087155f28f4f3b8a9dc1df226c92",
      sha1: "cad33312e872678fe831e98e33b84b1776419a47",
      sha256:
        "bb3ac4c9a5ff2a8287bc5a017968d4c154b3fbd8d4ff7322d277395e7664db3f",
    },
    dob: {
      date: "1998-02-07T15:55:25.331Z",
      age: 24,
    },
    registered: {
      date: "2012-11-22T17:05:56.368Z",
      age: 10,
    },
    phone: "(863)-351-4341",
    cell: "(074)-636-0410",
    id: {
      name: "SSN",
      value: "680-89-5871",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
    },
    nat: "US",
  },
  {
    status: "Verified",
    field: "Virtual Assistant",
    services: {
      emaimgmt: "Email Management",
      fba: "Amazon FBA",
      appt: "Appointment Setting",
      ecom: "E-commerce management",
      smd: "Social Media Management",
      goog: "Google Analytics Interpreter",
      cop: "Copy Writing",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Aiden",
      last: "Ouellet",
    },
    location: {
      street: {
        number: 965,
        name: "Charles St",
      },
      city: "Vanier",
      state: "Ontario",
      country: "Canada",
      postcode: "S1T 1G4",
      coordinates: {
        latitude: "-5.3813",
        longitude: "104.6932",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "aiden.ouellet@example.com",
    login: {
      uuid: "3198d8fa-e8b2-47c9-83e8-718e1649d433",
      username: "biggoose299",
      password: "hammond",
      salt: "oQjpiCoA",
      md5: "ff140c273818f2be5db4a5095dc5500a",
      sha1: "99f82a02ca5a1f5b16c81fb0538a33c4a49b6d9d",
      sha256:
        "acdbe8601b2197335b612cb4ed547b9defa0f2c0a5b64653b0d709e4374d3823",
    },
    dob: {
      date: "1984-08-15T19:27:45.780Z",
      age: 38,
    },
    registered: {
      date: "2006-09-09T01:07:02.378Z",
      age: 16,
    },
    phone: "709-772-9534",
    cell: "447-526-7643",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
    },
    nat: "CA",
  },

  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Aronas",
      last: "Stenvik",
    },
    location: {
      street: {
        number: 2887,
        name: "Samvirkeveien",
      },
      city: "Røros",
      state: "Bergen",
      country: "Norway",
      postcode: "1820",
      coordinates: {
        latitude: "52.5292",
        longitude: "-93.0826",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "aronas.stenvik@example.com",
    login: {
      uuid: "1c34ba19-a137-4eaf-a7d2-095162a48427",
      username: "ticklishcat109",
      password: "intrepid",
      salt: "NfmB3O7l",
      md5: "57e0c94ed7df9f7ce16d3c3cda7c6031",
      sha1: "feb3d284228573da649fbb0450a62e4be22477ed",
      sha256:
        "2ef0081e796e2bc15fdb348c9580cd2500e2a6692aef925e9ee4aa9cbed5fdbc",
    },
    dob: {
      date: "1975-06-24T15:19:59.610Z",
      age: 47,
    },
    registered: {
      date: "2008-03-15T21:38:59.930Z",
      age: 14,
    },
    phone: "51625214",
    cell: "40412851",
    id: {
      name: "FN",
      value: "24067546942",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    },
    nat: "NO",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Silke",
      last: "Hansen",
    },
    location: {
      street: {
        number: 3337,
        name: "Østerled",
      },
      city: "Nr Åby",
      state: "Hovedstaden",
      country: "Denmark",
      postcode: 97344,
      coordinates: {
        latitude: "-64.4496",
        longitude: "-177.2061",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "silke.hansen@example.com",
    login: {
      uuid: "723d91a8-035f-4e2e-95f8-4f700e45f1ed",
      username: "ticklishduck359",
      password: "trance",
      salt: "Bbb4ru7f",
      md5: "17673dae8120ad761fd0fb0feb065a7b",
      sha1: "c2d4b5817864d1ceb02a91e6aa2b18f019c1e6f5",
      sha256:
        "9e9df058ada0eb0de74576e43ba4e48f7693d8d08e37312250e0add97aef0a01",
    },
    dob: {
      date: "1962-07-28T08:08:03.406Z",
      age: 60,
    },
    registered: {
      date: "2010-08-28T10:27:31.349Z",
      age: 12,
    },
    phone: "03488463",
    cell: "56766732",
    id: {
      name: "CPR",
      value: "280762-7804",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    },
    nat: "DK",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Callum",
      last: "Wagner",
    },
    location: {
      street: {
        number: 3351,
        name: "Stanley Road",
      },
      city: "Derby",
      state: "Wiltshire",
      country: "United Kingdom",
      postcode: "U92 8JY",
      coordinates: {
        latitude: "-53.4442",
        longitude: "-76.2332",
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic",
      },
    },
    email: "callum.wagner@example.com",
    login: {
      uuid: "575056ed-6969-4aba-ac63-cd07802e65c4",
      username: "organicwolf819",
      password: "intercourse",
      salt: "Ezj7LRcR",
      md5: "2e34b908de0cf0a38b4e6610a8bfae57",
      sha1: "fbd06b3bbc7e0f84e4e7c4e115f6a75ffbe897f7",
      sha256:
        "3ab607a4a27c564cb0895f46c533582005e3a99eadfb3ecc901bcfa7b36f912e",
    },
    dob: {
      date: "1945-10-25T13:49:11.671Z",
      age: 77,
    },
    registered: {
      date: "2018-04-25T18:33:00.913Z",
      age: 4,
    },
    phone: "015394 93532",
    cell: "0706-123-652",
    id: {
      name: "NINO",
      value: "CS 18 86 67 X",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
    nat: "GB",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Valesca",
      last: "Duits",
    },
    location: {
      street: {
        number: 7235,
        name: "Koningshof",
      },
      city: "Nes gem Dongeradeel",
      state: "Noord-Brabant",
      country: "Netherlands",
      postcode: 29082,
      coordinates: {
        latitude: "86.8674",
        longitude: "-10.9026",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "valesca.duits@example.com",
    login: {
      uuid: "762f9b0b-79fc-40e2-979a-7553944e4fb7",
      username: "tinysnake895",
      password: "redeye",
      salt: "WfPEr4QZ",
      md5: "b3bdd0f526fc4824f319b2db4db1b60d",
      sha1: "95ed819dc36f619c5bf5ea0dd460b66b4475cc75",
      sha256:
        "2355c12152cb27c8cca5fb8cb2530c0246d4ca8924f6e088ecc58282c1b1726c",
    },
    dob: {
      date: "1993-09-27T19:13:54.104Z",
      age: 29,
    },
    registered: {
      date: "2008-02-24T02:30:24.853Z",
      age: 14,
    },
    phone: "(880)-757-0584",
    cell: "(816)-042-1458",
    id: {
      name: "BSN",
      value: "12027096",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    },
    nat: "NL",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Shivani",
      last: "Van Meegen",
    },
    location: {
      street: {
        number: 9458,
        name: "Het Rosbach",
      },
      city: "Allingawier",
      state: "Overijssel",
      country: "Netherlands",
      postcode: 66976,
      coordinates: {
        latitude: "11.3620",
        longitude: "-100.3159",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "shivani.vanmeegen@example.com",
    login: {
      uuid: "5939099d-2c8a-4fcc-96d1-5ce409960f59",
      username: "greenpanda442",
      password: "armstron",
      salt: "vVhuHtUV",
      md5: "c3342a4097c7ecc0c433a79552674d25",
      sha1: "2f3e428259f34375feff9cd310f9b54a7994d5b8",
      sha256:
        "b85d926c8b107363e1f537d2db5fb9a30a7b892d59eadbd5788e5995c24d4dd2",
    },
    dob: {
      date: "1955-12-05T04:35:47.252Z",
      age: 67,
    },
    registered: {
      date: "2009-10-06T20:20:37.889Z",
      age: 13,
    },
    phone: "(672)-655-0691",
    cell: "(572)-175-9269",
    id: {
      name: "BSN",
      value: "65653021",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/96.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/96.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    },
    nat: "NL",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Celestine",
      last: "David",
    },
    location: {
      street: {
        number: 8865,
        name: "Rue du Bon-Pasteur",
      },
      city: "Marseille",
      state: "Hautes-Pyrénées",
      country: "France",
      postcode: 86459,
      coordinates: {
        latitude: "-19.6108",
        longitude: "-103.1937",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "celestine.david@example.com",
    login: {
      uuid: "8c50dacc-f634-43c0-b8e8-7ad362119d4e",
      username: "lazygorilla805",
      password: "dogcat",
      salt: "AtGOKqLG",
      md5: "9a7b5433cd9a09c8d29bdf3897eeabe7",
      sha1: "d3f53ce3f7971d7a1ffd2f258701733cea140f5f",
      sha256:
        "cb31b435d9389a300f42fbd425a0c05a25075a59c58b81a1100a32e3057f1543",
    },
    dob: {
      date: "1961-07-01T09:44:47.795Z",
      age: 61,
    },
    registered: {
      date: "2011-09-26T04:13:15.501Z",
      age: 11,
    },
    phone: "03-65-47-36-36",
    cell: "06-48-47-74-51",
    id: {
      name: "INSEE",
      value: "2NNaN66148079 62",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
    },
    nat: "FR",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Einar",
      last: "Mannes",
    },
    location: {
      street: {
        number: 3495,
        name: "Askeveien",
      },
      city: "Ski",
      state: "Rogaland",
      country: "Norway",
      postcode: "7450",
      coordinates: {
        latitude: "-6.2494",
        longitude: "17.0177",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "einar.mannes@example.com",
    login: {
      uuid: "29819757-ed65-4f43-b06b-4d352151a136",
      username: "angrygorilla887",
      password: "cleaner",
      salt: "g7eMACP9",
      md5: "41e5fce5159dcc9ef2103c23f4ad9706",
      sha1: "2004df9d1b0526bdc810015d71cb329f6e105a92",
      sha256:
        "77c3b35d885a0b6549b38923d927bb4685b349e334a7944927a29ad5431881de",
    },
    dob: {
      date: "1982-06-02T21:28:15.907Z",
      age: 40,
    },
    registered: {
      date: "2018-11-01T22:18:30.212Z",
      age: 4,
    },
    phone: "21577322",
    cell: "49942578",
    id: {
      name: "FN",
      value: "02068225321",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    },
    nat: "NO",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Ronald",
      last: "Gautier",
    },
    location: {
      street: {
        number: 8839,
        name: "Montée du Chemin-Neuf",
      },
      city: "Biezwil",
      state: "Bern",
      country: "Switzerland",
      postcode: 1038,
      coordinates: {
        latitude: "31.3213",
        longitude: "24.0669",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "ronald.gautier@example.com",
    login: {
      uuid: "3f986994-5724-4cf3-86e0-98600caf0da3",
      username: "ticklishelephant120",
      password: "654321",
      salt: "RaUj20h7",
      md5: "d4d9828e3e76ad019bae740cf6ac8efc",
      sha1: "8692dbfd591cf64454f417ad95678b4e7d6f1ee7",
      sha256:
        "3a860e08a3192ca8e9848fa2cf48db0bb6d195d269cf472d70f03220e7612c92",
    },
    dob: {
      date: "1990-10-04T05:39:39.228Z",
      age: 32,
    },
    registered: {
      date: "2015-08-07T20:40:28.581Z",
      age: 7,
    },
    phone: "076 621 39 68",
    cell: "077 286 89 82",
    id: {
      name: "AVS",
      value: "756.6711.9783.12",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    },
    nat: "CH",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Miss",
      first: "Dirce",
      last: "Farias",
    },
    location: {
      street: {
        number: 3179,
        name: "Avenida da Legalidade",
      },
      city: "Barretos",
      state: "Paraná",
      country: "Brazil",
      postcode: 98663,
      coordinates: {
        latitude: "-16.0065",
        longitude: "60.5380",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "dirce.farias@example.com",
    login: {
      uuid: "1949c72b-1eea-49be-bbe3-cabf983c1a74",
      username: "yellowleopard883",
      password: "meghan",
      salt: "b83TKGx7",
      md5: "32883169ef92762d3c697d8aab782cdc",
      sha1: "c80c8ce2b641bbcb22735c046b1979be4b12305e",
      sha256:
        "ed6f0bc22dc4c35867394d43b17356b65c8817a07c76ef98ca9570eb2cdf5af5",
    },
    dob: {
      date: "1984-09-20T16:53:02.247Z",
      age: 38,
    },
    registered: {
      date: "2018-02-18T15:49:59.822Z",
      age: 4,
    },
    phone: "(28) 7156-1879",
    cell: "(56) 5185-3586",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
    },
    nat: "BR",
  },
  {
    status: "Verified",
    field: "Front-end Developer",
    services: {
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      tail: "Tail wind CSS",
      react: "React JS",
      vue: "Vue JS",
    },
    gender: "female",
    name: {
      title: "Mrs",
      first: "Brittany",
      last: "Wright",
    },
    location: {
      street: {
        number: 4260,
        name: "Springfield Road",
      },
      city: "Sallins",
      state: "Westmeath",
      country: "Ireland",
      postcode: 23481,
      coordinates: {
        latitude: "72.4527",
        longitude: "68.5172",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "brittany.wright@example.com",
    login: {
      uuid: "dbedee5c-dd0b-49b1-9e6c-29174378d240",
      username: "sadbird646",
      password: "garner",
      salt: "VyMsdfgX",
      md5: "b78884cea36bb5ff6735fbb8db6e09e0",
      sha1: "c5064d94cb4e1469f73d093be416e5d39b0bdef2",
      sha256:
        "d3558ade390a20367e8e4ce3d9ca191786d070c2e9230d34e7f3fcb879373e78",
    },
    dob: {
      date: "1992-11-03T21:04:33.170Z",
      age: 30,
    },
    registered: {
      date: "2012-04-10T06:16:59.830Z",
      age: 10,
    },
    phone: "041-184-9021",
    cell: "081-998-8860",
    id: {
      name: "PPS",
      value: "3138405T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
    },
    nat: "IE",
  },

  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Imran",
      last: "Aukland",
    },
    location: {
      street: {
        number: 9920,
        name: "Abbediengen terrasse",
      },
      city: "Fardalen",
      state: "Vest-Agder",
      country: "Norway",
      postcode: "4639",
      coordinates: {
        latitude: "51.1415",
        longitude: "-62.8001",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "imran.aukland@example.com",
    login: {
      uuid: "60ef02f8-0a27-41d3-9056-614934681322",
      username: "goldengorilla441",
      password: "1954",
      salt: "cPlDe1oY",
      md5: "518c9ebcefefac1fb44a0e42a1833539",
      sha1: "81e8fae4814937e671b175e87f4308cc55fc724b",
      sha256:
        "77497a7bdd6c14921320d0d8e8f40d359453741099cb8b2e6e61186f5183abaf",
    },
    dob: {
      date: "1948-01-26T10:20:29.290Z",
      age: 74,
    },
    registered: {
      date: "2007-07-12T02:54:42.936Z",
      age: 15,
    },
    phone: "32450211",
    cell: "48590541",
    id: {
      name: "FN",
      value: "26014846343",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
    nat: "NO",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "کوروش",
      last: "سهيلي راد",
    },
    location: {
      street: {
        number: 87,
        name: "موحد دانش",
      },
      city: "گلستان",
      state: "کرمانشاه",
      country: "Iran",
      postcode: 68163,
      coordinates: {
        latitude: "-71.3656",
        longitude: "130.1543",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "khwrwsh.shylyrd@example.com",
    login: {
      uuid: "8f0972e1-7a3f-45e0-afda-8b0d7d7d3003",
      username: "angrybird320",
      password: "chaos1",
      salt: "IRb1E2B2",
      md5: "5563009ad6f5b0bf9960db960ab1a0f6",
      sha1: "cd97f880974fb09a440e0499b41cc65f1ed98e80",
      sha256:
        "adbc5d0c9d04785a65010cce6f1017340a0361680db9a82daa587d709b51f724",
    },
    dob: {
      date: "1984-04-17T05:45:40.122Z",
      age: 38,
    },
    registered: {
      date: "2009-03-15T03:23:43.008Z",
      age: 13,
    },
    phone: "042-46117103",
    cell: "0992-752-0338",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    nat: "IR",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Martha",
      last: "Miles",
    },
    location: {
      street: {
        number: 6747,
        name: "Queen Street",
      },
      city: "Bristol",
      state: "Grampian",
      country: "United Kingdom",
      postcode: "J86 8UR",
      coordinates: {
        latitude: "41.9037",
        longitude: "-36.4594",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "martha.miles@example.com",
    login: {
      uuid: "a737922b-215f-43c8-8145-d98a9aea916a",
      username: "greenrabbit341",
      password: "elliott",
      salt: "42npphKL",
      md5: "e85b580bd25d320294e4f95615f9527c",
      sha1: "fff56b9d733b47e997f1d8d7f0166421a9f04901",
      sha256:
        "b65ccf438f869fbaff73660f49e388f67d5f1a8fe58ee793b2a4ecd5d6207185",
    },
    dob: {
      date: "1952-03-06T22:43:52.546Z",
      age: 70,
    },
    registered: {
      date: "2004-01-07T09:54:18.248Z",
      age: 18,
    },
    phone: "015396 89041",
    cell: "0736-940-425",
    id: {
      name: "NINO",
      value: "GP 26 58 37 A",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/95.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
    },
    nat: "GB",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Marcos",
      last: "Nguyen",
    },
    location: {
      street: {
        number: 957,
        name: "Rue des Écoles",
      },
      city: "Mettmenstetten",
      state: "Aargau",
      country: "Switzerland",
      postcode: 9256,
      coordinates: {
        latitude: "69.8957",
        longitude: "132.9905",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "marcos.nguyen@example.com",
    login: {
      uuid: "33429955-c421-4f89-bd86-5e614638669e",
      username: "bigkoala271",
      password: "sammy1",
      salt: "Txs0eZ6v",
      md5: "3d3a8064f5eeb41a16b9477edca4acd6",
      sha1: "6c67746e44f46aaa7610e29a9fec75ecab9a99b0",
      sha256:
        "1a165673d42ba5ef518529446542892cdc3bf16636051237627bfb60d93c9648",
    },
    dob: {
      date: "1946-07-01T10:16:25.948Z",
      age: 76,
    },
    registered: {
      date: "2008-12-27T17:29:16.390Z",
      age: 14,
    },
    phone: "075 655 36 51",
    cell: "075 439 55 73",
    id: {
      name: "AVS",
      value: "756.0999.5921.47",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
    },
    nat: "CH",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Valentin",
      last: "Medina",
    },
    location: {
      street: {
        number: 8434,
        name: "Calle de Alberto Aguilera",
      },
      city: "Gandía",
      state: "País Vasco",
      country: "Spain",
      postcode: 48370,
      coordinates: {
        latitude: "-29.2511",
        longitude: "178.7249",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "valentin.medina@example.com",
    login: {
      uuid: "3c92e628-e629-4631-8311-b612f5c36a17",
      username: "brownpanda963",
      password: "mulder",
      salt: "9sknUeBZ",
      md5: "d750445fd30dfd611750b4e9f446e04a",
      sha1: "5c334ce42b9082f4c6dac33313cfc19daf5446b7",
      sha256:
        "1c3a7c35234769d47d61328b735c5de910900c9c1f3269a6c9039ee3b9d92c81",
    },
    dob: {
      date: "1959-10-02T11:10:01.431Z",
      age: 63,
    },
    registered: {
      date: "2002-08-26T18:44:45.432Z",
      age: 20,
    },
    phone: "983-763-322",
    cell: "619-179-895",
    id: {
      name: "DNI",
      value: "33559389-E",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
    nat: "ES",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Kelly",
      last: "Gibson",
    },
    location: {
      street: {
        number: 833,
        name: "New Road",
      },
      city: "Derby",
      state: "Highlands and Islands",
      country: "United Kingdom",
      postcode: "O7N 2QL",
      coordinates: {
        latitude: "-77.4932",
        longitude: "-108.2782",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "kelly.gibson@example.com",
    login: {
      uuid: "4aacf161-8b55-43e4-abe8-158435a4c0c8",
      username: "sadfish274",
      password: "altima",
      salt: "TIBcmS7j",
      md5: "658df71095999c9bf1d985307c19d350",
      sha1: "d708c6c09a367e49008c1b77ab887f8e94994d64",
      sha256:
        "1d518987596f406948f8163efbb1a967a9f3a3dbee91d47fd80c6f290b168ff0",
    },
    dob: {
      date: "1971-01-12T22:49:51.346Z",
      age: 51,
    },
    registered: {
      date: "2017-03-22T12:33:22.193Z",
      age: 5,
    },
    phone: "015242 80118",
    cell: "0705-446-341",
    id: {
      name: "NINO",
      value: "KL 25 44 92 Y",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
    },
    nat: "GB",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "female",
    name: {
      title: "Mrs",
      first: "Sofia",
      last: "Koivisto",
    },
    location: {
      street: {
        number: 9167,
        name: "Esplanadi",
      },
      city: "Miehikkälä",
      state: "Central Ostrobothnia",
      country: "Finland",
      postcode: 38579,
      coordinates: {
        latitude: "-47.8509",
        longitude: "171.2945",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "sofia.koivisto@example.com",
    login: {
      uuid: "0fd05f26-e1ec-4b34-a4eb-418675bf6073",
      username: "whitekoala387",
      password: "baxter",
      salt: "GIcQ31GI",
      md5: "4af0dda91f6c3081e9dad24700b8b6b7",
      sha1: "350503f6fdea17c98b9614b6863bb2e96e608fcc",
      sha256:
        "60eec9815beb67e4855ad348376c865c46c196c8576f0768ef11deb74cecbace",
    },
    dob: {
      date: "1982-03-23T06:51:00.886Z",
      age: 40,
    },
    registered: {
      date: "2014-12-20T21:56:00.882Z",
      age: 8,
    },
    phone: "09-900-760",
    cell: "048-170-31-43",
    id: {
      name: "HETU",
      value: "NaNNA460undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/91.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg",
    },
    nat: "FI",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "female",
    name: {
      title: "Miss",
      first: "آوا",
      last: "نكو نظر",
    },
    location: {
      street: {
        number: 532,
        name: "کارگر",
      },
      city: "بندرعباس",
      state: "اردبیل",
      country: "Iran",
      postcode: 13534,
      coordinates: {
        latitude: "8.3320",
        longitude: "3.7958",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "aw.nkwnzr@example.com",
    login: {
      uuid: "de4996e6-c96d-4adc-987a-787561165098",
      username: "happybird678",
      password: "screwyou",
      salt: "xSD4uB9x",
      md5: "c9d490fa0a67d623b02a70cd92f615fc",
      sha1: "78ecbe92b5953ca6d085392db647560ffbe0fa8e",
      sha256:
        "472815e6b6caca6ab50a0eaec50ab392951e137125451c4f9e17e3ece1c7ba45",
    },
    dob: {
      date: "1961-01-03T01:22:57.047Z",
      age: 61,
    },
    registered: {
      date: "2016-01-01T23:20:55.559Z",
      age: 6,
    },
    phone: "088-46380927",
    cell: "0942-906-0505",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    },
    nat: "IR",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "male",
    name: {
      title: "Mr",
      first: "Brad",
      last: "Anderson",
    },
    location: {
      street: {
        number: 7032,
        name: "Manor Road",
      },
      city: "Ballinasloe",
      state: "Laois",
      country: "Ireland",
      postcode: 48327,
      coordinates: {
        latitude: "-19.6503",
        longitude: "108.6609",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "brad.anderson@example.com",
    login: {
      uuid: "e325393a-8d4b-4035-9b31-b804b64f1de5",
      username: "brownelephant541",
      password: "gemini",
      salt: "Es3xk1nn",
      md5: "56b255a6b1ab2bedfc90a757432fe04f",
      sha1: "0b6460c53e16d06ca8515b0afaf8f941d78ef167",
      sha256:
        "794b87ce3348509a8877f51c25955808dffe170e9e59295e30acfcf6cc57cb51",
    },
    dob: {
      date: "1953-07-26T05:50:55.678Z",
      age: 69,
    },
    registered: {
      date: "2003-01-26T18:07:14.906Z",
      age: 19,
    },
    phone: "031-089-8024",
    cell: "081-214-5327",
    id: {
      name: "PPS",
      value: "2551198T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
    nat: "IE",
  },
  {
    status: "Verified",
    field: "Back-end Developer",
    services: {
      node: "Node JS",
      lara: "Laravel",
      django: "Django",
      phyton: "Phyton",
      php: "PHP",
      mongo: "Mongo DB",
    },
    gender: "female",
    name: {
      title: "Ms",
      first: "Kimberly",
      last: "Bennett",
    },
    location: {
      street: {
        number: 8719,
        name: "King Street",
      },
      city: "Durham",
      state: "Lancashire",
      country: "United Kingdom",
      postcode: "YN5C 8ZR",
      coordinates: {
        latitude: "49.8751",
        longitude: "-135.6844",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "kimberly.bennett@example.com",
    login: {
      uuid: "63068e1a-9849-4920-a5e9-9c51fef8f327",
      username: "silverelephant781",
      password: "qian",
      salt: "3I8XE3z5",
      md5: "d39cea708d9f26a135f0481cba21d664",
      sha1: "9fa21f9ef121fdcca22c31263546618a0484a64a",
      sha256:
        "39230940199663e27679489899233ea879f5bc2ceed02fb2f99321440b9e1da9",
    },
    dob: {
      date: "1949-01-17T03:25:51.466Z",
      age: 73,
    },
    registered: {
      date: "2007-07-21T13:15:03.882Z",
      age: 15,
    },
    phone: "013873 17404",
    cell: "0705-609-766",
    id: {
      name: "NINO",
      value: "AE 15 89 10 R",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/77.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
    },
    nat: "GB",
  },
];
export default talents;

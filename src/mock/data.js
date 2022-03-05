import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robin Weitzman',
  lang: '',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Robin Weitzman',
  subtitle: "I'm a Front-End Software Developer",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'selfie2.png',
  paragraphOne:
    "Hi, I'm Robin Weitzman! I LOVE coding, I LOVE Javascript, and I LOVE frameworks! I LOVE my profession, I LOVE my family, I LOVE my dog, ....and I LOVE people.",
  paragraphTwo:
    'I am a retired chef, so I am bordeline obsessive, a boredline workaholic, and 100% a team player, all day, every day! I fully enjoy freelance work, 1099 contract, and full-time positions.',
  paragraphThree:
    "I am hard working, opinionated, passionate, creative, and loyal developer. Most of my recent pojects can't be shared on here, due to confidentiality, but they are on my resume. I'd love to chat with you about them! I simply cannot wait to meet you, because I am sure we will love the work we will do together. Now, let's go make some awesome software together!",
  resume: 'resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    resume: 'true',
    title: 'Resume',
    info: 'resume',
    info2: '',
    repo: 'https://github.com/rweitzman/react-next-ts-jest',
  },
  {
    id: nanoid(),
    video1: 'true',
    title: 'React/Next/Jest/Typescript Boiler Plate',
    info: 'I created this simple boiler plate for myself and others to use to start a project with React, Next.js, Jest for testing, and Typescript. Simple, yet effective',
    info2:
      'My role was to create the front-end in Vuetify, based on the wireframes the client supplied from Figma. Created with React.js/Gatsby/GraphQL',
    repo: 'https://github.com/rweitzman/react-next-ts-jest',
  },
  {
    id: nanoid(),
    video2: 'true',
    title: 'Simple React/Redux/Saga App',
    info: 'I created a simple React, Redux, and Saga app with data rendered from a fake API. Routes created with react-router-dom',
    repo: 'https://github.com/rweitzman/ReactReduxSaga',
  },
  {
    id: nanoid(),
    video3: 'true',
    title: 'Simple React/Redux App',
    info: 'I created a simple React and Redux app with data rendered from a fake API. Routes created with react-router-dom',
    repo: 'https://github.com/rweitzman/ReactRedux',
  },
  {
    id: nanoid(),
    video4: 'true',
    title: 'www.popmystic.com',
    info: 'Project was comissioned by a client and built in a two-partner duo. We built this in Vuetify on the AWS cloud for the backend.',
    info2:
      'My role was to create the front-end in Vuetify, based on the wireframes the client supplied from Figma. Created with React.js/Gatsby/GraphQL',
    url: 'https://www.popmystic.com/',
  },
  {
    id: nanoid(),
    video5: 'true',
    title: 'Robin Weitzman Porfolio v.1.0',
    info: 'I wrote this portfolio website completely from scratch with HTML/CSS/jQuery. It holds my earlier software engineering projects.',
    info2: '',
    url: '',
    repo: 'https://github.com/rweitzman/robin-portfolio.git',
  },
  {
    id: nanoid(),
    carousel: 'true',
    img: '',
    title: 'Club Soda - Dating App',
    info: 'I worked on a temporary basis, just after graduatin my bootcamp, to give a hand to a small team of friends working on debugging an exteranlly commissioned app for hopes of launching it on the various app stores.',
    info2:
      'I worked on various portions of the front-end in React-Native and some of the AWS cloud database portions, working in various databases, including using Elasticsearch and GraphQL.',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'robinweitzman3579@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/rlweitzman',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robinweitzman1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rweitzman',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

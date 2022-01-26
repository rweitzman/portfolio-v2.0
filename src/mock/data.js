import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robin Weitzman', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
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
    "Hi, I'm Robin Weitzman! I LOVE coding, I LOVE Javascript, and I LOVE frameworks! I LOVE my profession, I LOVE my family, I LOVE my dog, and I LOVE people.",
  paragraphTwo:
    'I am a retired chef, so I am bordeline obsessive, a boredline workaholic, and 100% a team player, all day, every day! I fully enjoy freelance work, 1099 contract, and full-time positions.',
  paragraphThree:
    "I am hard working, opinionated, passionate, creative, and loyal developer. I simply cannot wait to meet you, because I am sure I will love the work we will do together. Now, let's go make some awesome software together!",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: '',
  //   title: 'This Portfolio! - Robin Weitzman Porfolio v.2.0',
  //   info: 'I created this portfolio with Gatsby from a free template, but added a TON of custom components, functionality, files, styling, etc - it is FAR from the original template!',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/rweitzman/portfolio2022.git',
  // },
  {
    id: nanoid(),
    video1: 'true',
    title: 'www.popmystic.com',
    info: 'Project was comissioned by a client and built in a two-partner duo. We built this in Vuetify on the AWS cloud for the backend.',
    info2:
      'My role was to create the front-end in Vuetify, based on the wireframes the client supplied from Figma. Created with React.js/Gatsby/GraphQL',
    url: 'https://www.popmystic.com/',
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
  {
    id: nanoid(),
    video2: 'true',
    title: 'Robin Weitzman Porfolio v.1.0',
    info: 'I wrote this portfolio website completely from scratch with HTML/CSS/jQuery. It holds my earlier software engineering projects.',
    info2: '',
    url: 'https://www.youfoundrobin.com/',
    repo: 'https://github.com/rweitzman/robin-portfolio.git',
  },
  {
    id: nanoid(),
    video3: 'true',
    title: 'Aria Dog Food - Psuedo Retail Site',
    info: 'This is the final project of my bootcamp, a pseudo retail site, written with HTML/CSS and Node.js.',
    info2: 'It is quite amazing for me to look back on this to see how far I have come.',
    url: 'http://ariadogfood.herokuapp.com/',
    repo: 'https://github.com/rweitzman/Capstone',
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

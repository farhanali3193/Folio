import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Farhan Ali | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Farhan',
  subtitle: `I'm a self-taught Front-end Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'farhan-profile2.png',
  paragraphOne: `I'm a Front-end Developer experienced in JavaScript, TypeScript, React and React Native.`,
  paragraphTwo: `I made a career change from hospitality to computer programming to challenge myself on a technical level and ensure personal and professional growth. I am a self-taught programmer who is passionate about learning new technologies, building scalable software and creating effective solutions. Currently working on a React Native project, which is a social media platform for sharing memes.`,
  paragraphThree: `Feel free to contact me via email at any time.`,
  resume: `https://docs.google.com/document/d/1PUhHybmt3JdF_bHQO4rvuuKyLiPldJVRwcnX9jS-teM/edit?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rooney.png',
    title: 'Face Recognition App',
    info: `A full-stack web application built using the PERN Stack, this app allows you to detect faces in any image supplied. This was achieved using Clarifai's artificial intelligence API.`,
    info2: '',
    url: 'https://farhanali3193.github.io/faceCapture/',
    repo: 'https://github.com/farhanali3193/faceCapture', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Pokedex',
    info:
      'A responsive single page application with a real time search bar built using React. Integrated Pokedex API to display characteristics of pokemons.',
    info2: '',
    url: 'https://farhanali3193.github.io/Pokedex/',
    repo: 'https://github.com/farhanali3193/Pokedex', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'farhanali3193@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/farhanali3193/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/farhanali3193',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

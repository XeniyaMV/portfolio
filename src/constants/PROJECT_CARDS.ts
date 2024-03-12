import { ProjectCard } from '../types';
import graphQl from '../assets/graphiql-image.png';
import forms from '../assets/forms-image.png';
import virtualKeyboard from '../assets/virtual-keyboard-image.png';
import hpSearch from '../assets/hp-search-image.png';
import cssSelectors from '../assets/css-selectors-image.png';
import minesweeper from '../assets/minesweeper-image.png';
import shelter from '../assets/shelter-image.png';
import cssBayan from '../assets/cssBayan-image.png';

const PROJECT_CARDS: ProjectCard[] = [
  {
    image: graphQl,
    title: 'GraphiQL',
    techStack: [
      'NextJS',
      'TypeScript',
      'Sass',
      'ESLint',
      'Git',
      'Husky',
      'Prettier',
      'Figma',
      'Vite',
      'Vitest',
      'Firebase',
    ],
    description:
      'A GraphQL playground/IDE with additional features such as authentication, authorization, and the ability to work with any user-specified open GraphQL endpoint.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: forms,
    title: 'Forms',
    techStack: [
      'React JS',
      'React Router',
      'React Hook Form',
      'Redux Toolkit',
      'TypeScript',
      'Sass',
      'ESLint',
      'Git',
      'Husky',
      'Prettier',
      'Vite',
    ],
    description:
      'A responsive web application with two forms, each designed using distinct approaches—uncontrolled components and React Hook Form.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: hpSearch,
    title: 'Harry Potter Character Search',
    techStack: [
      'React JS',
      'React Router',
      'React Hook Form',
      'Redux Toolkit',
      'TypeScript',
      'Sass',
      'ESLint',
      'Git',
      'Husky',
      'Prettier',
      'Vite',
    ],
    description:
      'A well-designed page with two distinct sections — a search input and button in the top section, and a comprehensive display of search results in the bottom section.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: cssSelectors,
    title: 'CSS Selectors',
    techStack: ['TypeScript', 'Sass', 'ESLint', 'Git', 'Husky', 'Prettier', 'Webpack'],
    description:
      'An interactive educational game for learning css selectors. The game comprises multiple levels, each featuring an HTML layout example. Users are presented with highlighted elements through animations, and their task is to write CSS selectors that accurately target all the highlighted elements in the given layout.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: minesweeper,
    title: 'Minesweeper',
    techStack: ['JavaScript', 'Sass', 'Git', 'Webpack'],
    description:
      'The classic Minesweeper game built entirely in JavaScript, offering options to choose difficulty levels and set the number of mines. Players can immerse themselves in the game while a stopwatch tracks their progress. Upon completion, users can review their results, including the elapsed time and the number of steps taken.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: virtualKeyboard,
    title: 'Virtual Keyboard',
    techStack: ['JavaScript', 'CSS', 'Git', 'Webpack'],
    description:
      'A Virtual Keyboard component built in pure JavaScript featuring animated key buttons that can seamlessly switch between two language layouts: English and Russian. By clicking the buttons with a mouse on the virtual keyboard or pressing keys on a physical keyboard, users can input symbols directly into the text area positioned above the virtual keyboard on the page.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: shelter,
    title: 'Shelter',
    techStack: ['JavaScript', 'CSS', 'Git', 'Figma'],
    description: 'A two-page pixel-perfect adaptive interactive website.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
  {
    image: cssBayan,
    title: 'CSS Bayan',
    techStack: ['CSS', 'Git'],
    description: 'A responsive accordion implemented using only HTML5 and CSS.',
    linkToCode: '#',
    linkToDeploy: '#',
  },
];

export default PROJECT_CARDS;

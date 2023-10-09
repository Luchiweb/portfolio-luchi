import { Project } from "../interfaces/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sporting goods eCommerce",
    skills: "TypeScript, Webpack, Tailwind, Jest, Commercetools, Swiper",
    description:
      "Team project online sporting goods store based on Commercetools with the ability to register and login users, sorting, filtering and searching products, promo codes and shopping cart",
    images: {
      smallImage: "./projects/01-small.jpg",
      bigImage: "./projects/01-big.jpg",
    },
    gitHubLink: "https://github.com/akrutsko/eCommerce",
    videoLink: "https://www.youtube.com/watch?v=jyrqBoMWtx4",
  },
  {
    id: 2,
    title: "Shelter website",
    skills: "JavaScript, HTML, CSS",
    description:
      "A two-page adaptive website on pure HTML, CSS, and JavaScript without any third-party libraries. Made according to pixelperfect. The site implements slider and also pagination adjusting to the screen extension",
    images: {
      smallImage: "./projects/02-small.jpg",
      bigImage: "./projects/02-big.jpg",
    },
    demoLink:
      "https://rolling-scopes-school.github.io/luchiweb-JSFE2023Q1/shelter/index.html",
  },
  {
    id: 3,
    title: "Virtual keyboard",
    skills: "JavaScript, HTML, CSS",
    description:
      "Virtual keyboard web application built with HTML, CSS, and JavaScript with features like key highlighting, multi-language support, and animated keystrokes. It allows users to type on a virtual keyboard displayed on the screen. This can be especially useful for touch-screen devices or situations where a physical keyboard is not available.",
    images: {
      smallImage: "./projects/03-small.jpg",
      bigImage: "./projects/03-big.jpg",
    },
    gitHubLink: "https://github.com/Luchiweb/virtual-keyboard",
    demoLink: "https://luchiweb.github.io/virtual-keyboard/",
    videoLink: "https://www.youtube.com/watch?v=HdyHU6Edfe4",
  },
  {
    id: 4,
    title: "Birthday Reminder",
    skills: "React, Vite, TypeScript, Tailwind, React Hook Form",
    description:
      "Web application for tracking and managing the birthdays of your friends and family. You can add, edit and delete birthday information, add gift ideas and stay informed about upcoming birthdays.",
    images: {
      smallImage: "./projects/04-small.jpg",
      bigImage: "./projects/04-big.jpg",
    },
    gitHubLink: "https://github.com/Luchiweb/birthday-reminder",
    demoLink: "https://birthday-reminder-livid.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio landing",
    skills: "JavaScrypt, CSS, HTML",
    description:
      "Adaptive portfolio layout, made only with CSS, HTML and JavaScrypt. Semantic layout, BEM methodology, Grid and use of tables",
    images: {
      smallImage: "./projects/05-small.jpg",
      bigImage: "./projects/05-big.jpg",
    },
    gitHubLink: "https://github.com/Luchiweb/Portfolio",
    demoLink: "https://luchiweb.github.io/Portfolio/",
  },
  {
    id: 6,
    title: "Game minesweeper",
    skills: "JavaScript, CSS, Audio effects",
    description:
      "This project is a fully functional Minesweeper game developed with HTML, CSS, and JavaScript.  It includes sound effects for in-game events, difficulty levels, a high score table, game save functionality using localStorage, and dark/light themes for a customizable user experience.",
    images: {
      smallImage: "./projects/06-small.jpg",
      bigImage: "./projects/06-big.jpg",
    },
    demoLink:
      "https://rolling-scopes-school.github.io/luchiweb-JSFE2023Q1/minesweeper/",
  },
  {
    id: 7,
    title: "Async race",
    skills: "JavaScript, REST API, CSS",
    description:
      "A Single Page Application for managing a collection of radio-controlled cars, allowing users to create, update, and race their cars with dynamic animations. The application also tracke race winners and provide a seamless user experience.  A local server is needed to demonstrate the work, so I am attaching a link to a preview video",
    images: {
      smallImage: "./projects/07-small.jpg",
      bigImage: "./projects/07-big.jpg",
    },
    videoLink: "https://www.youtube.com/watch?v=yC5JsxyS5lI",
  },
  {
    id: 8,
    title: "CSS Selectors",
    skills: "TypeScript, Modules, Webpack, CSS",
    description:
      "A CSS Selector Trainer, inspired by CSS Diner's gameplay. It features various levels where users must write CSS selectors to target highlighted elements in layout examples. The project utilizes TypeScript, Modules, and Webpack to provide an interactive learning experience for users.",
    images: {
      smallImage: "./projects/08-small.jpg",
      bigImage: "./projects/08-big.jpg",
    },
    demoLink:
      "https://rolling-scopes-school.github.io/luchiweb-JSFE2023Q1/css-selectors/",
  },
  {
    id: 9,
    title: "Landing of music website",
    skills: "Tailwind, HTML, Flowbite",
    description:
      "Adaptive music selection website landing page created using tailwind css framework. The site has animations, paralax, slider, as well as support for different themes",
    images: {
      smallImage: "./projects/09-small.jpg",
      bigImage: "./projects/09-big.jpg",
    },
    gitHubLink: "https://github.com/Luchiweb/MusicVibe",
    demoLink: "https://luchiweb.github.io/MusicVibe/",
  },
  {
    id: 10,
    title: "Game Hungman",
    skills: "TypeScript, HTML, CSS",
    description:
      'The idea for this Hungman game was based on a chapter from Nick Morgan\'s book "JavaScrypt for Kids". In it, the author suggests writing a game using allert. I wanted to improve it and by adding UI and additional functionality this is what I came up with',
    images: {
      smallImage: "./projects/10-small.jpg",
      bigImage: "./projects/10-big.jpg",
    },
    gitHubLink: "https://github.com/Luchiweb/hungman",
    demoLink: "https://luchiweb.github.io/hungman/",
  },
];

import { nanoid } from "nanoid";
import { IProject } from "../models";

const projects: IProject[] = [
  {
    numberId: 1,
    title: "E-Pharmacy",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/hGPxetx.jpg",
      "https://i.imgur.com/V3wK8bt.jpg",
      "https://i.imgur.com/1iKKVeM.jpg",
      "https://i.imgur.com/FEEYkUt.jpg",
    ],
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Rest Api",
      "material UI",
      "Redux",
      "axios",
      "Webpack",
    ],
    description:
      "The project was created according to the layout Figma. The layout is fluid starting from 320px and adaptive starting from 375px. This is an individual project. Additional technologies used: react-router-dom, formik, yup, react-toastify, react-select, redux-persist. This application is for choosing medicines. You can buy or find the medicine you need online the pharmacy closest to you. ",
  },

  {
    numberId: 2,
    title: "PharmacyBackEnd",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/V3wK8bt.jpg",
      "https://i.imgur.com/hGPxetx.jpg",
      "https://i.imgur.com/1iKKVeM.jpg",
      "https://i.imgur.com/FEEYkUt.jpg",
    ],
    gitUrl: "https://github.com/ira089/PharmacyBackEnd",
    website: "https://github.com/ira089/PharmacyBackEnd",
    skills: ["JavaScript", "Node JS"],
    description:
      "This is backend for application E-PHARMACY. This is an individual project. Additional technologies used: jsonwebtoken, mongoose, morgan, express, bcryptjs, joi.",
  },

  {
    numberId: 3,
    title: "LearnForeignLanguage",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/0YjX0Se.jpg",
      "https://i.imgur.com/5PLHwMS.jpg",
      "https://i.imgur.com/CzMz0tN.jpg",
      "https://i.imgur.com/dWgN5Lq.png",
    ],
    gitUrl: "https://github.com/ira089/LearnForeignLanguage",
    website: "https://ira089.github.io/LearnForeignLanguage/",
    skills: ["JavaScript", "React", "HTML", "CSS", "Redux", "Webpack"],
    description:
      "The project was created according to the layout Figma. The layout is fluid. This is an individual project. Additional technologies used: firebase, react-hook-form, react-router-dom, yup, react-select, react-icons, react-toastify, redux-persist. This application allows you to choose a foreign language teacher to study online. ",
  },

  {
    numberId: 4,
    title: "Pet Love",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/omWftUv.jpg",
      "https://i.imgur.com/CNSVtCK.jpg",
      "https://i.imgur.com/LBzWQUd.jpg",
      "https://i.imgur.com/EwtbYCx.jpg",
    ],
    gitUrl: "https://github.com/ira089/PetLove",
    website: "https://ira089.github.io/PetLove/",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Rest Api",
      "material UI",
      "Redux",
      "axios",
      "Webpack",
    ],
    description:
      "The project was created according to the layout Figma. The layout is fluid starting from 320px and adaptive starting from 375px. This is an individual project. Additional technologies used: react-hook-form, react-router-dom, date-fns, formik, yup, react-select, react-toastify, redux-persist. This is an app about pets. You can record your pet's details, read about other people's pets, sort animals by popularity, price, location, animal type, or category. You can search simply by keyword. You can read news about animals or see partners' contacts. ",
  },
  {
    numberId: 5,
    title: "TaskPro",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/ZTFJfDP.jpg",
      "https://i.imgur.com/bdOORhk.jpg",
      "https://i.imgur.com/6wQrfQN.jpg",
      "https://i.imgur.com/CIEaE41.jpg",
    ],
    gitUrl: "https://github.com/Oliko136/code-jedi-front",
    website: "https://oliko136.github.io/code-jedi-front/welcome",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Rest Api",
      "Redux",
      "axios",
      "Webpack",
    ],
    description:
      "The project was created according to the layout Figma. The layout is fluid starting from 320px and adaptive starting from 375px. This is a team project. Additional technologies used: styled-components, react-hook-form, react-router-dom, yup, react-icons, react-toastify, redux-persist. A task management app, an alternative to Trello. My contribution includes frontend development (logic, markup, styles) ofthe following parts of the application: user registration and login, userprofile editing, task filtering, moving tasks to different sections, modalwindows for adding and editing sections, and displaying tasks on the task board.",
  },

  {
    numberId: 6,
    title: "Food Boutique",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/A1m9eaY.jpg",
      "https://i.imgur.com/QuGrN7h.jpg",
      "https://i.imgur.com/uiYj5bi.jpg",
      "https://i.imgur.com/3hinoDe.jpg",
    ],
    gitUrl: "https://github.com/nahirniy/Code-Storm",
    website: "https://nahirniy.github.io/Code-Storm/",
    skills: ["JavaScript", "HTML", "CSS"],
    description:
      "The project was created according to the layout Figma. The layout is adaptive. This is a team project. Additional technologies used: Local Storage. This application is an online grocery store. I responsible forimplementing a dynamic Cart feature utilizing localStorage for data persistence",
  },

  {
    numberId: 7,
    title: "MODERN AND MINIMALIST FURNITURE",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/cjzIOoY.jpg",
      "https://i.imgur.com/bN59jYR.jpg",
      "https://i.imgur.com/ifmAA54.jpg",
      "https://i.imgur.com/Ljkbl9Q.jpg",
    ],
    gitUrl: "https://github.com/liubapohudina/project-team9",
    website: "https://liubapohudina.github.io/project-team9/",
    skills: ["HTML", "CSS"],
    description:
      "The project was created according to the layout Figma. The layout is adaptive. This is a team project. This application of a minimalist furniture website. I made a footer with links to a Google map and social networks ",
  },

  {
    numberId: 8,
    title: "My Portfolio",
    id: nanoid(),
    photos: ["https://i.imgur.com/IwtVJww.jpg"],
    gitUrl: "https://github.com/ira089/My-portfolio",
    website: "https://ira089.github.io/My-portfolio/",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "SCSS",
      "TypeScript",
      "Vite",
      "Redux",
    ],
    description:
      "This website provides a simple and convenient way to get an idea of my technical skills. The website was created entirely independently. Additional technologies used: grid, react-icons. The layout is adaptive.",
  },
];

export default projects;

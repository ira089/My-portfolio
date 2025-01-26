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
      "This individual project was developed based on a design created in Figma. The layout features a fluid design starting at 320px and becomes fully adaptive from 375px onward. The application is designed to help users select medicines by locating the closest pharmacy online. Additional libraries used: react-router-dom, Formik, Yup, react-toastify, react-select, redux-persist.",
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
      "This individual project was developed based on a design created in Figma. The layout is fluid. The application allows you to choose a foreign language teacher to study online. Additional libraries used: firebase, react-hook-form, react-router-dom, yup, react-select, react-icons, react-toastify, redux-persist.",
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
      "This individual project was developed based on a design created in Figma. The layout features a fluid design starting at 320px and becomes fully adaptive from 375px onward. The application is dedicated to pet enthusiasts, allowing users to record and manage their pets’ details, explore other users' pets, and sort animals by popularity, price, location, type, or category. Additionally, users can perform keyword searches, read news about animals, and access partner contact information. Additional libraries used: react-hook-form, react-router-dom, date-fns, formik, yup, react-select, react-toastify, redux-persist.",
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
      "This team project was developed based on a design created in Figma. The layout features a fluid design starting at 320px and becomes fully adaptive from 375px onward. The application is a task management tool, serving as an alternative to Trello. Additional libraries used: styled-components, react-hook-form, react-router-dom, yup, react-icons, react-toastify, redux-persist. My Contributions: Frontend development (including logic, markup, and styles) for User registration and login; User profile editing; Task filtering and moving tasks between sections; Modal windows for adding and editing sections; Displaying tasks on the task board.",
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
      "This team project was developed based on a design created in Figma. The layout is fully adaptive, ensuring a seamless user experience across devices. The application is an online grocery store, designed to simplify shopping with an intuitive interface and dynamic features. Additional technologies used: Local Storage. I was responsible for implementing the dynamic Cart feature, utilizing Local Storage for data persistence.",
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
      "This team project was developed based on a design created in Figma. The layout is fully adaptive, providing a smooth and engaging user experience across various device. The application is a minimalist furniture website designed to showcase products in a clean and modern interface. I was responsible for developing the footer section, which includes links to a Google Map for easy location access and social media links to enhance user connectivity and engagement.",
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

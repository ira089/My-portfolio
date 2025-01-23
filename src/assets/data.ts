import { nanoid } from "nanoid";
import { IProject } from "../models";

const projects: IProject[] = [
  {
    title: "E-Pharmacy",
    id: nanoid(),
    photos: [
      "https://i.imgur.com/mWv2xlN.jpg",
      "https://i.imgur.com/JB9EOip.jpg",
      "https://i.imgur.com/2PbSPbE.jpg",
      "https://i.imgur.com/lRAQM0z.jpg",
    ],
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "REST API",
      "material UI",
      "Redux",
      "axios",
      "Webpack",
    ],
    description: "E-Pharmacy",
  },
  {
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
    description: "LearnForeignLanguage",
  },
  {
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
      "REST API",
      "material UI",
      "Redux",
      "axios",
      "Webpack",
    ],
    description:
      "The project was created according to the layout Figma. Additional technologies used: react-hook-form, react-router-dom, date-fns, formik, yup, react-select, react-toastify, redux-persist. This is an app about pets. You can record your pet's details, read about other people's pets, sort animals by popularity, price, location, animal type, or category. You can search simply by keyword. You can read news about animals or see partners' contacts. ",
  },
  {
    title: "E-Pharmacy",
    id: nanoid(),
    photos: ["https://i.imgur.com/bwLHrNs.png"],
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "REST API",
      "Redux",
      "axios",
      "Node JS",
    ],
    description: "Lorem kdflejflsdc,x c,c lkenfjflkd,x c, v.,vldk",
  },
];

export default projects;

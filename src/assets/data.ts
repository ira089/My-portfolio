import { nanoid } from "nanoid";
import { IProject } from "../models";
import LL1 from "./image/Learn Lingo1.jpg";
// import LL from "./image/Learn Lingo .jpg";
import LL3 from "./image/Learn Lingo3.jpg";
import LL2 from "./image/Learn Lingo2.png";

const projects: IProject[] = [
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
      "material UI",
      "Redux",
      "axios",

      "Webpack",
    ],
  },
  {
    title: "LearnForeignLanguage",
    id: nanoid(),
    photos: ["https://i.imgur.com/BA46ORF.png", LL1, LL2, LL3],
    gitUrl: "https://github.com/ira089/LearnForeignLanguage",
    website: "https://ira089.github.io/LearnForeignLanguage/",
    skills: ["JavaScript", "React", "HTML", "CSS", "Redux", "Webpack"],
  },
  {
    title: "E-Pharmacy",
    id: nanoid(),
    photos: ["https://i.imgur.com/bwLHrNs.png"],
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: ["JavaScript", "material UI", "Redux", "axios"],
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
  },
];

export default projects;

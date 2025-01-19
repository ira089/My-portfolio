import { nanoid } from "nanoid";
import { IProject } from "../models";

const projects: IProject[] = [
  {
    title: "E-Pharmacy",
    id: nanoid(),
    image: "https://i.imgur.com/bwLHrNs.png",
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: [
      "React",
      "HTML",
      "CSS",
      "REST API",
      "material UI",
      "Redux",
      "axios",
      "formik",
      "yup",
    ],
  },
  {
    title: "E-Pharmacy",
    id: nanoid(),
    image: "https://i.imgur.com/bwLHrNs.png",
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: ["React", "HTML", "CSS", "Node JS", "formik", "yup"],
  },
  {
    title: "E-Pharmacy",
    id: nanoid(),
    image: "https://i.imgur.com/bwLHrNs.png",
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: ["material UI", "Redux", "axios", "formik", "yup"],
  },
  {
    title: "E-Pharmacy",
    id: nanoid(),
    image: "https://i.imgur.com/bwLHrNs.png",
    gitUrl: "https://github.com/ira089/Pharmacy",
    website: "https://ira089.github.io/Pharmacy/",
    skills: ["React", "HTML", "CSS", "REST API", "Redux", "axios", "formik"],
  },
];

export default projects;

import { useState } from "react";
import skills from "../assets/skills";
import "../index.scss";

const SkillsList = () => {
  const [skillId, setSkillId] = useState(0);
  console.log(skillId);

  const elementSkills = skills.map((obj, index) => (
    <li
      onClick={() => setSkillId(index)}
      className={skillId === index ? "active" : ""}
      key={obj.name}
    >
      {obj.name}
    </li>
  ));
  return <ul className="tags">{elementSkills}</ul>;
};

export default SkillsList;

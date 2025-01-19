import { useState } from "react";
import { useAppDispatch } from "../hook";
import { optionSkill } from "../redux/slice";
import skillsName from "../assets/skills";
import "../index.scss";

const SkillsList: React.FC = () => {
  const dispatch = useAppDispatch();

  const [skillId, setSkillId] = useState(0);
  console.log(skillId);

  const handleClick = (ind: number) => {
    setSkillId(ind);
    dispatch(optionSkill(ind));
  };

  const elementSkills = skillsName.map((obj, index) => (
    <li
      onClick={() => handleClick(index)}
      className={skillId === index ? "active" : ""}
      key={obj.name}
    >
      {obj.name}
    </li>
  ));
  return <ul className="tags">{elementSkills}</ul>;
};

export default SkillsList;

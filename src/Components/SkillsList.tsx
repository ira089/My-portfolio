import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { optionSkill } from "../redux/slice";
import skillsName from "../assets/skills";
import "../index.scss";

const SkillsList = () => {
  const dispatch = useDispatch();

  const [skillId, setSkillId] = useState(0);
  console.log(skillId);

  const handleClick = (ind: SetStateAction<number>) => {
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

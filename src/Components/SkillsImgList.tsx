// import { useState } from "react";
import skillsName from "../assets/skills";
import { useAppSelector } from "../hook";
// import { selectorSkill } from "../redux/selector";
import SkillsImgitem from "./SkillsImgitem";
import projects from "../assets/data";
import "../index.scss";

const SkillsImgList: React.FC = () => {
  const skillId = useAppSelector((state) => state.skill.skillId);
  // const { skillId } = useSelector(selectorSkill);
  console.log(skillId);
  // console.log(skillsName[skillId].name);
  const optionSkill = skillsName[skillId].name;

  const elements =
    skillId === 0
      ? projects.map((item) => <SkillsImgitem key={item.id} project={item} />)
      : projects
          .filter((obj) => obj.skills.includes(optionSkill))
          .map((item) => <SkillsImgitem key={item.id} project={item} />);

  // const elements = projects.map((item) => (
  //   <SkillsImgitem key={item.id} item={item} />
  // ));

  // const elements = projects
  //   .filter((obj) => obj.skills.includes(optionSkill))
  //   .map((item) => <SkillsImgitem key={item.id} item={item} />);

  return <div className="content">{elements}</div>;
};

export default SkillsImgList;

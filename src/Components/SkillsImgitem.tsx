import project from "../assets/data";

const SkillsImgitem = () => {
  return (
    <div>
      <h3>{project[0].title}</h3>
      <p>{project[0].id}</p>
      <img src={project[0].image} alt="projekt" />
      <a href={project[0].gitUrl} target="_blank">
        GitHub
      </a>
    </div>
  );
};

export default SkillsImgitem;

import { IProject } from "../models";

interface ProjectProps {
  project: IProject;
}

const SkillsImgitem: React.FC<ProjectProps> = ({ project }) => {
  const { title, photos, gitUrl, website } = project;
  return (
    <div className="collection">
      <h4>{title}</h4>

      <img className="collection__big" src={photos[0]} alt="projekt" />
      <div className="collection__bottom">
        <img className="collection__mini" src={photos[1]} alt="Item" />
        <img className="collection__mini" src={photos[2]} alt="Item" />
        <img className="collection__mini" src={photos[3]} alt="Item" />
      </div>
      <a href={gitUrl} target="_blank">
        GitHub
      </a>
      <a href={website} target="_blank">
        Website
      </a>
      <button>Find out more</button>
    </div>
  );
};

export default SkillsImgitem;

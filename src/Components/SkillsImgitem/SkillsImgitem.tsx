import { IProject } from "../../models";
import "./skillsImgitem.scss";

interface ProjectProps {
  project: IProject;
  onOpen: (description: string) => void;
  onOpenImg: (photos: string[]) => void;
}

const SkillsImgitem: React.FC<ProjectProps> = ({
  project,
  onOpen,
  onOpenImg,
}) => {
  const { title, photos, gitUrl, website, description } = project;

  return (
    <div className="collection">
      <h4>{title}</h4>
      <div className="wrapLink">
        <a href={gitUrl} target="_blank">
          GitHub
        </a>
        <a href={website} target="_blank">
          Website
        </a>
        <button onClick={() => onOpen(description)}>Find out more</button>
      </div>

      <img
        onClick={() => onOpenImg(photos)}
        className="collection__big"
        src={photos[0]}
        alt="projekt"
      />
    </div>
  );
};

export default SkillsImgitem;

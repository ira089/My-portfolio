import { IProject } from "../models";

interface ProjectProps {
  project: IProject;
  onOpen: (description: string) => void;
  onOpenImg: (photo: string) => void;
}

const SkillsImgitem: React.FC<ProjectProps> = ({
  project,
  onOpen,
  onOpenImg,
}) => {
  const { title, photos, gitUrl, website, description } = project;
  const lengthProject = project.photos.length;

  return (
    <div className="collection">
      <h4>{title}</h4>

      <img
        onClick={() => onOpenImg(photos[0])}
        className={lengthProject === 4 ? "collection__big" : "collection__one"}
        // className="collection__big"
        src={photos[0]}
        alt="projekt"
      />

      {lengthProject === 4 && (
        <div className="collection__bottom">
          <img
            onClick={() => onOpenImg(photos[1])}
            className="collection__mini"
            src={photos[1]}
            alt="Item"
          />
          <img
            onClick={() => onOpenImg(photos[2])}
            className="collection__mini"
            src={photos[2]}
            alt="Item"
          />
          <img
            onClick={() => onOpenImg(photos[3])}
            className="collection__mini"
            src={photos[3]}
            alt="Item"
          />
        </div>
      )}

      <div className="wrapLink">
        <a href={gitUrl} target="_blank">
          GitHub
        </a>
        <a href={website} target="_blank">
          Website
        </a>
        <button onClick={() => onOpen(description)}>Find out more</button>
      </div>
    </div>
  );
};

export default SkillsImgitem;

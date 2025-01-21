import { IProject } from "../models";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "./Modal";
import ModalDescription from "./ModalDescription";

interface ProjectProps {
  project: IProject;
}

const SkillsImgitem: React.FC<ProjectProps> = ({ project }) => {
  const { modal, open, close } = useContext(ModalContext);

  const { title, photos, gitUrl, website, description } = project;
  return (
    <>
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
        <button onClick={open}>Find out more</button>
      </div>
      {modal && (
        <Modal text={description} onClose={close}>
          <ModalDescription />
        </Modal>
      )}
    </>
  );
};

export default SkillsImgitem;

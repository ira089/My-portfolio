import { useState } from "react";
import skillsName from "../assets/skills";
import { useAppSelector } from "../hook";
import SkillsImgitem from "../Components/SkillsImgitem/SkillsImgitem";
import projects from "../assets/data";
import Modal from "../Components/Modal/Modal";
import "../index.scss";

const SkillsImgList: React.FC = () => {
  const skillId = useAppSelector((state) => state.skill.skillId);

  const optionSkill = skillsName[skillId].name;

  const [modalData, setModalData] = useState<string | null>(null);
  const openModal = (description: string) => {
    setModalData(description);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const [modalImg, setModalImg] = useState<string[] | null>(null);
  const openModalImg = (photos: string[]) => {
    setModalImg(photos);
  };

  const closeModalImg = () => {
    setModalImg(null);
  };

  const elements =
    skillId === 0
      ? projects.map((item) => (
          <SkillsImgitem
            key={item.id}
            project={item}
            onOpen={openModal}
            onOpenImg={openModalImg}
          />
        ))
      : projects
          .filter((obj) => obj.skills.includes(optionSkill))
          .map((item) => (
            <SkillsImgitem
              key={item.id}
              project={item}
              onOpen={openModal}
              onOpenImg={openModalImg}
            />
          ));

  return (
    <>
      <div className="content">{elements}</div>
      {modalData && <Modal text={modalData} onClose={closeModal} />}
      {modalImg && <Modal images={modalImg} onClose={closeModalImg} />}
    </>
  );
};

export default SkillsImgList;

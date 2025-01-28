import ModalSwiper from "../ModalSwiper/ModalSwiper";
import "./modal.scss";

interface ModalProps {
  text?: string;
  images?: string[];
  onClose: () => void;
}

const Modal = ({ text, onClose, images }: ModalProps) => {
  // console.log(images[2]);
  // console.log(text);
  return (
    <>
      <div className="modal" onClick={onClose} />

      <div className="content-modal">
        {images && <ModalSwiper images={images} />}
        {text && (
          <>
            <h2>Brief description of the project</h2>
            <p>{text}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;

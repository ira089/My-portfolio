interface ModalProps {
  text?: string;
  image?: string;
  onClose: () => void;
}

const Modal = ({ text, onClose, image }: ModalProps) => {
  return (
    <>
      <div className="modal" onClick={onClose} />

      <div className="content-modal">
        {image && <img src={image} alt="item" />}
        {text && <p>{text}</p>}
      </div>
    </>
  );
};

export default Modal;

interface ModalProps {
  children: React.ReactNode;
  text: string;

  onClose: () => void;
}

const Modal = ({ children, text, onClose }: ModalProps) => {
  return (
    <>
      <div className="modal" onClick={onClose} />

      <div className="content-modal">
        <p>{text}</p>
        {children}
      </div>
    </>
  );
};

export default Modal;

interface ModalProps {
  children: React.ReactNode;
  description: string;
  onClose: () => void;
}

const Modal = ({ children, description, onClose }: ModalProps) => {
  return (
    <>
      <div className="modal" onClick={onClose} />
      <div className="content-modal">
        <p>{description}</p>
        {children}
      </div>
    </>
  );
};

export default Modal;

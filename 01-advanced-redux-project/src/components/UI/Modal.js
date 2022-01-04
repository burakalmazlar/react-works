import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal">{props.children}</div>
    </>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
    document.getElementById("overlay")
  );
};

export default Modal;

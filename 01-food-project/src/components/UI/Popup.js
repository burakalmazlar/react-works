import ReactDOM from "react-dom";

import classes from "./Popup.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onCartSwitch}></div>
);

const Modal = (props) => <div className={classes.modal}>{props.children}</div>;

const Popup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCartSwitch={props.onCartSwitch} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Popup;

import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => 
{
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => 
{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

// Element in the index.html file where we'll teleport our Modal
const portalElement = document.getElementById("overlays");

// Note: A modal is an Overlay that will block interaction with the back part of the UI
const Modal = (props) => 
{
    return(
        <>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Card from "../Card/Card";

const Backdrop = (props:any) => {
    return <div className={styles.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props:any) => {
    return (<Card className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </Card>)
};



const Modal = (props:any):JSX.Element =>{
    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,
                portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
                portalElement)}
        </>)
}

export default Modal;

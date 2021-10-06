import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

interface Props {
  onConfirm: () => void
};

const Backdrop: React.FC<Props> = props => {
  const { onConfirm } = props

  return (
    <div className={classes.backdrop} onClick={onConfirm} />
  );
};

interface ModalProps extends Props {
  title: string;
};

const ModalWindow: React.FC<ModalProps> = props => {
  const { title, onConfirm, children } = props;

  return (
    <Fragment>
      <Backdrop onConfirm={onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
          <button 
            className={classes.button} 
            onClick={onConfirm}
          >
            &#10006;
          </button>
        </header>
        {children}
      </div>
    </Fragment>
  );
}

const Modal: React.FC<ModalProps> = props => {
  const { title, onConfirm, children } = props;

  return createPortal(
      <ModalWindow 
        onConfirm={onConfirm}
        title={title}
      >
        {children}
      </ModalWindow>,
      document.getElementById('modal')!
    );
};

export default Modal;